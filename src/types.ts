export type Token = string | null | undefined;

export interface IProfile {
    User: IUser,
    BookList: FullBook[],
}

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    role: Role,
    readingList: number[] | null,
    favorites: number[],
    archiveAccount: boolean,
    profilePicture: string | null
}

export enum Role {
Admin = "admin",
User = "user"
}

export interface IBook {
    id: number,
    userId: number,
    author: string,
    title: string,
    description: string,
    titleFont: string,
    contentFont: string,
    privacy: Privacy,
    canRate: boolean,
    rating: number | null,
    tags: number[],
    canReview: boolean,
    coverPicture: string | null,
    allowedUsers: number[],
    archived: boolean,
    chapters?: IChapter[]
}

export interface FullBook extends IBook {
    chapters: IChapter[],
    reviews: IReview[]
}

export enum Privacy {
    Public = "public",
    Limited = "limited",
    Private = "private"
}

export interface IChapter {
    id: number,
    bookId: number,
    title: string,
    content: string,
    chapterNumber: number
}

export interface IReview {
    id: number,
    userId: number,
    rating: number,
    comment: Text
}

export interface ITag  {
    id: number,
    tagName: string
}