interface Position {
  title: string;
  company: string;
  time_period: string;
  bullet_points: string[];
}
const positions: Position[] = [
  {
    title: "Frontend Engineer",
    company: "Excel",
    time_period: "October 2021 - Present",
    bullet_points: [
      "Created a static site generator and compiler allowing creation of site widgets through a schema that is then transformed into valid TypeScript code and compiled through Vite and deployed as a static site.",
      "Implemented automated site QA process as part of CI/CD pipelines across 25+ websites, performing end to end testing of all site functionality on every single deployment as well as on a routine basis.",
      "Developed extensive rework of automated CI/CD pipelines for site deployments, greatly improving site stability.",
      "Heavily improved Core Web Vitals and other related metrics for numerous sites with self-developed tooling for speed analysis, allowing sites to pass Google’s Core Web Vitals assessment.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Oriental Rug Gallery",
    time_period: "June 2015 - Present",
    bullet_points: [
      "Created a backend Kotlin application to facilitate automatic inventory updating across seven retailers, including eBay, Amazon, Wayfair, Houzz, and Overstock. Revenue increased 37.82% year after launch, a net increase of $563,000.",
      "Installed, configured, maintained, and wrote custom addons for an e-commerce website with over 9,000 products utilizing Magento 2, MariaDB, Elasticsearch, Redis, and Varnish, generating $122,000 in sales for 2021.",
      "Utilized Docker to containerize apps easing updates, providing greater isolation and protection from vulnerabilities.",
      "Created product exporters to add new inventory to online retailers and update details and pricing for existing items.",
    ],
  },
  {
    title: "Information Systems Co-Op",
    company: "Plastic Technologies, Inc",
    time_period: "January 2019 - October 2021",
    bullet_points: [
      "Developed all-in-one database application for design department’s management of drawings and tooling.",
      "Created a C++ plugin for Claris FileMaker embedding a Chromium instance utilizing the CEF framework to allow for responsive interfaces and new features traditionally unavailable in FileMaker.",
      "Created a backend REST API in Python with JWT authentication to handle file management in various internal apps.",
    ],
  },
];

export { positions };
