import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    project: Project;
}

const ProjectCard: React.FC<IProps> = ({ project, className, ...props }) => {
    const {
        thumbnail, title, tags, projectLink,
        codeLink
    } = project;

    return (
        <div className={cn(styles.projectCard, className)}
             {...props}
        >
            <img className={styles.thumbnail}
                 src={thumbnail}
                 alt={''}
            />
            <div className={styles.title}>
                {title}
            </div>
            <ul className={styles.tagContainer}>
                {tags?.map((tag, index) => (
                    <li className={styles.tag}
                        key={index}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
            <div className={styles.buttonContainer}>
                <a href={projectLink}
                   target={'_blank'}
                >
                    <Button>
                        View Project
                    </Button>
                </a>
                <a href={codeLink}
                   target={'_blank'}
                >
                    <Button>
                        View Code
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
