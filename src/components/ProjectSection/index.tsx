import Link from "next/link";

const projectsData = [
  {
    title: "Project 1: Personal Portfolio",
    description: "A portfolio website showcasing my projects and skills.",
    link: "https://lishinvs.vercel.app",
    name: 'portfolio',
    image: '/projects/portfolio.jpg'
  },
  {
    title: "Project 2: TinyPath",
    description: "A simple URL shortener.",
    link: "https://tiny-path-iota.vercel.app",
    name: 'url shortener',
    image: '/projects/urlshortener.jpg'
  }
];

const ProjectSection = () => {
  return (
    <div className="bg-light mx-auto px-20 py-12">
      <h2 className="text-dark text-4xl font-bold mb-6 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projectsData.map((project, index) => (
          <div key={index} className="p-6 bg-white border border-black rounded-lg shadow">
            <h3 className="text-secondary text-2xl font-bold mb-2">{project.title}</h3>
            <img 
              src={project.image}  
              alt={project.name} 
            />
            <p className="text-black p-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-2 bg-black text-white px-4 py-2 rounded-lg transform  hover:scale-110 transition-transform duration-200"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Link to the Projects Route */}
      <div className="mt-8 text-center">
        <Link href="/projects">
          <span className="text-dark hover:bg-dark hover:text-light px-4 py-3 rounded-xl font-semibold">
            See More Projects
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
