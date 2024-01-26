export const userLoginBody = { email: "murray.isaiah13@gmail.com", password: "test" };
export const userRegisterBody = { username: "", email: "", password: "" };
export const userUpdateBody = {
    username: "",
    // email: "",
    // password: ""
};
export const userPatchBody = {};

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
    propertyName: "",
    propertyValue: ""
};

export const chapterPostBody = { title: "", content: "", chapterNumber: 0 };
export const chapterUpdateBody = { title: "", content: "", chapterNumber: 0 };

export const reviewPostBody = { rating: 4, comment: "Nice book, nerd!" };
export const reviewUpdateBody = { rating: 4, comment: "Nice book, nerd!" };
export const reviewPatchBody = {
    propertyName: "",
    propertyValue: ""
};

export const tagBody = { tagName: "Slice of Life" };