import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="bg-gray-800 flex justify-between text-white p-6">
      <Link to="/">
        <img src="/logo.svg" alt="Blog" className="h-8" />
      </Link>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="bg-blue-500 px-4 py-2 rounded hover:opacity-75"
        >
          Signup
        </Link>
        <Link to="/login" className="px-4 py-2 hover:opacity-75">
          Login
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
