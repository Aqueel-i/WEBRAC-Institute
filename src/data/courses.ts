export type CourseCategory = 'BIT' | 'Certificate Courses';
export type CertLevel = 'Entry Level' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  certLevel?: CertLevel;
  duration: string;
  lecturer: string;
  description: string;
  fees: string;
  schedule: string;
}

export const courses: Course[] = [

  {
    id: 'c4',
    title: 'BSc (Hons) Computer Science',
    category: 'BIT',
    duration: '3 years',
    lecturer: 'Dr. Sarah Jenkins',
    description:
      'A comprehensive degree program covering software engineering, AI, and computer systems.',
    fees: 'LKR 450,000/year',
    schedule: 'Weekends Full Day'
  },
  {
    id: 'c5',
    title: 'BSc in Information Technology',
    category: 'BIT',
    duration: '3 years',
    lecturer: 'Dr. Emily Rodriguez',
    description:
      'Focuses on practical IT skills, networking, and business information systems.',
    fees: 'LKR 400,000/year',
    schedule: 'Weekends Full Day'
  },
  {
    id: 'c6',
    title: 'Introduction to Web Development',
    category: 'Certificate Courses',
    certLevel: 'Entry Level',
    duration: '3 months',
    lecturer: 'Robert Fox',
    description:
      'Learn the basics of HTML, CSS, and JavaScript to build responsive websites.',
    fees: 'LKR 20,000',
    schedule: 'Sat 9AM - 1PM'
  },
  {
    id: 'c7',
    title: 'Advanced React Patterns',
    category: 'Certificate Courses',
    certLevel: 'Advanced',
    duration: '4 months',
    lecturer: 'Robert Fox',
    description:
      'Master modern React development including hooks, state management, and performance optimization.',
    fees: 'LKR 35,000',
    schedule: 'Sun 9AM - 1PM'
  },
  {
    id: 'c8',
    title: 'Cybersecurity Fundamentals',
    category: 'Certificate Courses',
    certLevel: 'Intermediate',
    duration: '6 months',
    lecturer: 'Dr. Anita Patel',
    description:
      'Essential concepts in network security, cryptography, and ethical hacking.',
    fees: 'LKR 40,000',
    schedule: 'Tue/Thu 6PM - 8PM'
  },
  {
    id: 'c9',
    title: 'Digital Marketing Essentials',
    category: 'Certificate Courses',
    certLevel: 'Entry Level',
    duration: '2 months',
    lecturer: 'Lisa Thompson',
    description:
      'Learn SEO, social media marketing, and digital campaign management.',
    fees: 'LKR 15,000',
    schedule: 'Wed 6PM - 9PM'
  }];