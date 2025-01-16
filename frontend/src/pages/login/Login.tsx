import { Checkbox } from "flowbite-react";

export default function Login() {
  return (
    <div className="w-1/3 shadow-lg mx-auto p-11">
      <h3 className="">Please Login</h3>
      <form>
        <div className="flex flex-col my-6">
            <label>Email</label>
            <input type="text" placeholder="Email Address" className="border border-gray-300 p-2 rounded-lg focus:outline-none"/>
        </div>
        <div className="flex flex-col my-6">
            <label>Password</label>
            <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded-lg focus:outline-none"/>
        </div>
        <div>
            <Checkbox></Checkbox>
            <label htmlFor="remember" className="mx-2">Remember</label>
        </div>
        <button type="submit" className="bg-primary px-5 py-2 rounded-lg text-white mt-2">Submit</button>
      </form>
    </div>
  )
}
