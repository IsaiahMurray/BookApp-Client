import React, { createContext, useContext, useState } from "react";
import { IUser, FullBook, Token } from "../../types";

interface ProfileContextType {
  user: IUser | null;
  bookList: FullBook[] | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setBookList: React.Dispatch<React.SetStateAction<FullBook[] | null>>;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [token, setToken] = useState<Token>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const contextValue: ProfileContextType = {
    user,
    bookList,
    setUser,
    setBookList,
    token,
    setToken,
    loading, setLoading
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
