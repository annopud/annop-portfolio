import { Suspense } from 'react';
import ExperienceCard from './experience-card';
import DownloadButton from './download-button';

export interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
  reponsibilities: string[];
  technologies: string[];
}

const experienceList: ExperienceType[] = [
  {
    title: 'Developer',
    company: 'SET',
    date: 'Aug 2022 - April 2024',
    description: 'Developed software for company A',
    reponsibilities: [
      'Join meetings with users to understand and gather their business requirements.',
      'Plan with team members for estimating the number of man-days required for implementation.',
      'Discuss the solutions to be used with team members.',
      'Implement features according to the planned schedule.',
      'Unit testing.',
      "Review each other's code.",
      'Continuously deploy updates.',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML',
      'SCSS',
      'Tailwind',
      'Spring Boot',
      'Angular',
      'MySql',
      'Git',
      'Docker',
      'Jenkins',
      'Nexus Repository Manager',
    ],
  },
  {
    title: 'Lead Developer',
    company: 'Maewnam IT Network Solution',
    date: 'Jan 2022 - May 2022',
    description: 'Developed software for company B',
    reponsibilities: [
      'Join meetings with users to understand and gather business requirements.',
      'Plan with team members for estimating the number of man-days required for implementation.',
      "Provide tasks to other team's members.",
      'Discuss with team members the solutions to be used.',
      "Manage and provide task for other team's members.",
      'Implement features according to the planned schedule.',
      'Review the code.',
      'Continuously deploy updates.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'HTML',
      'SCSS',
      'Tailwind',
      'Node.js',
      'Express',
      'Vue',
      'MongoDB',
      'Linux',
      'Docker',
      'Git',
    ],
  },
  {
    title: 'Senior Programmer',
    company: 'MSC Sittipol',
    date: 'June 2021 - Aug 2022',
    description: 'Developed software for company B',
    reponsibilities: [
      'Cooperated with SA in design and developed interfaces, API.',
      'Developed project concepts document for implementation.',
      'Cooperated with other team members to plan, design, develop smart solutions and secure.',
      'Implement features according to the planned schedule.',
      'Deployed to server for production, testing.',
      'Cooperated with tester when encounter complex issues or bugs.',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML',
      'SCSS',
      'Tailwind',
      'Spring Boot',
      'Angular',
      'Vue',
      'Oracle',
      'Hadoop',
      'Impala',
      'Oracle WebLogic',
      'Git',
      'SVN',
    ],
  },
  {
    title: 'Programmer',
    company: 'AIS',
    date: 'May 2018 - Feb 2021',
    description: 'Developed software for company B',
    reponsibilities: [
      'Communicate with users to gather their requirements.',
      'Cooperate with SA, PM in analysis and design interfaces, API.',
      'Develop project concepts document for implementation.',
      'Cooperate with other team members to plan, design, develop smart solutions and secure.',
      'Develop Web Application Front end and Back end.',
      'Deploy for production, testing.',
      'Cooperate with tester when encountered complex issues or bugs and debug.',
      'Present application feature to users.',
      'Support users.',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Spring Boot',
      'Angular',
      'Oracle Database',
      'PostgreSQL',
      'Impala',
      'Docker',
      'Jenkins',
      'Git',
      'Apache server',
      'Nginx',
    ],
  },
];

export default function Experience() {
  return (
    <div className={`mb-4 mt-2 flex justify-center`}>
      <div className="flex max-w-[940px] flex-1 flex-col gap-4 font-inter">
        <DownloadButton className="self-start"></DownloadButton>
        {experienceList.map((experienceItem, index) => (
          <Suspense
            fallback={<div>Loading.......</div>}
            key={'experience_suspense_' + index}
          >
            <ExperienceCard
              key={'experience_' + index}
              experience={experienceItem}
              index={index}
            ></ExperienceCard>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
