import { Link } from 'react-router-dom';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 body-font border border-t-2">
      <div className="container px-5 py-8 mx-auto flex flex-col items-center">
        <a className="flex title-font font-medium items-center justify-center text-gray-900 mb-4">
        <Link
      to="/"
      className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      {/* Correct image path from public folder */}
      <img
        src="/images/logo.png"
        alt="Global ZI Exim Logo"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="ml-3 text-xl">Global ZI Exim</span>
    </Link>
        </a>

        <p className="text-sm text-gray-500 text-center">
          © {currentYear} Developed by —{" "}
          <a
            href="https://maddy-portfolio-chi.vercel.app/"
            className="text-gray-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maddy
          </a>
        </p>

        <span className="inline-flex mt-4 justify-center">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
