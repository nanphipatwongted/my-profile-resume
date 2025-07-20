export async function GET() {
  const education = [
    {
      job_title: "Full Stack Web Developer",
      company: "Agent One",
      year: "2021 - 2023",
      description:
        "Developed a system called 'Auto Plus Sale' — a car sales management platform for sales representatives. The system includes features such as vehicle model management, sales document issuance, and license plate registration. I was responsible for both frontend and backend development, using TypeScript throughout the project.",
      experiences_gained: [
        "Got started with JavaScript and TypeScript",
        "Practiced working with React and Express",
        "Gained experience using Git for version control",
      ],
    },
    {
      job_title: "Frontend Web Developer (Outsource)",
      company: "CTO SOLUTION ( Under PTT Digital )",
      year: "2023 - 2025",
      description:
        "Assigned as a Frontend Developer for the GAIA project, a Supply Inventory and Distribution System under PTT Group. The system includes features such as inventory management, monitoring, data visualization via dashboards, and device control. Developed as a web application using JavaScript with Next.js for the frontend. A mobile version of GAIA is also being developed using Flutter, which is currently in progress.",
      experiences_gained: [
        "Gained an understanding of business logic related to internal warehouse management in the energy sector",
        "Designed frontend solutions based on requirements to effectively address customer needs",
        "Implemented complex logic to meet specific and specialized client requirements",
        "Acquired experience in direct communication with clients",
      ],
    },
  ];

  return Response.json({ data: education });
}
