import { Link } from "react-router-dom";
import Logo from "../../assets/logoe.png";

function Header() {
  return (
    <header className="bg-[#0d3e38] text-amber-300 fixed top-0 w-full z-50">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-3">
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="logo"
            className="hidden lg:block h-14 w-auto object-contain"
          />
        </div>
        <input
          type="text"
          className=" md:w-80 h-10 rounded-md bg-white text-black outline-none"
          placeholder="Search jobs or companies"
        />
        <div className="flex justify-center md:justify-end gap-3">
          <select
            className="h-10 px-2 rounded-md text-black"
            name="Location">
            <option value="palakkad">Palakkad</option>
            <option value="kannur">Kannur</option>
            <option value="calicut">Calicut</option>
          </select>
          <Link to={"/login"}>
          <button className="bg-white text-black rounded-md px-5 h-10 hover:bg-gray-200 transition">
            Sign In
          </button>
          </Link>
         
        </div>

      </nav>
    </header>
  );
}

export default Header;
