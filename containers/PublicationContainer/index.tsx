import React, { HTMLAttributes, useCallback, useState } from 'react';
import PublicationCard from 'components/PublicationCard';
import { client } from 'lib/sanity.client';
import { groq } from 'next-sanity';
import Pagination from 'components/Pagination';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    publications: Publication[];
}

const PublicationContainer: React.FC<IProps> = ({ publications: initialPublications, ...props }) => {
    const [publications, setPublications] = useState(initialPublications);
    const [lastCreatedAt, setCreatedAt] = useState<string | null>(initialPublications[initialPublications.length - 1]._createdAt);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
        if (lastCreatedAt === null) {
            return;
        }

        setLoading(true);
        const result: Publication[] = await client.fetch(groq`*[_type == "publication" && _createdAt < $lastCreatedAt]{
        _id, title, date, publisher,
        link, _createdAt,
    } | order(_createdAt desc)[0...8]`, { lastCreatedAt });

        if (result.length === 6) {
            setCreatedAt(result[result.length - 1]._createdAt);
        } else {
            setCreatedAt(null); // Reached the end
        }

        setPublications(_publications => [
            ..._publications,
            ...result,
        ]);
        setLoading(false);
    }, [lastCreatedAt]);

    return (
        <>
            <ul {...props}>
                {publications?.map((publication) => (
                    <li key={publication._id}>
                        <PublicationCard publication={publication} />
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

export default PublicationContainer;
