import newsImage1 from '../../assets/news/news-1.png';
import newsImage2 from '../../assets/news/news-2.png';
import newsImage3 from '../../assets/news/news-3.png';
import newsImage4 from '../../assets/news/news-4.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

interface News {
  id: number
  title: string
  description: string
  image: string
}

export const news:News[] = [
    {
        id: 1,
        title: "Global Climate Summit Calls for Urgent Action",
        description: "World leaders gather at the Global Climate Summit...",
        image: newsImage1
    },
    {
        id: 2,
        title: "Breakthrough in AI Technology Announced",
        description: "A major breakthrough in artificial intelligence...",
        image: newsImage2
    },
    {
        id: 3,
        title: "New Space Mission Aims to Explore Distant Galaxies",
        description: "NASA has unveiled plans for a new space mission...",
        image: newsImage3
    },
    {
        id: 4,
        title: "Stock Markets Reach Record Highs Amid Economic Recovery",
        description: "Global stock markets have reached record highs...",
        image: newsImage4
    },
];

export default function News() {
  return (
    <div>
      <h3 className="text-3xl font-semibold font-Montserrat mb-6">News</h3>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation = {true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
            news.map((data: News) => (
              <SwiperSlide>
                  <div className='flex gap-x-10'>
                      <div>
                          <h5 className="text-gray-800 text-lg">{data.title}</h5>
                          <p className="border-2 border-primary w-20 my-2"></p>
                          <p className='my-8'>
                            {data.description}
                          </p>
                      </div>
                      <img src={data.image}></img>
                  </div>
              </SwiperSlide>
            ))

        }
        </Swiper>
    </div>
  )
}
