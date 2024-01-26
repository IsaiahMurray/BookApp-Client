export const userLoginBody = { email: "murray.isaiah13@gmail.com", password: "test" };
export const userRegisterBody = { username: "New Admin Gorl", email: "admin3@email.com", password: "test" };
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