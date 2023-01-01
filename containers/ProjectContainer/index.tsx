import React, { HTMLAttributes, useCallback, useState } from 'react';
import ProjectCard from 'components/ProjectCard';
import { client } from 'lib/sanity.client';
import { groq } from 'next-sanity';
import Pagination from 'components/Pagination';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    projects: Project[];
}

const ProjectContainer: React.FC<IProps> = ({ projects: initialProjects, ...props }) => {
    const [projects, setProjects] = useState(initialProjects);
    const [lastCreatedAt, setCreatedAt] = useState<string | null>(initialProjects[initialProjects.length - 1]._createdAt);
    const [loading, setLoading] = useState(false);

    const loadMoreProjects = useCallback(async () => {
        if (lastCreatedAt === null) {
            return;
        }

        setLoading(true);
        const result: Project[] = await client.fetch(groq`*[_type == "project" && _createdAt < $lastCreatedAt]{
        _id, title, projectLink, codeLink,
        "thumbnail": thumbnail.asset->url,
        "tags": tags[]->name,
        _createdAt,
    } | order(_createdAt desc)[0...6]`, { lastCreatedAt });

        if (result.length === 6) {
            setCreatedAt(result[result.length - 1]._createdAt);
        } else {
            setCreatedAt(null); // Reached the end
        }

        setProjects(_projects => [
            ..._projects,
            ...result,
        ]);
        setLoading(false);
    }, [lastCreatedAt]);

    return (
        <div>
            <ul {...props}>
                {projects?.map((project) => (
                    <li key={project._id}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
            {lastCreatedAt && (
                <Pagination onLoadMore={loadMoreProjects}
                            loading={loading}
                />
            )}
        </div>
    );
};

export default ProjectContainer;
