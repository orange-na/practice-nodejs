import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react"


export default function Add() {

    const router = useRouter();
    const [books, setBooks] = useState({
        title:'',
        desc:'',
        price:null,
        cover:'',
    })

    const handleChanged = useCallback((e)=> {
        setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(books)
    },[books]);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/books', books);
            router.push('/Books');
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <>
      <div className="form">
        <h1>Add new book</h1>
        <input type="text" placeholder="title" onChange={handleChanged} name="title"/>
        <input type="text" placeholder="desc" onChange={handleChanged} name="desc"/>
        <input type="number" placeholder="price" onChange={handleChanged} name="price"/>
        <input type="text" placeholder="cover" onChange={handleChanged} name="cover"/>
        <button onClick={handleClick}>Add</button>
      </div>
      </>
    )
  }
  