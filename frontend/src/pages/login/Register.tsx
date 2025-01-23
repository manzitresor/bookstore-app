import { SubmitHandler, useForm } from "react-hook-form";
import { IformInput } from "./Login";

export default function Register() {
  const {register,handleSubmit} = useForm<IformInput>()

  const onSubmit:SubmitHandler<IformInput> = (data) => console.log(data)
  return (
    <div className="w-full sm:w-1/3 shadow-lg mx-auto p-11">
      <h3 className="font-bold text-lg">Register here</h3>
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
              <button type="submit" className="bg-primary px-5 py-2 rounded-lg text-white mt-2">Submit</button>
      </form>
    </div>
  )
}
