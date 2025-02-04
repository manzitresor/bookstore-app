import { useDispatch } from "react-redux"
import { getImgUrls } from "../../utils/getImgUrls"
import { Book } from "../home/TopSeller"
import { removeCart } from "../../redux/features/cart/cartSlice"

interface cartItemProp {
    items: Book
}


export default function AddCart({items}:cartItemProp) {
  const dispatch = useDispatch()

  const handleDispatch = (book:Book) => {
    dispatch(removeCart(book))
  }
  return (
      <div className="grid grid-cols-12 items-center">
      <img src={`${getImgUrls(items.coverImage)}`} className="col-span-2"></img>
      <div className="space-y-6 col-span-10">
          <div className="flex justify-between">
            <h1 className="font-semibold">{items.title}</h1>
            <p className="font-bold">${items.newPrice}</p>
          </div>
            <p className="font-semibold">Category: <span className="font-normal">{items.category}</span></p>
          <div className="flex justify-between">
            <p className="font-semibold">Qty: <span className="font-normal">1</span></p>
            <button className="text-blue-800 cursor-pointer hover:text-red-300" onClick={()=> handleDispatch(items)}>Remove</button>
          </div>
      </div>
      </div>
  )
}
