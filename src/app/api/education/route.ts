export async function GET() {
  const education = [
    {
      title: "Ratwinit Bangkaeo School",
      description: "Science and Mathematics",
      year: "2012 - 2017",
    },
    {
      title: "King Mongkut's Institute of Technology Ladkrabang",
      description: "Bachelor of Science in Computer Science",
      year: "2018 - 2021",
    },
  ];

  return Response.json({ data: education });
}
