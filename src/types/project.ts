export type Technology =
  | "React"
  | "Node.js"
  | "JavaScript"
  | "TypeScript"
  | "Redux"
  | "Express.js"
  | "Redis"
  | "Panda-CSS"
  | "MongoDB"
  | "Vite.js"
  | "Webpack";

export type TechnologySide = "frontend" | "backend";

export type Technologies = {
  [key in TechnologySide]: Technology[];
};

export type Project = {
  title: string;
  roles?: string;
  description?: string;
  challenges?: string;
  results?: string;
  technologies?: Technologies;
  src?: string;
};
