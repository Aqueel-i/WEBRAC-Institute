import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Palette,
  Beaker,
  Globe2 } from
'lucide-react';

export interface SchoolProgram {
  id: string;
  stage: string;
  ageRange: string;
  title: string;
  description: string;
  highlights: string[];
  icon: any;
  gradient: string;
}

export const schoolPrograms: SchoolProgram[] = [
{
  id: 'early-years',
  stage: 'Early Years',
  ageRange: 'Ages 3 - 5',
  title: 'Foundations Program',
  description:
  'A nurturing environment where curiosity meets play-based learning, building the foundation for a lifetime of discovery.',
  highlights: [
  'Play-based curriculum',
  'Sensory & motor skills',
  'Early literacy & numeracy',
  'Music & art exploration'],

  icon: Sparkles,
  gradient: 'from-pink-400 to-rose-400'
},
{
  id: 'primary',
  stage: 'Primary',
  ageRange: 'Ages 6 - 10',
  title: 'Primary School',
  description:
  'A balanced academic program that develops core skills, critical thinking, and a love for learning across all subjects.',
  highlights: [
  'Cambridge curriculum',
  'STEM & coding labs',
  'Languages & literature',
  'Sports & wellbeing'],

  icon: BookOpen,
  gradient: 'from-yellow-400 to-orange-400'
},
{
  id: 'junior-secondary',
  stage: 'Junior Secondary',
  ageRange: 'Ages 11 - 14',
  title: 'Middle School',
  description:
  'A rigorous and supportive program that prepares students for advanced study while nurturing their unique talents and interests.',
  highlights: [
  'IGCSE preparation',
  'Advanced sciences',
  'Creative arts & design',
  'Leadership programs'],

  icon: Palette,
  gradient: 'from-cyan-400 to-teal-400'
},
{
  id: 'senior-secondary',
  stage: 'Senior Secondary',
  ageRange: 'Ages 15 - 18',
  title: 'High School',
  description:
  'An advanced academic experience that prepares students for top universities worldwide with personalized college counseling.',
  highlights: [
  'A-Levels & IB Diploma',
  'University counseling',
  'Research opportunities',
  'Internship programs'],

  icon: GraduationCap,
  gradient: 'from-violet-400 to-purple-400'
}];


export const schoolFaculty = [
{
  id: 1,
  name: 'Ms. Catherine Reed',
  role: 'Head of Primary',
  subject: 'Early Childhood Education'
},
{
  id: 2,
  name: 'Mr. Daniel Foster',
  role: 'Mathematics Lead',
  subject: 'Pure & Applied Math'
},
{
  id: 3,
  name: 'Dr. Olivia Park',
  role: 'Science Department',
  subject: 'Biology & Chemistry'
},
{
  id: 4,
  name: 'Mrs. Sophia Martinez',
  role: 'Languages Lead',
  subject: 'English & Literature'
},
{
  id: 5,
  name: 'Mr. Ethan Wright',
  role: 'Arts Director',
  subject: 'Music & Visual Arts'
},
{
  id: 6,
  name: 'Ms. Hannah Lewis',
  role: 'Sports Coach',
  subject: 'Physical Education'
}];