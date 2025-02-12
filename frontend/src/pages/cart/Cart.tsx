import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import AddCart from "./AddCart"
import { clearCart } from "../../redux/features/cart/cartSlice"


export default function Cart() {
    const cartItems = useSelector((state: RootState)=> state.cart.cartItems)
    const dispatch = useDispatch()
    const total = cartItems.reduce((acc,curr) => acc + curr.newPrice,0).toFixed(2)

    const handleClearCart = () => {
      dispatch(clearCart())
    }

  return (
    <div>
      <div className="flex justify-between mx-6">
        <h3 className="text-lg">Shopping cart</h3>
        <button className="bg-secondary p-2 rounded-lg text-black hover:bg-inherit hover:border hover:border-primary" onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      <div className="shadow-xl p-7 space-y-5">
          {
            cartItems.length > 0  ? cartItems.map( items =>(
                <AddCart key={items._id} items= {items}/>
            )) : <h3 className="text-xl text-gray-600 text-center">You don't have any favorite product</h3>
          }
          <div className="flex justify-between border-t-2 pt-4">
            <h3 className="text-xl font-extrabold">Total:</h3>
            <p className="font-bold">{total}$</p>
          </div>
      </div>
    </div>
  )
}
