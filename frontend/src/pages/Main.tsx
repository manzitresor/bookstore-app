import books from "../assets/Animation.svg"
export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-5"> 

     <div className="space-y-6">
      <h1 className="font-Montserrat text-black font-medium text-4xl">New Releases This Week</h1>
      <p className="font-Montserrat text-base">
      It's time to update your reading list with some of the latest and greatest releases in the literary world. 
      From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
      </p>
      <button className="bg-primary text-white flex items-center gap-x-3 rounded-lg px-3 py-2 sm:px-6">
          Subscribe
      </button>
     </div>

     <div className=" flex justify-end">
      <img src={books} alt="books"  width={400}/>
     </div>
    </div>
  )
}
