import Link from "next/link";

const projectsData = [
  {
    title: "Project 1: Personal Portfolio",
    description: "A portfolio website showcasing my projects and skills.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Project 2: Todo App",
    description: "A simple Todo app to manage your daily tasks.",
    link: "https://yourtodoapp.com",
  }
];

const ProjectSection = () => {
  return (
    <div className="bg-secondary container mx-auto px-4 py-12">
      <h2 className="text-primary text-4xl font-bold mb-6 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="p-6 bg-light rounded-lg shadow">
            <h3 className="text-secondary text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-secondary mb-4">{project.description}</p>
              <a
                target="_blank"
                className="inline-block mt-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary"
              >
                View Project
              </a>
          </div>
        ))}
      </div>

      {/* Link to the Projects Route */}
      <div className="mt-8 text-center">
        <Link href="/projects">
          <p className="text-primary hover:underline text-lg font-semibold">
            See More Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
