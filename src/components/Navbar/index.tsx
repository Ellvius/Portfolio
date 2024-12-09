const Navbar = () => {
    return (
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Header Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Lishin V S</h1>
            <p className="text-sm">Developer</p>
          </div>
  
          {/* Navbar Section */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  