import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import TitleBar from 'components/TitleBar';
import Container from 'components/Container';
import PublicationContainer from 'containers/PublicationContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    publications: Publication[];
}

const PublicationSection: React.FC<IProps> = ({ publications, className, ...props }) => {
    return (
        <section className={cn(styles.publicationSection, className)}
                 {...props}
        >
            <TitleBar title={'Publications'}
                      displayContactMe={false}
            />

            <Container>
                <PublicationContainer className={styles.publicationContainer}
                                      publications={publications}
                />
            </Container>
        </section>
    );
};

export default PublicationSection;
