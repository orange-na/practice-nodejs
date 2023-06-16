import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function Books(){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  },[]);

    return (
      <div className="box">
      <div className="items">
        <h1>Yuto Book Shop</h1>
        <div className="books">
          {books.map((book) => {
            return (
              <div className="book" key={ book.id }>
                <img src={book.cover} alt="" />
                <h2>{ book.title }</h2>
                <p>{ book.desc }</p>
                <span>{ book.price }</span>
                <button className="update">Update</button>
                <button className="delete">Delete</button>
              </div>
            )
          })}
        </div>
        <button><Link href='/Add'>Add new book</Link></button>
      </div>
      </div>
    )
  }
  

