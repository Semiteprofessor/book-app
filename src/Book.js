/** @format */

import React from "react";

import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Book = () => {
  const [books, setBooks] = useState([]);

  const booksCollectionRef = collection(db, "books");

  useEffect(() => {
    const books = async () => {
      // Read the data from the database

      // Set the books to be loaded from the database
      try {
        const data = await getDocs(booksCollectionRef);
      } catch (error) {}
    };
  }, []);
  return <div>Book</div>;
};

export default Book;
