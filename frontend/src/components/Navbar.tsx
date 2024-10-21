import  menu  from "../assets/Menu.svg"
import  search from "../assets/Search Icon.svg"
import profile from "../assets/Account.svg";
import favorite from "../assets/Favorite.svg"
import cart from "../assets/Icon.svg"

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-x-16 items-center">
        <img src={menu} alt="menu-icon" width={24}/>
        <div className="bg-gray-200 flex rounded-lg items-center w-80 h-10 gap-x-5 px-3">
          <img src={search} alt="search-icon" width={16}/>
          <p className="text-lg text-gray-500">What are you looking for ?</p>
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

  )
}
