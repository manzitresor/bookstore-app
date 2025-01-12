import { MdOutlineShoppingCart } from "react-icons/md"
import { Book } from "../pages/TopSeller"
import { getImgUrls } from "../utils/getImgUrls"
import { Link } from "react-router-dom"

interface BookProps {
  book: Book
}

export default function Product({book}:BookProps) {
  return (
    <div className="rounded-lg transition-shadow max-w-sm">
      <div className="flex gap-2">
        <div className="sm:h-72 sm:flex-shrink-0">
          <a>
              <img src={`${getImgUrls(book.coverImage)}`} alt={book.title} className="w-full bg-cover rounded-md p-2 cursor-pointer"/>
          </a>
        </div>
        <div className="mt-10 space-y-2">
          <Link to={'/'}>
              <h3 className="text-lg font-normal font-Montserrat"> {book.title} </h3>
          </Link>
          <p className="font-Nunito text-gray-400 text-sm">{book.description.length > 80 ? `${book.description.slice(0,80)}..`: book.description}</p>
          <p>$ {book.newPrice} <span className="line-through text-gray-500 ml-5">$ {book.oldPrice}</span></p>
          <button className="bg-primary text-white flex items-center gap-x-2 rounded-lg px-2 py-2 sm:px-3">
              <MdOutlineShoppingCart className="text-2xl"/>
              <p>Add Basket</p>
          </button>
        </div>
      </div>
    </div>
  )
}
