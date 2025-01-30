import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import AddCart from "./AddCart"
export default function Cart() {
    const cartItems = useSelector((state: RootState)=> state.addCart.cartItems)
  return (
    <div>
      {
        cartItems.map( items =>(
            <AddCart key={items._id} items= {items}/>
        ))
      }
    </div>
  )
}
