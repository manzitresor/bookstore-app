import { MdOutlineShoppingCart } from "react-icons/md"
import book from "../assets/Product photo.svg"

export default function Product() {
  return (
    <div className="my-10 flex gap-x-6 ">
      <div>
        <img src={book} alt="book" />
      </div>
      <div className="mt-10 space-y-7">
        <h5 className="text-lg font-normal font-Montserrat">The Time Has Come</h5>
        <p className="font-Nunito text-gray-400 text-sm ">Lindbergh's Pharmacy is an Athens, Georgia, institution...</p>
        <p>$ 27.89 <span className="line-through text-gray-500 ml-5">$ 30.99</span></p>
        <button className="bg-primary text-white flex items-center gap-x-3 rounded-lg px-3 py-2 sm:px-6">
            <MdOutlineShoppingCart  className="text-2xl"/>
            <p>Add Basket</p>
          </button>
      </div>
    </div>
  )
}
