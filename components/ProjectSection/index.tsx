import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import ProjectContainer from 'containers/ProjectContainer';
import ContactMeButton from 'components/ContactMeButton';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    projects: Project[];
}

const ProjectSection: React.FC<IProps> = ({ projects, className, ...props }) => {
    return (
        <section className={cn(styles.projectSection, className)}
                 {...props}
        >
            <Container className={styles.titleBar}>
                <h2 className={styles.title}>
                    Projects
                </h2>
                <ContactMeButton />
            </Container>
            <Container>
                <ProjectContainer className={styles.projectContainer}
                                  projects={projects}
                />
            </Container>
        </section>
    );
};

export default ProjectSection;
