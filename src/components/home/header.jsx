// import Logo from "../../assets/logoe.png";
// function Header() {
//   return (
//     <header className="bg-[#0d3e38] text-amber-300 h-20 fixed top-0 w-full">
//       <nav className="flex justify-between ml-5 mr-5">
//         <img src={Logo} alt="logo" className=" h-21 w-19 object-contain"></img>
//         <input
//           type="text"
//           className="mt-4 rounded-md w-70 h-10 bg-white text-black outline-none"
//           placeholder="search"
//         ></input>
//         <div className="flex gap-3">
//         <select className="h-9 pb-2 mt-5.5" name="Location" id="">
//           <option value="palakkad">Palakkad</option>
//           <option value="Kannur">Kannur</option>
//           <option value="Calicut">Calicut</option>
//         </select>

//         <button className="bg-white mt-4 text-black rounded-md w-15 h-10">
//           sign
//         </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
// export default Header;
import { Link } from "react-router-dom";
import Logo from "../../assets/logoe.png";

function Header() {
  return (
    <header className="bg-[#0d3e38] text-amber-300 fixed top-0 w-full z-50">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-3">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Search */}
        <input
          type="text"
          className="w-full md:w-80 h-10 rounded-md bg-white text-black px-3 outline-none"
          placeholder="Search jobs or companies"
        />

        {/* Right Controls */}
        <div className="flex justify-center md:justify-end gap-3">
          <select
            className="h-10 px-2 rounded-md text-black"
            name="Location"
          >
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
