const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm text-center mb-4">
            © {new Date().getFullYear()} Lishin V S. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social media links */}
            <a
              href="https://github.com/ellvius"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.704-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.6 9.6 0 0 1 12 6.845a9.58 9.58 0 0 1 2.5.338c1.91-1.295 2.75-1.025 2.75-1.025.544 1.378.201 2.396.098 2.65.64.699 1.03 1.592 1.03 2.683 0 3.842-2.338 4.685-4.566 4.934.36.31.682.921.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .267.18.578.688.48A10.01 10.01 0 0 0 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/lishinvs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.73c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.73h-3v-5.51c0-1.32-.47-2.22-1.64-2.22-.89 0-1.42.6-1.65 1.18-.09.22-.11.53-.11.84v5.71h-3v-10h3v1.38c.4-.62 1.1-1.51 2.68-1.51 1.96 0 3.42 1.27 3.42 4v6.13z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  

export default Footer;