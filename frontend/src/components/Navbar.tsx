import  search from "../assets/Search Icon.svg";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="w-full md:max-w-screen-2xl md:mx-auto md:px-4 py-6">
      <nav className="flex mx-4 justify-between items-center md:mx-auto">
        <div className="flex gap-x-0 md:gap-x-16 items-center">
          <NavLink to='/'>
          <RiMenu2Fill className="text-2xl"/>
          </NavLink>
          <div className="relative flex items-center md:w-80 md:h-10 gap-x-5 px-3">
            <img src={search} alt="search-icon" className="absolute left-5 w-4"/>
            <input type="text" placeholder="What are you looking for?" className="text-lg text-gray-500 font-Nunito bg-secondary rounded-lg py-2 px-6 md:px-8 focus:outline-none"></input>
          </div>
        </div>
        <div className="gap-x-5 items-center hidden md:flex ">
          <CgProfile className="size-6"/>
          <button>
            <FaRegHeart className="size-6"/>
          </button>
          <NavLink to='/' className="bg-primary text-white flex items-center gap-x-3 rounded-lg px-3 py-2 sm:px-6">
            <MdOutlineShoppingCart  className="text-2xl"/>
            <p>Basket</p>
          </NavLink>
        </div>
        <MdOutlineShoppingCart  className="text-3xl block md:hidden"/>
      </nav>
    </header>   
  )
}
