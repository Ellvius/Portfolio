const IntroSection = () => {
  return (
    <section className="introduction">
      <div className="bg-light container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Section - About Me */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-secondary text-4xl font-bold mb-4">Hi! I&apos;m Lishin V S</h2>
            <p className="text-gray-700 mb-4">
              I&apos;m a passionate Full-Stack Developer with a keen interest in creating dynamic and responsive web applications.
              With a love for problem-solving and a drive to learn new technologies, I constantly strive to improve my skills
              and contribute to open-source projects and real-world applications.
            </p>
            <p className="text-gray-700 mb-4">
              I enjoy learning about <strong>UI/UX design</strong>, <strong>API development</strong>, and working with cutting-edge frameworks like
              <strong> Next.js</strong> and <strong>React</strong>. My goal is to create clean, efficient, and scalable software.
            </p>
          </div>

          {/* Right Section - Skills & Tech Stack */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-secondary p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary">Tech Stack & Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* List your skills */}
              {[
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Vercel",
                "Git / GitHub"
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-primary text-secondary rounded-lg shadow text-center font-medium"
                >
                  {skill}
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
