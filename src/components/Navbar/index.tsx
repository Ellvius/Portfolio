import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-secondary text-primary">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Header Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Lishin V S</h1>
          <p className="text-sm">Developer</p>
        </div>

        {/* Navbar Section */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
