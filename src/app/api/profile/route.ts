// ✅ Next.js App Router API route syntax
export async function GET() {
  const profile = {
    name: "NANPHIPAT WONGTED",
    position: "Frontend Developer",
    image: "/profile-2.jpeg",
    skill: [
      "React.js / Next.js",
      "Javascript / Typescript",
      "Flutter",
      "Html / Css",
      "Problem-solving",
      "Express.js / Fastify",
    ],
    about_me:
      "A dedicated Web Developer with hands-on experience in building modern web applications using React and Next.js. Familiar with backend development using Node.js, Express.js, and Fastify, along with a solid understanding of both SQL and MongoDB databases. Also experienced in developing with Flutter and Dart. Known for strong research skills and the ability to effectively troubleshoot and solve complex technical issues.",
  };

  return Response.json({ data: profile });
}
