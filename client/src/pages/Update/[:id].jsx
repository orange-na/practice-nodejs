import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react"


export default function Update() {

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

    console.log(router.asPath.split('/')[2]);

    const bookId = router.asPath.split('/')[2];

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:8800/books/' + bookId, books);
            router.push('/Books');
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <div className="update-items">
      <h1>Update new book</h1>
      <div className="form">
        <input type="text" placeholder="title" onChange={handleChanged} name="title"/>
        <input type="text" placeholder="desc" onChange={handleChanged} name="desc"/>
        <input type="number" placeholder="price" onChange={handleChanged} name="price"/>
        <input type="text" placeholder="cover" onChange={handleChanged} name="cover"/>
      </div>
      <button onClick={handleClick}>Update</button>
      </div>
    )
  }
  