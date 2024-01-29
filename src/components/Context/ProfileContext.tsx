import React, { createContext, useContext, useState } from "react";
import { IUser, FullBook } from "../../types";

interface ProfileContextType {
  user: IUser | null;
  bookList: FullBook[] | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setBookList: React.Dispatch<React.SetStateAction<FullBook[] | null>>;
}

// const initialUser: IUser | null = null;

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [bookList, setBookList] = useState<FullBook[] | null>(null);

  const contextValue: ProfileContextType = {
    user,
    bookList,
    setUser,
    setBookList,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
