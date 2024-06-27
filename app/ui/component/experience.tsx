import { Suspense } from "react";
import ExperienceCard from "./experience-card";

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
    title: "Developer",
    company: "Company A",
    date: "Aug 2022 - April 2024",
    description: "Developed software for company A",
    reponsibilities: [
      "Join meetings with users to understand and gather their business requirements.",
      "Plan with team members for estimating the number of man-days required for implementation.",
      "Discuss the solutions to be used with team members.",
      "Implement features according to the planned schedule.",
      "Unit testing.",
      "Review each other's code.",
      "Continuously deploy updates.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Senior Programmer",
    company: "Company B",
    date: "June 2021 - Aug 2022",
    description: "Developed software for company B",
    reponsibilities: [
      "Cooperated with SA in design and developed interfaces, API.",
      "Developed project concepts document for implementation.",
      "Cooperated with other team members to plan, design, develop smart solutions and secure.",
      "Implement features according to the planned schedule.",
      "Deployed to server for production, testing.",
      "Cooperated with tester when encounter complex issues or bugs.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Senior Programmer",
    company: "Company B",
    date: "June 2021 - Aug 2022",
    description: "Developed software for company B",
    reponsibilities: [
      "Cooperated with SA in design and developed interfaces, API.",
      "Developed project concepts document for implementation.",
      "Cooperated with other team members to plan, design, develop smart solutions and secure.",
      "Implement features according to the planned schedule.",
      "Deployed to server for production, testing.",
      "Cooperated with tester when encounter complex issues or bugs.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Senior Programmer",
    company: "Company B",
    date: "June 2021 - Aug 2022",
    description: "Developed software for company B",
    reponsibilities: [
      "Cooperated with SA in design and developed interfaces, API.",
      "Developed project concepts document for implementation.",
      "Cooperated with other team members to plan, design, develop smart solutions and secure.",
      "Implement features according to the planned schedule.",
      "Deployed to server for production, testing.",
      "Cooperated with tester when encounter complex issues or bugs.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Senior Programmer",
    company: "Company B",
    date: "June 2021 - Aug 2022",
    description: "Developed software for company B",
    reponsibilities: [
      "Cooperated with SA in design and developed interfaces, API.",
      "Developed project concepts document for implementation.",
      "Cooperated with other team members to plan, design, develop smart solutions and secure.",
      "Implement features according to the planned schedule.",
      "Deployed to server for production, testing.",
      "Cooperated with tester when encounter complex issues or bugs.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Senior Programmer",
    company: "Company B",
    date: "June 2021 - Aug 2022",
    description: "Developed software for company B",
    reponsibilities: [
      "Cooperated with SA in design and developed interfaces, API.",
      "Developed project concepts document for implementation.",
      "Cooperated with other team members to plan, design, develop smart solutions and secure.",
      "Implement features according to the planned schedule.",
      "Deployed to server for production, testing.",
      "Cooperated with tester when encounter complex issues or bugs.",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <div className={`flex justify-center mt-2 mb-4`}>
      <div className="flex flex-col max-w-[940px] flex-1 gap-4">
        {experienceList.map((experienceItem, index) => (
          <Suspense
            fallback={<div></div>}
            key={"experience_suspense_" + index}
          >
            <ExperienceCard
              key={"experience_" + index}
              experience={experienceItem}
              index={index}
            ></ExperienceCard>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
