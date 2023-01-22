import React, { HTMLAttributes, useCallback, useState } from 'react';
import { client } from 'lib/sanity.client';
import { groq } from 'next-sanity';
import Pagination from 'components/Pagination';
import AwardCard from 'components/AwardCard';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    awards: Award[];
}

const AwardContainer: React.FC<IProps> = ({ awards: initialAwards, ...props }) => {
    const [awards, setAwards] = useState(initialAwards);
    const [lastCreatedAt, setCreatedAt] = useState<string | null>(initialAwards.length === 6 ? initialAwards[initialAwards.length - 1]._createdAt : null);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
        if (lastCreatedAt === null) {
            return;
        }

        setLoading(true);
        const result: Award[] = await client.fetch(groq`*[_type == "award" && _createdAt < $lastCreatedAt]{
        _id, name, prize, year, 
        institution, country, _createdAt,
    } | order(_createdAt desc)[0...6]`, { lastCreatedAt });

        if (result.length === 6) {
            setCreatedAt(result[result.length - 1]._createdAt);
        } else {
            setCreatedAt(null); // Reached the end
        }

        setAwards(_awards => [
            ..._awards,
            ...result,
        ]);
        setLoading(false);
    }, [lastCreatedAt]);

    return (
        <>
            <ul {...props}>
                {awards?.map((award) => (
                    <li key={award._id}>
                        <AwardCard award={award} />
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

export default AwardContainer;
