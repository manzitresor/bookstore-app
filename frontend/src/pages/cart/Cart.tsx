import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import AddCart from "./AddCart"
export default function Cart() {
    const cartItems = useSelector((state: RootState)=> state.addCart.cartItems)
  return (
    <div>
      <div className="flex justify-between mx-6">
        <h3 className="text-lg">Shopping cart</h3>
        <button className="bg-primary p-2 rounded-lg text-white">Clear Cart</button>
      </div>
      {
        cartItems.map( items =>(
            <AddCart key={items._id} items= {items}/>
        ))
      }
    </div>
  )
}
