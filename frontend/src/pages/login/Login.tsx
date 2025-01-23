import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import  {SubmitHandler, useForm} from 'react-hook-form'

export interface IformInput {
  email: string,
  password: string
}

export default function Login() {
  const {register,handleSubmit } = useForm<IformInput>()
  const onSubmit: SubmitHandler<IformInput> = (data) => console.log(data);

  return (
    <div className="w-full sm:w-1/3 shadow-lg mx-auto p-11">
      <h3 className="font-bold text-lg">Please Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col my-6">
            <label className="font-bold" htmlFor="email">Email</label>
            <input 
                  type="email" 
                  id='email' 
                  placeholder="Email Address" 
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none"
                  {...register('email')}
                  />
        </div>
        <div className="flex flex-col my-6">
            <label className="font-bold" htmlFor="password">Password</label>
            <input 
                  type="password" 
                  id='password' 
                  placeholder="Password" 
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none"
                  {...register('password')}
                  />
        </div>
        <div>
            <Checkbox></Checkbox>
            <label htmlFor="remember" className="mx-2">Remember</label>
        </div>
        <button type="submit" className="bg-primary px-5 py-2 rounded-lg text-white mt-2">Submit</button>
      </form>
      <p className="text-sm my-3 text-gray-500">Havan't an account ? Please <Link to={'/register'} className="text-blue-500">Register</Link></p>
      <button className="flex gap-x-3 items-center bg-black text-white p-2 w-full justify-center hover:bg-gray-700">
        <FaGoogle></FaGoogle>
        Sign in with Google
      </button>
    </div>
  )
}
