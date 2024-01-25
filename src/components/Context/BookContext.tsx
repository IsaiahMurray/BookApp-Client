import { createContext, useState } from "react";
import { IBook, Privacy } from "../../types";

export type BookContextType = {
  books: IBook[];
};

const bookData = [
  {
    id: 25,
    author: "Isaiah",
    userId: 1,
    title: "Japanese 3",
    description: "Japanese",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: false,
    rating: null,
    tags: [],
    canReview: false,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
  {
    id: 1,
    author: "Zazu",
    userId: 8,
    title: "My First Book",
    description: "This is my first attempt at writing a book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: false,
    rating: null,
    tags: [],
    canReview: true,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
  {
    id: 2,
    author: "Zazu",
    userId: 8,
    title: "My Second Book",
    description: "This is my second attempt at writing a book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: true,
    rating: null,
    tags: [],
    canReview: true,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
  {
    id: 3,
    author: "Zazu",
    userId: 8,
    title: "My Third Book",
    description: "This is my third attempt at writing a book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: true,
    rating: null,
    tags: [],
    canReview: true,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
  {
    id: 5,
    author: "Tester Boi 1",
    userId: 2,
    title: "Another Book",
    description: "This is another book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: true,
    rating: null,
    tags: [],
    canReview: true,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
  {
    id: 6,
    author: "Zazu",
    userId: 8,
    title: "My Another Book",
    description: "This is my another attempt at writing a book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: Privacy.Public,
    canRate: true,
    rating: null,
    tags: [],
    canReview: true,
    coverPicture: null,
    allowedUsers: [],
    archived: false,
  },
];
export const BookContext = createContext<BookContextType>({ books: bookData });

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books] = useState<IBook[]>(bookData);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default Context;
