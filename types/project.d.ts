type Project = {
    _id: string;
    thumbnail: string | {
        small: string;
        large: string;
    };
    title: string;
    tags: string[];
    projectLink: string;
    codeLink: string;
    _createdAt: string;
};
