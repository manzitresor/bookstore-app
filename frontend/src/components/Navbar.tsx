import  menu  from "../assets/Menu.svg"
import  search from "../assets/Search Icon.svg"
import profile from "../assets/Account.svg";
import favorite from "../assets/Favorite.svg"
import cart from "../assets/Icon.svg"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex gap-x-16 items-center">
          <NavLink to='/'>
          <img src={menu} alt="menu-icon" width={24}/>
          </NavLink>
          <div className=" relative flex  items-center w-80 h-10 gap-x-5 px-3">
            <img src={search} alt="search-icon" className="absolute left-5 w-4"/>
            <input type="text" placeholder="What are you looking for ?f" className="text-lg text-gray-500 bg-secondary rounded-lg py-2 px-6 md:px-8 focus:outline-none"></input>
          </div>
        </div>
        <div className="flex gap-x-5">
          <img src={profile} alt="profile"  width={18}/>
          <img src={favorite} alt = 'favorite' width={25}/>
          <div className="bg-primary flex items-center justify-evenly gap-x-3 rounded-lg w-36">
            <img src={cart} alt="shopping cart" width={20}/>
            <p className="text-white">Basket</p>
          </div>
        </div>
      </nav>
    </header>
  )
}
