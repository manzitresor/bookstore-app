import { Book } from "../home/TopSeller"

interface cartItemProp {
    items: Book
}


export default function AddCart({items}:cartItemProp) {
  return (
    <div>
        <h1>{items.title}</h1>
    </div>
  )
}
