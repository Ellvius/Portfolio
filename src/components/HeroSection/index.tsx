const HeroSection = () => {
    return (
      <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Lishin V S</h1>
        <p className="text-xl mb-6">
          A passionate <span className="text-indigo-400">Full-Stack Developer</span> dedicated to building
          beautiful, functional websites and applications.
        </p>
        <div className="flex space-x-4">
          <a
            href="/projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg text-lg"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  