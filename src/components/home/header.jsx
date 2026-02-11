import { Link } from "react-router-dom";
import Logo from "../../assets/logoe.png";
function Header() {
  return (
    <header className="bg-[#0d3e38] text-amber-300 h-20 fixed top-0 w-full">
      <nav className="flex justify-between ml-5 mr-5">
        <img src={Logo} alt="logo" className=" h-21 w-19 object-contain"></img>
        <input
          type="text"
          className="mt-4 rounded-md w-50 h-10 bg-white text-black outline-none"
          placeholder="search"
        ></input>
        <div className="flex gap-3">
        <select className="h-9 pb-2 mt-5.5" name="Location" id="">
          <option value="palakkad">Palakkad</option>
          <option value="Kannur">Kannur</option>
          <option value="Calicut">Calicut</option>
        </select>

          <Link to={'/login'} >
        <button className="bg-white mt-4 text-black rounded-md w-15 h-10">
          sing In
        </button></Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
