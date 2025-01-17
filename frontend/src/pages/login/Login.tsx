import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-1/3 shadow-lg mx-auto p-11">
      <h3 className="text-semi">Please Login</h3>
      <form>
        <div className="flex flex-col my-6">
            <label>Email</label>
            <input type="email" id='email' placeholder="Email Address" className="border border-gray-300 p-2 rounded-lg focus:outline-none"/>
        </div>
        <div className="flex flex-col my-6">
            <label>Password</label>
            <input type="password" id='password' placeholder="Password" className="border border-gray-300 p-2 rounded-lg focus:outline-none"/>
        </div>
        <div>
            <Checkbox></Checkbox>
            <label htmlFor="remember" className="mx-2">Remember</label>
        </div>
        <button type="submit" className="bg-primary px-5 py-2 rounded-lg text-white mt-2">Submit</button>
      </form>
      <p className="text-sm my-3 text-gray-500">Havan't an account ? Please <Link to={'/register'} className="text-blue-500">Register</Link></p>
      <button className="flex gap-x-3 items-center bg-black text-white p-2 w-full justify-center">
        <FaGoogle></FaGoogle>
        Sign in with Google
      </button>
    </div>
  )
}
