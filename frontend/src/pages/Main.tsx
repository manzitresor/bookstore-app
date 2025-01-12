import books from "../assets/Animation.svg"
export default function Main() {
  return (
    <div className="grid grid-cols-1 gap-y-16 md:gap-y-0 md:grid-cols-2 md:items-center h-auto mb-14 md:h-screen"> 

     <div className="order-2 md:order-1 space-y-9 md:space-y-7">
      <h1 className="font-Montserrat text-black font-medium text-4xl">New Releases This Week</h1>
      <p className="font-Montserrat text-lg  md:text-base">
      It's time to update your reading list with some of the latest and greatest releases in the literary world. 
      From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
      </p>
      <button className="bg-primary text-white mx-0 md:mx-autoflex items-center gap-x-3 my-10 rounded-lg px-3 py-2 md:px-6">
          Subscribe
      </button>
     </div>

     <div className="flex justify-center md:justify-end order-1 md:order-2">
      <img src={books} alt="books"  width={400}/>
     </div>
    </div>
  )
}
