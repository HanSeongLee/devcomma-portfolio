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
            <div className={styles.thumbnailWrapper}>
                <img className={styles.thumbnail}
                     src={thumbnail}
                     alt={''}
                />
                <ButtonContainer projectLink={projectLink}
                                 codeLink={codeLink}
                />
            </div>
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
            <ButtonContainer projectLink={projectLink}
                             codeLink={codeLink}
            />
        </div>
    );
};

const ButtonContainer: React.FC<HTMLAttributes<HTMLDivElement> & {
    projectLink: string,
    codeLink: string,
}> = ({ projectLink, codeLink, className, ...props }) => {
    return (
        <div className={cn(styles.buttonContainer, className)}
             {...props}
        >
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
    );
};


export default ProjectCard;
