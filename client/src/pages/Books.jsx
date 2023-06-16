import axios from "axios";
import { useEffect, useState } from "react"


export default function Books(){
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  },[]);

    return (
      <>
  <h1>
    hello Book
  </h1>
      </>
    )
  }
  

