const HeroSection = () => {
    return (
      <section className="min-h-screen w-full flex flex-col justify-center items-center bg-secondary text-primary text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Lishin V S</h1>
        <p className="text-xl mb-6">
          A passionate <span className="text-light">Full-Stack Developer</span> dedicated to building
          beautiful, functional websites and applications.
        </p>
        <div className="flex space-x-4">
          <a
            href="/projects"
            className="bg-dark hover:bg-light text-white hover:text-dark px-6 py-3 rounded-lg text-lg"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-light text-light hover:bg-light hover:text-dark px-6 py-3 rounded-lg text-lg"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  