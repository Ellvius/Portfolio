import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiPostgresql, SiVercel } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
  { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-700" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-4xl text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-700" /> },
  { name: "Vercel", icon: <SiVercel className="text-4xl text-black" /> },
  { name: "Git ", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
];

const IntroSection = () => {
  return (
    <section className="introduction">
      <div className="bg-primary mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Section - About Me */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-[#5C2C01] text-4xl font-bold mb-4">Hi! I&apos;m Lishin V S</h2>
            <p className="text-[#5C2C01] mb-4">
              I&apos;m a passionate Full-Stack Developer with a keen interest in creating dynamic and responsive web applications.
              With a love for problem-solving and a drive to learn new technologies, I constantly strive to improve my skills
              and contribute to open-source projects and real-world applications.
            </p>
            <p className="text-[#5C2C01] mb-4">
              I enjoy learning about <strong>UI/UX design</strong>, <strong>API development</strong>, and working with cutting-edge frameworks like
              <strong> Next.js</strong> and <strong>React</strong>. My goal is to create clean, efficient, and scalable software.
            </p>
          </div>

          {/* Right Section - Skills & Tech Stack */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-light p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-dark">Tech Stack & Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* List your skills */}
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center  bg-white text-secondary rounded-lg shadow text-center font-medium transform hover:scale-110 hover:border-black transition-transform duration-300"
                >
                  {skill.icon} <p className="pl-4">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
