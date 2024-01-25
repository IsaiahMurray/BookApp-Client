import React, { createContext, useContext, useState } from "react";
import { Privacy, Role, IUser, FullBook } from "../../types";


interface ProfileContextType {
  user: IUser | null;
  bookList: FullBook[] | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setBookList: React.Dispatch<React.SetStateAction<FullBook[] | null>>;
}

// const initialUser: IUser | null = null;

  const user2 = {
        id: 1,
        username: "Ya Boi",
        email: "murray.isaiah13@gmail.com",
        password: "$2b$10$5NJf7tMUshZmZ086nUTKieKABzrHdjvd0DjqRKtAe74DnChf32kxK",
        role: Role.User,
        readingList: [5, 6, 7, 8],
        favorites: [1, 2, 3, 4],
        archiveAccount: false,
        profilePicture: "",
    }
    const books = [
        {
            id: 1,
            author: "Isaiah",
            userId: 1,
            title: "Japanese 3",
            description: "Japanese",
            titleFont: "Tahoma, Verdana, Segoe, sans-serif",
            contentFont: "Tahoma, Verdana, Segoe, sans-serif",
            privacy: Privacy.Public,
            canRate: false,
            rating: null,
            tags: [1, 2, 3],
            canReview: false,
            coverPicture: null,
            allowedUsers: [],
            archived: false,
            reviews: [],
            chapters: [{
                id: 1,
                bookId: 1,
                chapterNumber: 1,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            },
            {
                id: 2,
                bookId: 1,
                chapterNumber: 3,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            },
            {
                id: 3,
                bookId: 1,
                chapterNumber: 3,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            }]
        },
        {
            id: 1,
            author: "Isaiah",
            userId: 1,
            title: "Japanese 3",
            description: "Japanese",
            titleFont: "Tahoma, Verdana, Segoe, sans-serif",
            contentFont: "Tahoma, Verdana, Segoe, sans-serif",
            privacy: Privacy.Public,
            canRate: false,
            rating: null,
            tags: [1, 2, 3],
            canReview: false,
            coverPicture: null,
            allowedUsers: [],
            archived: false,
            reviews: [],
            chapters: [{
                id: 1,
                bookId: 2,
                chapterNumber: 1,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            },
            {
                id: 2,
                bookId: 2,
                chapterNumber: 3,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            },
            {
                id: 3,
                bookId: 2,
                chapterNumber: 3,
                title: "Video game",
                content: "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
            }]
        }
    ]
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
  const [user, setUser] = useState<IUser | null>(user2);
  const [bookList, setBookList] = useState<FullBook[] | null>(books);

  const contextValue: ProfileContextType = {
    user,
    bookList,
    setUser,
    setBookList
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
