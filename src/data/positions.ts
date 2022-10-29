interface Position {
  title: string;
  company: string;
  time_period: string;
  bullet_points: string[];
}
const positions: Position[] = [
  {
    title: "Frontend Developer",
    company: "Excel",
    time_period: "October 2021 - Present",
    bullet_points: ["Test 1", "Test 2"],
  },
  {
    title: "Software Engineer",
    company: "Oriental Rug Gallery",
    time_period: "June 2015 - Present",
    bullet_points: ["Test"],
  },
  {
    title: "Information Systems Co-Op",
    company: "Plastic Technologies, Inc",
    time_period: "January 2019 - October 2021",
    bullet_points: ["Test"],
  },
];

export { positions };
