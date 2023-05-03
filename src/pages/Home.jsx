/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Auth } from "firebase/auth";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Home = () => {
  const [books, setBooks] = useState([]);

  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookReleaseDate, setNewReleaseDate] = useState(0);
  const [newBookReceivedAward, setNewBookReceivedAward] = useState(false);

  const booksCollectionRef = collection(db, "books");

  const getBookList = async () => {
    try {
      const data = await getDocs(booksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBooks(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  const handleSubmit = async () => {
    try {
      await addDoc(booksCollectionRef, {
        title: newBookTitle,
        author: newBookAuthor,
        releaseDate: newBookReleaseDate,
        receivedAward: newBookReceivedAward,
      });
      getBookList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {books.map((book) => (
          <div key={book.id}>
            <div className="card">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1>Add New Book</h1>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setNewBookTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setNewBookAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Release Date"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          required
        />
        <div className="is-checked">
          <input
            style={{ alignSelf: "flex-start" }}
            type="checkbox"
            checked={newBookReceivedAward}
            onChange={(e) => setNewBookReceivedAward(e.target.checked)}
          />
          <p>Received Award ?</p>
        </div>

        <button className="btn" onClick={handleSubmit}>
          Add New Book
        </button>
      </div>
    </div>
  );
};

export default Home;
