import { useState, useEffect } from "react";
import { Book } from "./TopSeller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import BookCard from "../book/BookCard";

export default function Recommended() {
   const [books,setBooks] = useState<Book[]>([]);
  
    useEffect(()=> {
       fetch('books.json')
        .then(response => response.json())
        .then( data => setBooks(data))
    },[])
    
  return (
    <div className="h-screen">
        <h3 className="text-3xl font-semibold font-Montserrat mb-6">Recommended for you</h3>
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
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >

          {
            books.slice(8).map((book,index) => (
              <SwiperSlide>
                <BookCard key={index} book={book}></BookCard>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}
