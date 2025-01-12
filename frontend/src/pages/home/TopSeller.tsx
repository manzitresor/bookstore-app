import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import BookCard from "../book/BookCard";


export interface Book {
  _id: number;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
}
const categories =['Choose a genre','Business','fiction','Horror','Adventure']


export default function TopSeller() {
  const [books,setBooks] = useState<Book[]>([]);
  const [selectedCategory,setSelectedCategory] = useState('Choose a genre');

  useEffect(()=> {
     fetch('books.json')
      .then(response => response.json())
      .then( data => setBooks(data))
  },[])

  const filteredBooks = selectedCategory === 'Choose a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  return (
    <div className="h-screen">
        <div>
            <h3 className="text-3xl font-semibold font-Montserrat mb-6">Top Sellers</h3>
                <select className="bg-secondary rounded-md py-2 px-5 focus:outline-none" onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categories.map((category,index)=>(
                      <option key={index} value={category}>{category}</option>
                    ))}   
                </select>
        </div>

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
            filteredBooks.map((filteredBook,index) => (
              <SwiperSlide>
                <BookCard key={index} book={filteredBook}></BookCard>
              </SwiperSlide>
            ))
          }
        </Swiper>
      
    </div>
  )
}
