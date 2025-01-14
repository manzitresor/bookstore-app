import newsImage1 from '../../assets/Photo news.png'
import newsImage2 from '../../assets/Photo news 2.png'

export default function News() {
  return (
    <div>
      <h3 className="text-3xl font-semibold font-Montserrat mb-6">News</h3>
      <div className='grid grid-cols-2 gap-x-8'>
        <div className='flex space-x-11 max-w-lg'>
            <div>
                <h5 className="text-gray-800 text-lg">The Books You Need to Read in 2023</h5>
                <p className="border-2 border-primary w-20 my-2"></p>
                <p>
                    his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, 
                    non-fiction and children's books; 
                    a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...
                </p>
            </div>
            <img src={newsImage1}></img>
        </div>
        <div className='flex space-x-11 max-w-lg'>
            <div>
                <h5 className="text-gray-800 text-lg">February's Best Children's Books</h5>
                <p className="border-2 border-primary w-20 my-2"></p>
                <p>
                    his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, 
                    non-fiction and children's books; 
                    a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...
                </p>
            </div>
            <img src={newsImage2}></img>
        </div>
      </div>
    </div>
  )
}
