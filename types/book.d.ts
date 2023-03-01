type Book = {
    _id: string;
    thumbnail: string | {
        small: string;
        large: string;
    };
    title: string;
    date: string;
    authors: string[];
    publisher: string;
    link: string;
    _createdAt: string;
};
