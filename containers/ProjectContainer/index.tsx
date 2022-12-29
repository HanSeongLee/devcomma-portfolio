import React, { HTMLAttributes } from 'react';
import ProjectCard from 'components/ProjectCard';

interface IProps extends HTMLAttributes<HTMLUListElement> {

}

const projectList: Project[] = [
    {
        thumbnail: {
            small: '/img/thumbnail-project-1-small.webp',
            large: '/img/thumbnail-project-1-large.webp',
        },
        title: 'Design Portfolio',
        tags: ['HTML', 'CSS'],
        projectLink: '#',
        codeLink: '#',
    },
    {
        thumbnail: {
            small: '/img/thumbnail-project-2-small.webp',
            large: '/img/thumbnail-project-2-large.webp',
        },
        title: 'E-learning Landing Page',
        tags: ['HTML', 'CSS'],
        projectLink: '#',
        codeLink: '#',
    },
    {
        thumbnail: {
            small: '/img/thumbnail-project-3-small.webp',
            large: '/img/thumbnail-project-3-large.webp',
        },
        title: 'Todo Web App',
        tags: ['HTML', 'CSS', 'Javascript'],
        projectLink: '#',
        codeLink: '#',
    },
    {
        thumbnail: {
            small: '/img/thumbnail-project-4-small.webp',
            large: '/img/thumbnail-project-4-large.webp',
        },
        title: 'Entertainment Web App',
        tags: ['HTML', 'CSS', 'Javascript'],
        projectLink: '#',
        codeLink: '#',
    },
    {
        thumbnail: {
            small: '/img/thumbnail-project-5-small.webp',
            large: '/img/thumbnail-project-5-large.webp',
        },
        title: 'Memory Game',
        tags: ['HTML', 'CSS', 'Javascript'],
        projectLink: '#',
        codeLink: '#',
    },
    {
        thumbnail: {
            small: '/img/thumbnail-project-6-small.webp',
            large: '/img/thumbnail-project-6-large.webp',
        },
        title: 'Art Gallery Showcase',
        tags: ['HTML', 'CSS', 'Javascript'],
        projectLink: '#',
        codeLink: '#',
    },
]

const ProjectContainer: React.FC<IProps> = ({ ...props }) => {
    return (
        <ul {...props}>
            {projectList?.map((project, index) => (
                <li key={index}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    );
};

export default ProjectContainer;
