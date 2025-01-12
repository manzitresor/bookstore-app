import { useEffect, useState } from "react";
import Product from "../components/Product";


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
    <div>
        <div>
            <h3 className="text-3xl font-semibold font-Montserrat mb-6">Top Sellers</h3>
                <select className="bg-secondary rounded-md py-2 px-5 focus:outline-none" onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categories.map((category,index)=>(
                      <option key={index} value={category}>{category}</option>
                    ))}   
                </select>
        </div>
        {/* Cards goes here */}
        <div className="flex flex-col space-y-4">
          {
            filteredBooks.map((filteredBook,index) => (
              <Product key={index} book={filteredBook}></Product>
            ))
          }
        </div>
      
    </div>
  )
}
