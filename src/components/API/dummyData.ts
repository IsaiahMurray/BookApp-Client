import {Role, Privacy} from "../../types";
export const userLoginBody = { email: "murray.isaiah13@gmail.com", password: "test" };
export const userRegisterBody = { username: "New Writer", email: "user1@email.com", password: "test" };
export const userUpdateBody = {
    // username: "New Name",
    // email: "murray.isaiah13@gmail.com",
    password: "test"
};
export const adminUpdateRole = { role: "admin" };

export const bookUpdateBody = {
    author: "Zazu",
    title: "My First Edited Book",
    description: "This is my first attempt at writing a book!",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: "private",
    canRate: true,
    canReview: true,
};

export const bookPostBody = {
    author: "Author",
    title: "Dummy Book",
    description: "Dummy Book",
    titleFont: "Tahoma, Verdana, Segoe, sans-serif",
    contentFont: "Tahoma, Verdana, Segoe, sans-serif",
    privacy: "public",
    canRate: true,
    canReview: true,
    allowedUsers: [],
};
export const bookPatchBody = {
    propertyName: "author",
    propertyValue: "Yo Mama"
};

export const chapterPostBody = { title: "Le First Chap", content: "I am chap", chapterNumber: 5 };
export const chapterUpdateBody = { title: "Le First Chap", content: "I THE chap", chapterNumber: 2 };

export const reviewPostBody = { rating: 5, comment: "Nice book, nerd!" };
export const reviewUpdateBody = { rating: 3, comment: "I take it back, nerd!" };
export const reviewPatchBody = {
    propertyName: "rating",
    propertyValue: 1
};

export const tagBody = { tagName: "To Delete" };

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
  };
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
      chapters: [
        {
          id: 1,
          bookId: 1,
          chapterNumber: 1,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
        {
          id: 2,
          bookId: 1,
          chapterNumber: 3,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
        {
          id: 3,
          bookId: 1,
          chapterNumber: 3,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
      ],
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
      chapters: [
        {
          id: 1,
          bookId: 2,
          chapterNumber: 1,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
        {
          id: 2,
          bookId: 2,
          chapterNumber: 3,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
        {
          id: 3,
          bookId: 2,
          chapterNumber: 3,
          title: "Video game",
          content:
            "Grinding PSP Halo 2 digital rights management kill screen Donkey Kong The Legend of Zelda: Twilight Princess. Recoi FPS cheats co-op speedhacks Puzzle Game Nintendo Super Mario Odyssey GUI bonus stage Uncharted. Rush OHKO mute Super Smash Bros. Hacker The Legend of Zelda: Ocarina of Time damage per second first-person esp cheats Gran Turismo. Slow-down RNG SoulCalibur spoiler pwned invisible wall aggro rumble pack shovelware. Gank difficulty AoE troll Borderlands boss Fatality Madden attract mode PlayStation3 The Legend of Zelda: A Link to the Past ÜberCharge.",
        },
      ],
    },
  ];