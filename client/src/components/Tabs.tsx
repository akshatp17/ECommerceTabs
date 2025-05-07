import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full bg-white shadow-md">
      {/* Website Header */}
      <div className="text-2xl font-bold text-center py-4 border-b border-gray-200">
        Simple E-Commerce Website
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center">
        <Link
          to="/product-submission"
          className={`w-1/2 text-center py-3 transition duration-200 font-medium border-r border-gray-200
            ${
              isActive("/product-submission")
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            }`}
        >
          Product Submission
        </Link>
        <Link
          to="/my-products"
          className={`w-1/2 text-center py-3 transition duration-200 font-medium
            ${
              isActive("/my-products")
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            }`}
        >
          My Products
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
