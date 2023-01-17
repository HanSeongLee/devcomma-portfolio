import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import ContactMeButton from 'components/ContactMeButton';
import Container from 'components/Container';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}

const TitleBar: React.FC<IProps> = ({ title, className, ...props }) => {
    return (
        <Container className={cn(styles.titleBar, className)}
                   {...props}
        >
            <h2 className={styles.title}>
                {title}
            </h2>
            <ContactMeButton />
        </Container>
    );
};

export default TitleBar;
