import { getImgUrls } from "../../utils/getImgUrls"
import { Book } from "../home/TopSeller"

interface cartItemProp {
    items: Book
}


export default function AddCart({items}:cartItemProp) {
  return (
    <div className="shadow-xl p-7">
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
            <button className="text-blue-800 cursor-pointer hover:text-red-300">Remove</button>
          </div>
      </div>
      </div>
    </div>
  )
}
