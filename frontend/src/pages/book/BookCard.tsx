import { MdOutlineShoppingCart } from "react-icons/md"
import { Book } from "../home/TopSeller"
import { getImgUrls } from "../../utils/getImgUrls"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCart } from "../../redux/features/cart/cartSlice"

export interface BookProps {
  book: Book
}

export default function BookCard({book}:BookProps) {
   const dispatch = useDispatch();

  const handleDispatch = (product: Book) => {
    dispatch(addCart(product));
  };
  return (
    <div className="rounded-lg transition-shadow max-w-sm flex flex-col sm:flex-row flex-shrink-0 px-7 sm:px-0">
        <div className="w-full sm:w-1/2 h-72 sm:flex-shrink-0">
          <a>
              <img src={`${getImgUrls(book.coverImage)}`} alt={book.title} className="w-full h-full bg-cover rounded-md p-2 cursor-pointer"/>
          </a>
        </div>
        <div className="w-full h-auto sm:w-1/2 sm:h-72 p-4 flex flex-col justify-between">
          <Link to='/'>
              <h3 className="text-lg font-normal font-Montserrat"> {book.title} </h3>
          </Link>
          <p className="font-Nunito text-gray-400 text-sm">{book.description.length > 80 ? `${book.description.slice(0,80)}..`: book.description}</p>
          <p>$ {book.newPrice} <span className="line-through text-gray-500 ml-5">$ {book.oldPrice}</span></p>
          <button 
                  className="bg-primary text-white flex items-center gap-x-2 rounded-lg px-2 py-2 sm:px-3"
                  onClick={() => handleDispatch(book)}
            >
              <MdOutlineShoppingCart className="text-2xl"/>
              <p>Add Basket</p>
          </button>
        </div>
    </div>
  )
}
