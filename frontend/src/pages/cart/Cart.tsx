import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import AddCart from "./AddCart"
export default function Cart() {
    const cartItems = useSelector((state: RootState)=> state.cart.cartItems)
  return (
    <div>
      <div className="flex justify-between mx-6">
        <h3 className="text-lg">Shopping cart</h3>
        <button className="bg-secondary p-2 rounded-lg text-black hover:bg-inherit hover:border hover:border-primary">Clear Cart</button>
      </div>
      <div className="shadow-xl p-7">
          {
            cartItems.length > 0  ? cartItems.map( items =>(
                <AddCart key={items._id} items= {items}/>
            )) : <h3 className="text-xl text-gray-600 text-center">You don't have any favorite product</h3>
          }
      </div>
    </div>
  )
}
