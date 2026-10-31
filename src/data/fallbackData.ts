import { VideoStory, Character, StoryWorld } from '../types';

export const STORY_WORLDS: StoryWorld[] = [
  {
    id: 'horror',
    title: 'Bengali Horror & Bhuter Golpo',
    titleBn: 'ভৌতিক ও ভূতের গল্প',
    tagline: 'When the lantern flickers at midnight',
    taglineBn: 'মধ্যরাতে যখন নিভু নিভু লণ্ঠন জ্বলে',
    description: 'Chilling tales born from the dark misty bamboo groves, abandoned zamindar estates, and the eerie whispers of rural Bengal nights.',
    descriptionBn: 'গ্রামের বাঁশবাগান, ভাঙা পোড়ো জমিদার বাড়ি আর নিস্তব্ধ কুয়াশাচ্ছন্ন রাতের গা ছমছমে অতিলৌকিক সব গল্প।',
    coverImage: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#7D2F32',
    elementCount: '24+ Tales',
    stories: ['The Abandoned Rajbari', 'Whispers in the Bamboo Grove', 'The Midnight Ferry of Ichamati']
  },
  {
    id: 'mystery',
    title: 'Mystery & Suspense',
    titleBn: 'রহস্য ও রোমাঞ্চ',
    tagline: 'Truth concealed behind ancient locked doors',
    taglineBn: 'পুরোনো বদ্ধ দরজার ওপারে লুকিয়ে থাকা সত্য',
    description: 'Intricate Bengali detective adventures, unsolved village riddles, cursed heirlooms, and psychological suspense.',
    descriptionBn: 'গ্রামের অমীমাংসিত রহস্য, অভিশপ্ত প্রাচীন সম্পত্তি আর রোমাঞ্চকর রহস্য সন্ধানের টানটান গল্প।',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#C98B4A',
    elementCount: '18+ Episodes',
    stories: ['The Secret of Ghosh Mansion', 'The Bell That Tolled at 3 AM', 'The Lost Heirloom']
  },
  {
    id: 'dark-fantasy',
    title: 'Dark Fantasy & Folklore',
    titleBn: 'ডার্ক ফ্যান্টাসি ও রূপকথা',
    tagline: 'Ancient entities walking between two realms',
    taglineBn: 'বাস্তব ও মায়াজগতের মাঝে বিচরণকারী প্রাচীন সত্তা',
    description: 'Enchanted forests where shapeshifting spirits, celestial guardians, and mythical Bengali folklore creatures dwell.',
    descriptionBn: 'মায়াবী অরণ্য, রূপবদলকারী অতিলৌকিক সত্ত্বা আর বাংলার প্রাচীন লোকগাথার জাদুকরী জগৎ।',
    coverImage: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#536B63',
    elementCount: '15+ Epics',
    stories: ['The Guardians of Banyan Grove', 'The Eclipse of the Moon-Spirit', 'The River Maiden’s Curse']
  },
  {
    id: 'moral',
    title: 'Moral Tales with Unexpected Twists',
    titleBn: 'নীতিকথা ও অপ্রত্যাশিত মোড়',
    tagline: 'Wisdom cloaked in gripping animation',
    taglineBn: 'শিক্ষণীয় বার্তার আড়ালে লুকিয়ে থাকা রোমাঞ্চকর সমাপ্তি',
    description: 'Thought-provoking stories for all generations where greed meets destiny and virtuous hearts find wondrous blessings.',
    descriptionBn: 'লোভ ও অহংকারের করুণ পরিণতি এবং সততার অভাবনীয় বিজয়ের শিক্ষণীয় অ্যানিমেশন রূপক।',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#D4AF37',
    elementCount: '30+ Stories',
    stories: ['The Two Woodcutters', 'The Golden Fish of Rupnarayan', 'The Mirror of Truth']
  },
  {
    id: 'paranormal',
    title: 'Paranormal Investigations',
    titleBn: 'অলৌকিক অভিযান ও অনুসন্ধান',
    tagline: 'Venturing where common sense forbids',
    taglineBn: 'যেখানে সাধারণ মানুষ যেতে ভয় পায়',
    description: 'Expeditions into haunted ruins, forgotten riverbanks, and mysterious occurrences documented through rich animation.',
    descriptionBn: 'পোড়ো মন্দির, শ্মশানের ধারের পথ আর অতিলৌকিক ঘটনার রোমহর্ষক অ্যানিমেশন অনুসন্ধান।',
    coverImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#9370DB',
    elementCount: '12+ Expeditions',
    stories: ['The Ghastly Ghat of Padma', 'Voices from the Well', 'The Phantom Train']
  },
  {
    id: 'adventure',
    title: 'Bengali Cartoon Adventures',
    titleBn: 'অ্যানিমেশন রোমাঞ্চ ও অভিযান',
    tagline: 'Heroic quests across timeless lands',
    taglineBn: 'বীরত্বপূর্ণ যাত্রা আর স্বপ্নময় অভিযান',
    description: 'High-octane animated journeys featuring courageous village youths discovering magical relics and fighting supernatural perils.',
    descriptionBn: 'সাহসী তরুণদের রোমাঞ্চকর অভিযান, মায়াবী প্রাচীন শক্তির সন্ধান এবং রোমাঞ্চকর লড়াই।',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#E5A85C',
    elementCount: '20+ Adventures',
    stories: ['The Quest for the Sunstone', 'The Island of Whispering Trees', 'The Flying Palanquin']
  }
];

export const FALLBACK_SHORTS_BN: VideoStory[] = [
  {
    id: 'lpuMCt6vp0E',
    youtubeId: 'lpuMCt6vp0E',
    title: 'পাড়ার বন্ধু দের kali puja #kalipuja2026 #shorts',
    titleBn: 'পাড়ার বন্ধু দের kali puja #kalipuja2026 #shorts',
    category: 'horror',
    categoryLabel: { en: 'Latest Shorts', bn: 'নতুন শর্টস' },
    description: 'Kali Puja celebration with friends #shorts',
    descriptionBn: 'পাড়ার বন্ধুদের সাথে কালী পুজো #shorts',
    thumbnail: 'https://i.ytimg.com/vi/lpuMCt6vp0E/hqdefault.jpg',
    publishedAt: '2026-10-28',
    views: 'Toon Fable Shorts',
    featured: true
  },
  {
    id: 'X4lMEtOaxvc',
    youtubeId: 'X4lMEtOaxvc',
    title: 'সন্দেশ with সিংহ 😋 | #bijoyadashami',
    titleBn: 'সন্দেশ with সিংহ 😋 | #bijoyadashami',
    category: 'horror',
    categoryLabel: { en: 'Official Selection', bn: 'জনপ্রিয় শর্টস' },
    description: 'Bijoya Dashami special short animation',
    descriptionBn: 'বিজয়া দশমী স্পেশাল শর্ট অ্যানিমেশন',
    thumbnail: 'https://i.ytimg.com/vi/X4lMEtOaxvc/hqdefault.jpg',
    publishedAt: '2026-10-15',
    views: 'Toon Fable Shorts'
  },
  {
    id: 'Dy2rx4PVhhs',
    youtubeId: 'Dy2rx4PVhhs',
    title: 'শুভ বিজয়া #shorts #দূর্গাপূজা',
    titleBn: 'শুভ বিজয়া #shorts #দূর্গাপূজা',
    category: 'horror',
    categoryLabel: { en: 'Now Playing', bn: 'চলমান শর্টস' },
    description: 'Shubho Bijoya greetings and short animation',
    descriptionBn: 'শুভ বিজয়ার শুভেচ্ছা ও শর্ট অ্যানিমেশন',
    thumbnail: 'https://i.ytimg.com/vi/Dy2rx4PVhhs/hqdefault.jpg',
    publishedAt: '2026-10-14',
    views: 'Toon Fable Shorts'
  }
];

export const FALLBACK_SHORTS_EN: VideoStory[] = [
  {
    id: '3uZvY6u5-hM',
    youtubeId: '3uZvY6u5-hM',
    title: 'Jingle Bell Song । Christmas Status। Merry Christmas #shortsfeed',
    titleBn: 'Jingle Bell Song । Christmas Status। Merry Christmas #shortsfeed',
    category: 'adventure',
    categoryLabel: { en: 'Latest Shorts', bn: 'নতুন শর্টস' },
    description: 'Jingle Bell Song animated status #shortsfeed',
    descriptionBn: 'জিংগল বেল গান অ্যানিমেটেড শর্টস',
    thumbnail: 'https://i.ytimg.com/vi/3uZvY6u5-hM/hqdefault.jpg',
    publishedAt: '2025-12-24',
    views: 'Toon Fable Shorts',
    featured: true
  },
  {
    id: 'DLvB-JD_BmU',
    youtubeId: 'DLvB-JD_BmU',
    title: 'Twinkle twinkle little star ⭐ । Rhymes for kids - #shortsvideo #shorts',
    titleBn: 'Twinkle twinkle little star ⭐ । Rhymes for kids - #shortsvideo #shorts',
    category: 'adventure',
    categoryLabel: { en: 'Official Selection', bn: 'জনপ্রিয় শর্টস' },
    description: 'Twinkle Twinkle Little Star animated rhyme for kids #shorts',
    descriptionBn: 'টুইঙ্কল টুইঙ্কল লিটল স্টার ছড়ার অ্যানিমেশন #shorts',
    thumbnail: 'https://i.ytimg.com/vi/DLvB-JD_BmU/hqdefault.jpg',
    publishedAt: '2025-12-20',
    views: 'Toon Fable Shorts'
  },
  {
    id: 'fqAJ6Of4S9Q',
    youtubeId: 'fqAJ6Of4S9Q',
    title: 'New version of the Milk maid and her pail english story। Toon fable',
    titleBn: 'New version of the Milk maid and her pail english story। Toon fable',
    category: 'moral',
    categoryLabel: { en: 'Now Playing', bn: 'চলমান শর্টস' },
    description: 'The Milkmaid and Her Pail animated English fable',
    descriptionBn: 'মিল্কমেইড অ্যান্ড হার পেল ইংরেজি গল্পের রূপক',
    thumbnail: 'https://i.ytimg.com/vi/fqAJ6Of4S9Q/hqdefault.jpg',
    publishedAt: '2025-12-15',
    views: 'Toon Fable Shorts'
  }
];

export const FALLBACK_VIDEOS: VideoStory[] = [
  {
    id: 'tf-01',
    youtubeId: 'UCKrkBlU3cBn0CaSlH7WGIyw',
    title: 'The Mystery of the Old Zamindar Bari | Bengali Ghost Story',
    titleBn: 'পুরোনো জমিদার বাড়ির অলৌকিক রহস্য | বাংলা ভূতের গল্প',
    category: 'horror',
    categoryLabel: { en: 'Horror', bn: 'ভৌতিক' },
    description: 'On a stormy monsoon night in rural Bengal, a curious traveler seeks shelter inside an abandoned 200-year-old aristocratic mansion. What waits behind the chained wooden doors?',
    descriptionBn: 'এক বর্ষণমুখর ঝড়ের রাতে এক পথিক আশ্রয় নেয় ২০০ বছরের পুরোনো পরিত্যক্ত জমিদার বাড়িতে। কিন্তু সদর দরজার ওপারে তার জন্য কী অপেক্ষা করছিল?',
    thumbnail: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2025-02-15',
    duration: '14:20',
    characters: ['Anirban', 'Brahmodaittya'],
    views: '125K Views',
    featured: true
  },
  {
    id: 'tf-02',
    youtubeId: 'tf-video-2',
    title: 'The Shakchunni of the Misty Pond | Folk Horror Animation',
    titleBn: 'কুয়াশাচ্ছন্ন দীঘির শাঁখচুন্নি | অ্যানিমেশন ভৌতিক গল্প',
    category: 'horror',
    categoryLabel: { en: 'Horror', bn: 'ভৌতিক' },
    description: 'Legends spoke of the solitary woman who wandered the village ghat wearing conch bangles. When young Subhas ignored the warnings, the water began to swirl with dark shadows.',
    descriptionBn: 'গ্রামের প্রবীণরা বলতেন রাতের বেলায় দীঘির ঘাটে শাঁখা পরা কাউকে দেখলে পেছন ফিরে তাকাতে নেই। সুভাষ যখন সেই সতর্কবার্তা অমান্য করল...',
    thumbnail: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2025-02-08',
    duration: '18:45',
    characters: ['Shankhachurni', 'Budo Dadu'],
    views: '240K Views',
    featured: true
  },
  {
    id: 'tf-03',
    youtubeId: 'tf-video-3',
    title: 'The Cursed Bell of Nilkuthi | Mystery & Suspense',
    titleBn: 'নীলকুঠির অভিশপ্ত ঘণ্টা | রহস্য ও রোমাঞ্চ',
    category: 'mystery',
    categoryLabel: { en: 'Mystery', bn: 'রহস্য' },
    description: 'Every full moon at 3 AM, an ancient iron bell rings from the forest ruins of Nilkuthi, though no ropes remain attached. Anirban decides to investigate the truth.',
    descriptionBn: 'প্রতি অমাবস্যা আর পূর্ণিমার মধ্যরাতে নীলকুঠির ধ্বংসাবশেষ থেকে বেজে ওঠে এক বিশালাকার ঘণ্টা। সেখানে তো কোনো দড়িই বাঁধা নেই, তবে ঘণ্টা বাজায় কে?',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2025-01-28',
    duration: '16:10',
    characters: ['Anirban'],
    views: '89K Views'
  },
  {
    id: 'tf-04',
    youtubeId: 'tf-video-4',
    title: 'The Greedy Fisherman and the Mecho Bhoot | Moral Twist',
    titleBn: 'লোভী জেলে এবং মেছো ভূত | নীতিকথা ও রূপকথা',
    category: 'moral',
    categoryLabel: { en: 'Moral Tale', bn: 'নীতিকথা' },
    description: 'A poor fisherman strikes an eerie midnight bargain with a fish-loving spirit. A heartwarming moral story with an unpredictable supernatural twist.',
    descriptionBn: 'মাছের লোভে এক জেলে মাঝরাতে নদীতীরে এমন একজনের সাথে চুক্তি করল যার পা পেছনের দিকে ঘোরানো! লোভের পরিণতি কী হতে পারে?',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2025-01-14',
    duration: '12:35',
    characters: ['Mecho Bhoot', 'Budo Dadu'],
    views: '310K Views'
  },
  {
    id: 'tf-05',
    youtubeId: 'tf-video-5',
    title: 'The Sacred Banyan Guardian | Dark Fantasy Epic',
    titleBn: 'বটবৃক্ষের প্রাচীন রক্ষক | ডার্ক ফ্যান্টাসি',
    category: 'dark-fantasy',
    categoryLabel: { en: 'Dark Fantasy', bn: 'ডার্ক ফ্যান্টাসি' },
    description: 'When greedy merchants attempt to cut down the thousand-year-old sacred banyan tree of Sundarban border, the ancient spirit Brahmodaittya awakens to protect the realm.',
    descriptionBn: 'সুন্দরবনের সীমানায় অবস্থিত হাজার বছরের প্রাচীন বটগাছটি যখন লোভী ব্যবসায়ীরা কাটতে যায়, তখন জাগ্রত হয় তার অতিলৌকিক রক্ষক।',
    thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2025-01-02',
    duration: '22:15',
    characters: ['Brahmodaittya'],
    views: '198K Views'
  },
  {
    id: 'tf-06',
    youtubeId: 'tf-video-6',
    title: 'The Midnight Call (Nishi Daak) | Bengali Folklore Horror',
    titleBn: 'নিশি ডাকের আতঙ্ক | বাংলা লোকগাথা ভৌতিক অ্যানিমেশন',
    category: 'paranormal',
    categoryLabel: { en: 'Paranormal', bn: 'অলৌকিক' },
    description: 'In Bengali folklore, if someone calls your name three times at dead of night, never answer before the third call. What happened when Bikram answered on the second?',
    descriptionBn: 'বাংলার রূপকথার সেই চিরচেনা সতর্কবার্তা— গভীর রাতে পরিচিত কণ্ঠে কেউ ডাকলে তিনবারের আগে সাড়া দিতে নেই। বিক্রম যখন দ্বিতীয় ডাকেই সাড়া দিল...',
    thumbnail: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85',
    publishedAt: '2024-12-20',
    duration: '15:50',
    characters: ['Nishi Daak', 'Anirban'],
    views: '420K Views'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'brahmodaittya',
    name: 'Brahmodaittya',
    nameBn: 'ব্রহ্মদৈত্য',
    role: 'The Scholar Spirit of Sacred Banyan',
    roleBn: 'পবিত্র বটবৃক্ষের পণ্ডিত অতিলৌকিক সত্ত্বা',
    category: 'folklore-spirit',
    quote: 'Knowledge transcends mortality. Respect the ancient trees, or face the judgment of ages.',
    quoteBn: 'জ্ঞান মৃত্যুর চেয়েও চিরন্তন। প্রাচীন অরণ্যের সম্মান করো, নয়তো কালের বিচার সহ্য করতে হবে।',
    origin: 'Ancient Bengali Folklore (Brahmin Spirit)',
    originBn: 'বাংলার প্রাচীন লোকগাথা ও রূপকথা',
    description: 'An enlightened yet formidable supernatural entity residing in ancient sacred banyans and peepal trees. Clad in traditional white silk and sacred thread, Brahmodaittya protects the righteous and severely punishes deception.',
    descriptionBn: 'পবিত্র প্রাচীন বটবৃক্ষে বসবাসকারী পরম জ্ঞানী ও তেজস্বী অতিলৌকিক রূপ। শুভ মানসিকতার মানুষকে সাহায্য করেন এবং অধর্ম ও লোভীদের কঠোর শাস্তি দেন।',
    traits: ['Ancient Wisdom', 'Sacred Flame Aura', 'Protector of Nature', 'Moral Arbiter'],
    traitsBn: ['প্রাচীন প্রজ্ঞা', 'পবিত্র শিখা বলয়', 'প্রকৃতির রক্ষক', 'ন্যায়ের বিচারক'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    accentColor: '#C98B4A'
  },
  {
    id: 'shankhachurni',
    name: 'Shankhachurni & Petni',
    nameBn: 'শাঁখচুন্নি ও পেত্নী',
    role: 'Phantoms of the Twilight Mist',
    roleBn: 'গোধূলি ও কুয়াশার অতৃপ্ত ছায়ামূর্তি',
    category: 'folklore-spirit',
    quote: 'The clinking of conch bangles is not music—it is an invitation into the unseen.',
    quoteBn: 'শাঁখার মৃদু শব্দ কোনো সংগীত নয়— এটি অদৃশ্য জগতের এক রহস্যময় ডাক।',
    origin: 'Bengal Rural Folklore & Ghost Legends',
    originBn: 'বাংলার গ্রামীণ ভুতুড়ে লোকগাথা',
    description: 'Dwelling in the tops of secluded bamboo thickets and tranquil ponds, Shankhachurni wears pure white with red sindoor and conch shell bangles. Her melancholic yet perilous presence creates chilling encounters for midnight travelers.',
    descriptionBn: 'নির্জন বাঁশঝাড় ও প্রাচীন দীঘির পাড়ে যাদের আনাগোনা। লাল সিঁদুর আর শাঁখা পরা এই রূপসী কিন্তু ভয়ংকর অতিলৌকিক রূপ বাঙালি লোকগাথার সবচেয়ে চিরস্মরণীয় চরিত্র।',
    traits: ['Ethereal Mist Veil', 'Conch Echoes', 'Shapeshifting', 'Hypnotic Gaze'],
    traitsBn: ['কুয়াশার আবরণ', 'শঙ্খের প্রতিধ্বনি', 'রূপবদলকারী', 'সম্মোহনী দৃষ্টি'],
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85',
    accentColor: '#7D2F32'
  },
  {
    id: 'anirban',
    name: 'Anirban',
    nameBn: 'অনির্বাণ',
    role: 'Fearless Folk Mystery Investigator',
    roleBn: 'সাহসী ও যুক্তিবাদী রহস্য সন্ধানী',
    category: 'investigator',
    quote: 'Every haunting has a truth. Every ghost has a story waiting to be understood.',
    quoteBn: 'প্রতিটি ভৌতিক ঘটনার পেছনে একটি সত্য থাকে। প্রতিটি গল্পের আড়ালে থাকে না বলা এক ইতিহাস।',
    origin: 'Toon Fable Original Protagonist',
    originBn: 'টুন ফেবল অরিজিনাল মূল চরিত্র',
    description: 'Equipped with an antique brass lantern, an investigative diary, and an unshakable courage, Anirban journeys across rural Bengal unraveling supernatural anomalies and forgotten local histories.',
    descriptionBn: 'হাতে প্রাচীন পিতলের লণ্ঠন আর ডায়েরি নিয়ে ঘুরে বেড়ানো এক নির্ভীক তরুণ। অলৌকিক ও রহস্যময় ঘটনার পেছনের সত্য উন্মোচন করাই তার পণ।',
    traits: ['Analytical Mind', 'Folklore Scholar', 'Lantern Master', 'Unflinching Bravery'],
    traitsBn: ['তীক্ষ্ণ বিশ্লেষণ', 'লোকগাথা বিশেষজ্ঞ', 'লণ্ঠনের আলো', 'অদম্য সাহস'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=85',
    accentColor: '#536B63'
  },
  {
    id: 'mecho-bhoot',
    name: 'Mecho Bhoot',
    nameBn: 'মেছো ভূত',
    role: 'Mischievous Fish-Spirit of the Rivers',
    roleBn: 'নদী ও বিলের চঞ্চল মৎস্যপ্রেমী ভূত',
    category: 'folklore-spirit',
    quote: 'Fry me some hilsa or carp, and I might just guide your boat past the whirlpools!',
    quoteBn: 'একখানা টাটকা ইলিশ বা রুই ভাজা দাও, তবেই তো তোমার নৌকোকে ঘূর্ণিজল পার করে দেব!',
    origin: 'Bengali Comic & Spooky Folklore',
    originBn: 'বাঙালির চিরচেনা কৌতুক ও ভুতুড়ে রূপকথা',
    description: 'A whimsical, mischievous spirit who is obsessively fond of fresh fish. While not inherently evil, their playful pranks on village fishermen and nocturnal travelers are legendary across the waterways of Bengal.',
    descriptionBn: 'মাছের গন্ধে ব্যাকুল হওয়া এক অদ্ভুত মজার অতিলৌকিক প্রাণী। সাধারণত কারও ক্ষতি না করলেও মাঝরাতে জেলেদের চমকে দিয়ে মাছ ছিনিয়ে নেওয়া তাদের স্বভাব!',
    traits: ['Water Phasing', 'Fish Scent Tracker', 'Trickster Magic', 'Nocturnal Speed'],
    traitsBn: ['জলে অদৃশ্য হওয়া', 'তীব্র ঘ্রাণশক্তি', 'মজার মায়াজাল', 'দ্রুতগতি'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85',
    accentColor: '#D4AF37'
  },
  {
    id: 'budo-dadu',
    name: 'Budo Dadu (The Storyteller)',
    nameBn: 'গ্রামের কথক বুড়ো দাদু',
    role: 'Keeper of the Ancient Tales',
    roleBn: 'প্রাচীন উপকথা ও লোকগাথার অমূল্য ভাণ্ডারী',
    category: 'storyteller',
    quote: 'Come close to the courtyard fire, my children. Tonight, the wind carries a tale from 100 years ago...',
    quoteBn: 'উঠানের আগুনের কাছে এগিয়ে এসো ভাইসব। আজকের রাতের হাওয়া বয়ে আনছে একশো বছর আগের এক কাহিনি...',
    origin: 'The Heartbeat of Bengali Oral Storytelling',
    originBn: 'বাঙালির চিরায়ত আড্ডার গল্পকার',
    description: 'The beloved elder seated on the veranda, smoking a traditional hookah, who holds the living memory of every folk legend, supernatural encounter, and moral fable in Bengal.',
    descriptionBn: 'দাওয়ায় বসে হুঁকো হাতে যে প্রবীণ মানুষটি বাংলার প্রতি কোণের রূপকথা, ভৌতিক স্মৃতি আর নীতিশিক্ষা নিজের জাদুকরী কণ্ঠে সবার মাঝে ছড়িয়ে দেন।',
    traits: ['Oral Memory', 'Folklore Lorebook', 'Hypnotic Voice', 'Courtyard Charm'],
    traitsBn: ['অসাধারণ স্মৃতিশক্তি', 'উপকথার ভাণ্ডার', 'জাদুকরী কণ্ঠ', 'আড্ডার প্রাণ'],
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=85',
    accentColor: '#E5A85C'
  },
  {
    id: 'nishi-daak',
    name: 'Nishi Daak (The Eerie Whisper)',
    nameBn: 'নিশি ডাক',
    role: 'The Nocturnal Imitator of Voices',
    roleBn: 'রাতের আঁধারে পরিচিত কণ্ঠের মায়াময় ডাক',
    category: 'entity',
    quote: 'Do not step beyond your threshold when your name echoes in the midnight rain...',
    quoteBn: 'মধ্যরাতের বৃষ্টিতে যখন কেউ তোমার নাম ধরে ডাকবে, ভুলেও দরজার চৌকাঠ পেরিয়ো না...',
    origin: 'Bengal Supernatural Folklore',
    originBn: 'বাংলার লোমহর্ষক অলৌকিক বিশ্বাস',
    description: 'A shadowy paranormal phenomenon that mimics the sweet voice of a close loved one calling someone into the dark wilderness. Victims who answer the first or second call without waiting for the third fall into an irreversible trance.',
    descriptionBn: 'এক রহস্যময় ছায়ামূর্তি যে অতি পরিচিত মানুষের স্বর হুবহু নকল করে রাতের আঁধারে মানুষকে ঘরের বাইরে ডেকে নিয়ে যায়।',
    traits: ['Voice Mimicry', 'Hypnotic Trance', 'Shadow Camouflage', 'Wind Whispering'],
    traitsBn: ['কণ্ঠ নকল', 'সম্মোহন মায়া', 'ছায়ায় রূপান্তর', 'বাতাসে প্রতিধ্বনি'],
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85',
    accentColor: '#9370DB'
  }
];

export const MYSTERY_RIDDLE = {
  question: 'I have no body, yet I whisper when the bamboo sways. I carry no flame, yet eyes glow when I pass by. What am I in the heart of rural Bengal?',
  questionBn: 'আমার কোনো শরীর নেই, তবুও বাঁশঝাড়ের হাওয়ায় আমি ফিসফিস করি। আমার কোনো প্রদীপ নেই, তবুও যাওয়ার পথে চোখ জ্বলে ওঠে। আমি কে?',
  options: [
    { id: 'a', text: 'The Fog over Ichamati River', textBn: 'ইছামতি নদীর কুয়াশা', isCorrect: false },
    { id: 'b', text: 'The Spirit of the Night (নিশি ও অতিলৌকিক সত্ত্বা)', textBn: 'নিশি ও অতিলৌকিক সত্ত্বা', isCorrect: true },
    { id: 'c', text: 'The Village Temple Bell', textBn: 'গ্রামের মন্দিরের ঘণ্টা', isCorrect: false },
    { id: 'd', text: 'A Firefly in the Paddy Field', textBn: 'ধানক্ষেতের জোনাকি পোকা', isCorrect: false }
  ],
  unlockedStory: {
    title: 'The Secret Scroll of the Banyan Grove',
    titleBn: 'বটবৃক্ষের গুপ্ত পুঁথির রহস্য',
    teaser: 'You have unlocked an exclusive chapter snippet! In 1842, a mysterious brass cylinder was discovered under the roots of the ancient tree in Barasat containing 12 uncharted tales of Bengal spirits...',
    teaserBn: 'অভিনন্দন! আপনি একটি অপ্রকাশিত রহস্য অধ্যায় উন্মোচন করেছেন! ১৮৪২ সালে বারাসাতের প্রাচীন বটগাছের শিকড়ের নিচে পাওয়া তামার কৌটোয় রাখা ছিল বাংলার ১২টি অপ্রকাশিত অলৌকিক উপাখ্যান...',
    badge: 'Exclusive Lore Unlocked'
  }
};

export const STUDIO_INFO = {
  name: 'Toon Fable Bangla',
  tagline: 'Stories Beyond Imagination',
  taglineBn: 'কল্পনাতীত সব গল্প',
  hq: 'Krishan Apartment, 1st Floor, 451 Jadav Ghosh Road, Kolkata - 700060, West Bengal, India',
  hqBn: 'কৃষ্ণ অ্যাপার্টমেন্ট, ১ম তল, ৪৫১ যাদব ঘোষ রোড, কলকাতা - ৭০০০৬০, পশ্চিমবঙ্গ',
  phone: '+91 8697983909',
  email: 'toonfableindia@gmail.com',
  youtube: 'https://www.youtube.com/@toonfablebangla',
  channelId: 'UCKrkBlU3cBn0CaSlH7WGIyw',
  instagram: 'https://www.instagram.com/toonfable/',
  facebook: 'https://www.facebook.com/Toon.Fable.Cartoon.Story/',
  stats: [
    { label: 'Original Animated Stories', labelBn: 'মৌলিক অ্যানিমেশন গল্প', value: '150+' },
    { label: 'Storytelling Worlds', labelBn: 'কল্পকাহিনির বিচিত্র জগৎ', value: '6 Universes' },
    { label: 'Devoted Story Lovers', labelBn: 'শ্রোতা ও অনুরাগী পরিবার', value: '500K+' },
    { label: 'Hours of Folklore Magic', labelBn: 'ঘণ্টাব্যাপী রূপকথার জাদু', value: '1,000+' }
  ]
};
