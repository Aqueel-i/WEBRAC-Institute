export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
}

export const newsArticles: NewsArticle[] = [
{
  id: '1',
  slug: 'future-of-ai-in-education',
  title: 'The Future of AI in Modern Education',
  category: 'Announcements',
  date: 'Oct 15, 2026',
  author: 'Dr. Sarah Jenkins',
  readTime: '5 min read',
  excerpt:
  'How artificial intelligence is reshaping the way we learn and teach at WEBRAC Institute.',
  imageUrl:
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
},
{
  id: '2',
  slug: 'annual-tech-symposium-2026',
  title: 'Annual Tech Symposium 2026 Announced',
  category: 'Events',
  date: 'Oct 10, 2026',
  author: 'Admin',
  readTime: '3 min read',
  excerpt:
  'Join us for our biggest technology event of the year featuring industry leaders and student showcases.',
  imageUrl:
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
},
{
  id: '3',
  slug: 'students-win-national-hackathon',
  title: 'WEBRAC Students Win National Hackathon',
  category: 'Achievements',
  date: 'Oct 05, 2026',
  author: 'Student Affairs',
  readTime: '4 min read',
  excerpt:
  'Our final year software engineering team took first place at the National CodeFest 2026.',
  imageUrl:
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
},
{
  id: '4',
  slug: 'new-campus-facilities-opened',
  title: 'State-of-the-art Innovation Lab Opened',
  category: 'Campus Life',
  date: 'Sep 28, 2026',
  author: 'Admin',
  readTime: '2 min read',
  excerpt:
  'Explore our newly renovated innovation lab equipped with the latest AR/VR technology.',
  imageUrl:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
},
{
  id: '5',
  slug: 'industry-partnership-microsoft',
  title: 'New Partnership with Microsoft Announced',
  category: 'Announcements',
  date: 'Sep 20, 2026',
  author: 'Dr. Emily Rodriguez',
  readTime: '4 min read',
  excerpt:
  'WEBRAC Institute partners with Microsoft to provide exclusive certification pathways for students.',
  imageUrl:
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
},
{
  id: '6',
  slug: 'alumni-success-story-google',
  title: 'Alumni Spotlight: From WEBRAC to Google',
  category: 'Achievements',
  date: 'Sep 15, 2026',
  author: 'Alumni Relations',
  readTime: '6 min read',
  excerpt:
  "Read about John Doe's journey from our BSc program to becoming a Senior Engineer at Google.",
  imageUrl:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
},
{
  id: '7',
  slug: 'cultural-fest-2026',
  title: 'Highlights from Cultural Fest 2026',
  category: 'Campus Life',
  date: 'Sep 10, 2026',
  author: 'Student Council',
  readTime: '3 min read',
  excerpt:
  "A look back at the vibrant performances and celebrations during this year's cultural festival.",
  imageUrl:
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800'
},
{
  id: '8',
  slug: 'cybersecurity-workshop-series',
  title: 'Upcoming Cybersecurity Workshop Series',
  category: 'Events',
  date: 'Sep 05, 2026',
  author: 'Dr. Anita Patel',
  readTime: '2 min read',
  excerpt:
  'Register now for our intensive 3-day workshop on modern cybersecurity threats and defenses.',
  imageUrl:
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
}];