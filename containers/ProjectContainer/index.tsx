import React, { HTMLAttributes } from 'react';
import ProjectCard from 'components/ProjectCard';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    projects: Project[];
}

const ProjectContainer: React.FC<IProps> = ({ projects, ...props }) => {
    return (
        <ul {...props}>
            {projects?.map((project) => (
                <li key={project._id}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    );
};

export default ProjectContainer;
