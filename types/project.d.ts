type Project = {
    thumbnail: string | {
        small: string;
        large: string;
    };
    title: string;
    tags: string[];
    projectLink: string;
    codeLink: string;
};
