import { NextResponse } from 'next/server';
import { FALLBACK_VIDEOS } from '@/data/fallbackData';
import { VideoStory } from '@/types';

export const revalidate = 900; // Cache for 15 minutes to stay fresh with new uploads

// Helper to extract XML tags
function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? match[1].trim() : '';
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i'));
  return match ? match[1] : '';
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const maxResults = parseInt(searchParams.get('maxResults') || '6', 10);
  const order = searchParams.get('order') || 'date'; // 'date' for newest, 'viewCount' for top viewed
  const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCKrkBlU3cBn0CaSlH7WGIyw';
  const apiKey = process.env.YOUTUBE_API_KEY;

  // 1. Try YouTube Data API if API Key is available
  if (apiKey) {
    try {
      const orderParam = order === 'viewCount' ? 'viewCount' : 'date';
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=${orderParam}&maxResults=${maxResults}&type=video`;
      const res = await fetch(url, { next: { revalidate: 900 } });
      if (res.ok) {
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          const videos: VideoStory[] = data.items.map((item: any, idx: number) => {
            const title = item.snippet.title || 'Untitled Story';
            const description = item.snippet.description || '';
            const vidId = item.id.videoId;
            return {
              id: vidId || `yt-${idx}`,
              youtubeId: vidId,
              title: title,
              titleBn: title,
              category: 'horror',
              categoryLabel: { en: order === 'viewCount' ? 'Top Viewed' : 'Latest Tale', bn: order === 'viewCount' ? 'সর্বাধিক জনপ্রিয়' : 'নতুন পর্ব' },
              description: description.slice(0, 180) + (description.length > 180 ? '...' : ''),
              descriptionBn: description.slice(0, 180) + (description.length > 180 ? '...' : ''),
              thumbnail: item.snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`,
              publishedAt: item.snippet.publishedAt?.split('T')[0] || 'Recent',
              views: order === 'viewCount' ? 'Top Viewed' : 'Toon Fable Original',
              featured: idx === 0,
            };
          });

          return NextResponse.json({
            source: 'youtube-api',
            items: videos.slice(0, maxResults),
            total: videos.length,
          });
        }
      }
    } catch (e) {
      console.warn('YouTube Data API failed, falling back to direct channel feed:', e);
    }
  }

  // 2. Direct Live YouTube Channel RSS Feed (No API key needed, always dynamic in real-time)
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const rssRes = await fetch(rssUrl, {
      next: { revalidate: 900 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    if (rssRes.ok) {
      const xmlText = await rssRes.text();
      const entries = xmlText.split('<entry>').slice(1);

      if (entries.length > 0) {
        let liveVideos: VideoStory[] = entries.map((entryXml, idx) => {
          const videoId = extractTag(entryXml, 'yt:videoId') || extractTag(entryXml, 'id').replace('yt:video:', '');
          const rawTitle = extractTag(entryXml, 'title');
          const title = rawTitle.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
          const published = extractTag(entryXml, 'published').split('T')[0] || 'Recent';
          const description = extractTag(entryXml, 'media:description');
          const thumbnail = extractAttr(entryXml, 'media:thumbnail', 'url') || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          const viewsAttr = extractAttr(entryXml, 'media:statistics', 'views');
          const viewCount = parseInt(viewsAttr || '0', 10);

          return {
            id: videoId || `live-${idx}`,
            youtubeId: videoId,
            title: title || 'Toon Fable Bangla Episode',
            titleBn: title || 'টুন ফেবল বাংলা গল্প',
            category: 'horror',
            categoryLabel: { en: order === 'viewCount' ? 'Top Viewed' : 'Latest Release', bn: order === 'viewCount' ? 'সর্বাধিক জনপ্রিয়' : 'নতুন পর্ব' },
            description: description.slice(0, 180) + (description.length > 180 ? '...' : ''),
            descriptionBn: description.slice(0, 180) + (description.length > 180 ? '...' : ''),
            thumbnail: thumbnail,
            publishedAt: published,
            views: viewsAttr ? `${parseInt(viewsAttr).toLocaleString()} views` : 'Toon Fable Original',
            featured: idx === 0,
            _rawViews: viewCount
          };
        });

        // If order === 'viewCount', sort by views descending
        if (order === 'viewCount') {
          liveVideos.sort((a: any, b: any) => (b._rawViews || 0) - (a._rawViews || 0));
        }

        return NextResponse.json({
          source: 'youtube-live-feed',
          items: liveVideos.slice(0, maxResults),
          total: liveVideos.length,
        });
      }
    }
  } catch (error) {
    console.error('Error fetching live YouTube RSS feed:', error);
  }

  // 3. Guaranteed Fallback
  const fallbackList = [...FALLBACK_VIDEOS];
  if (order === 'viewCount') {
    fallbackList.sort((a, b) => (parseInt((b.views || '').replace(/[^0-9]/g, '') || '0') - parseInt((a.views || '').replace(/[^0-9]/g, '') || '0')));
  }

  return NextResponse.json({
    source: 'fallback',
    items: fallbackList.slice(0, maxResults),
    total: fallbackList.length,
  });
}
