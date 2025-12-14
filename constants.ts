import { Project, DemographicData } from './types';

export const COMPANY_DESCRIPTION = `Khaas Re TV, established in 2017, is a premier digital content company in Maharashtra. Creators of the viral "Trump Tatya" and "Vargamantri" series, we specialize in promoting Marathi culture, films, and social awareness globally through AI Technology, Digital Networking, and Filmmaking.`;

export const SYSTEM_INSTRUCTION = `You are KhaasBot, the official AI assistant for Khaas Re TV. 
Use the following context to answer user questions enthusiastically:
- **Identity**: Khaas Re TV is a famous Marathi digital content company est. 2017.
- **Key Creations**: "Trump Tatya" (Global Marathi icon), "Vargamantri" (Web series with 50M+ impressions), "Date With" (Dating show), "#KhaasReMusic", "Las Ghya" (Vaccine song), "Oosacha Ras", "Gaavran Munde", "Baap Pandurang" (Rap on Lord Vitthal).
- **Upcoming Show**: "The Creators" - A Marathi web show (Dramedy) about three friends chasing fame and content creation dreams. Features authentic Marathi culture and explores hustle culture burnout.
- **Mission**: Propagate rural Marathi culture, support films, and spread social awareness (vaccination, unemployment).
- **Stats**: 100 Crore+ Overall Impressions, 7.30 Lakh+ YouTube Subscribers, 1 Crore+ Monthly Viewers.
- **Demographics**: 94.1% of audience is youth (13-44 age group).
- **Services**: AI Technology, Digital Networking, Filmmaking.
- **Tone**: Energetic, proud, helpful, and culturally rooted in Maharashtra.
If asked about something unrelated, politely steer the conversation back to Khaas Re TV's content.`;

export const PROJECTS: Project[] = [
  {
    title: "Vargamantri",
    description: "A blockbuster web series depicting political nuances. Garnered 5M+ official views and 50M+ impressions across platforms.",
    category: "Series",
    image: "https://i.ibb.co/VWgFpXx8/vargamantri.png",
    stats: "50M+ Impressions",
    link: "https://www.youtube.com/playlist?list=PLx03jjo19U82NhdHgseauVK3OURY_JqYN"
  },
  {
    title: "#KhaasReDubbings",
    description: "The character that captivated the global Marathi community, bringing humor and relatable content.",
    category: "Series",
    image: "https://i.ibb.co/kgYNNkbJ/dubbing.jpg",
    stats: "Viral Sensation",
    link: "https://youtube.com/playlist?list=PLx03jjo19U818oYhMpEPmZJK8x0sPbCqM&si=SCoVK_oykFxlNQZI"
  },
  {
    title: "Date With",
    description: "Young professionals from different fields meet on casual date, bonding through real conversations about work, life, and love.",
    category: "Series",
    image: "https://i.ibb.co/Ld5TS6Kd/Date-With-Deck-Pitch.jpg",
    stats: "Real Conversations",
    link: "https://youtube.com/playlist?list=PLx03jjo19U805kfKaSUrsPiQP-HwX0Ziv&si=apDSHZUSOFzTinJm"
  },
  {
    title: "#KhaasReMusic",
    description: "Marathi original songs, recreations, and experimental music content that connects strongly with youth culture and regional emotion.",
    category: "Song",
    image: "https://i.ibb.co/SwP3Bf3K/SONGS-THUMBNAILS.jpg",
    stats: "Youth Culture",
    link: "https://youtube.com/playlist?list=PLx03jjo19U83wewJeZgaDo4N3rcyr-Xe4&si=1cvncA0vuHznMEp_"
  },
  {
    title: "Las Ghya",
    description: "Awareness song encouraging millions of Indians to get vaccinated during the pandemic.",
    category: "Social Awareness",
    image: "https://i.ibb.co/qF23Gzk1/las-ghya.jpg",
    stats: "Crores Reached",
    link: "https://youtu.be/oQoz8OgkQoc?si=8721qwa8YkPuLpRn"
  },
  {
    title: "Baap Pandurang",
    description: "The world's first rap song on Lord Vitthal, blending modern music with Varkari tradition.",
    category: "Song",
    image: "https://i.ibb.co/tMt5mS4v/baap-pandurang.jpg",
    stats: "Cultural Fusion",
    link: "https://youtu.be/JlPgirJJn7M?si=7PhGy80OzPtXPmXH"
  },
  {
    title: "#KhaasRePodcast",
    description: "Maharashtra's first informal interview program with political leaders.",
    category: "Podcast",
    image: "https://i.ibb.co/RTpCdP26/podcast.jpg",
    stats: "Political Insight",
    link: "https://youtube.com/playlist?list=PLx03jjo19U82eEljn18bOOfPg31aYEfaY&si=mh6froCtafP1omeQ"
  },
  {
    title: "Gaavran Munde",
    description: "Showcasing the farmer's swag and rural lifestyle to the world.",
    category: "Song",
    image: "https://i.ibb.co/mWsnYKx/gavran-munde.jpg",
    stats: "Rural Pride",
    link: "https://youtu.be/Yk-6Se0N2l4?si=PMYl7oCvva4SJmEa"
  }
];

export const DEMOGRAPHICS: DemographicData[] = [
  { name: '13-44 Years (Youth)', value: 94.1 },
  { name: '44-65 Years', value: 5.9 },
];

export const KEY_METRICS = [
  { label: "Overall Impressions", value: "100 Cr+", subtext: "Lifetime Reach" },
  { label: "YouTube Subscribers", value: "730 K+", subtext: "Loyal Community" },
  { label: "Total Watch Time", value: "5 Lakh+", subtext: "Hours" },
  { label: "Monthly Viewers", value: "1 Cr+", subtext: "Cross Platform" },
];