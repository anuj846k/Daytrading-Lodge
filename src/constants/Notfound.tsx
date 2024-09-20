import { Link } from "react-router-dom";
import { Navbar2 } from "../partials/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 text-center border rounded-md border-gray-300 p-6 bg-gradient-to-r from-blue-50 via-white to-red-50">
          <div className="space-y-4">
            <h1 className="text-[52px] font-extrabold text-red-500 ">404</h1>
            <h2 className="text-3xl font-bold text-gray-900">
              Oops! Page not found
            </h2>
            <p className="md:text-xl text-sm text-gray-600 ">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="md:space-y-4  ">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
