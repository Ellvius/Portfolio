import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-light bg-opacity-50 backdrop-blur fixed top-0 left-0 w-[96%] mx-[2%] mt-[1%] z-50 text-dark rounded-xl">
      <div className="mx-auto flex justify-between items-center py-4 px-4">
        {/* Header Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Lishin V S</h1>
          <p className="text-sm">Developer</p>
        </div>

        {/* Navbar Section */}
        <nav className="flex">
          <Link href="/">
            <span className="hover:bg-primary hover:text-light px-4 py-3 rounded-xl">Home</span>
          </Link>
          <Link href="/about" >
            <span className="hover:bg-primary hover:text-light px-4 py-3 rounded-xl">About</span>
          </Link>
          <Link href="/projects" >
            <span className="hover:bg-primary hover:text-light px-4 py-3 rounded-xl">Projects</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
