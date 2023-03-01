import React, { HTMLAttributes, useCallback, useState } from 'react';
import BookCard from 'components/BookCard';
import { client } from 'lib/sanity.client';
import { groq } from 'next-sanity';
import Pagination from 'components/Pagination';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    books: Book[];
}

const BookContainer: React.FC<IProps> = ({ books: initialBooks, ...props }) => {
    const [books, setBooks] = useState(initialBooks);
    const [lastCreatedAt, setCreatedAt] = useState<string | null>(initialBooks.length < 6 ? null : initialBooks[initialBooks.length - 1]._createdAt);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
        if (lastCreatedAt === null) {
            return;
        }

        setLoading(true);
        const result: Book[] = await client.fetch(groq`*[_type == "book" && _createdAt < $lastCreatedAt]{
        _id, thumbnail, title, date, authors, publisher,
        link, _createdAt,
    } | order(_createdAt desc)[0...6]`, { lastCreatedAt });

        if (result.length === 6) {
            setCreatedAt(result[result.length - 1]._createdAt);
        } else {
            setCreatedAt(null); // Reached the end
        }

        setBooks(_books => [
            ..._books,
            ...result,
        ]);
        setLoading(false);
    }, [lastCreatedAt]);

    return (
        <>
            <ul {...props}>
                {books?.map((book, index) => (
                    <li key={index}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
            {lastCreatedAt && (
                <Pagination onLoadMore={loadMore}
                            loading={loading}
                />
            )}
        </>
    );
};

export default BookContainer;
