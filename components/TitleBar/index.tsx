import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import ContactMeButton from 'components/ContactMeButton';
import Container from 'components/Container';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    displayContactMe?: boolean;
}

const TitleBar: React.FC<IProps> = ({ title, displayContactMe, className, ...props }) => {
    return (
        <Container className={cn(styles.titleBar, className)}
                   {...props}
        >
            <h2 className={styles.title}>
                {title}
            </h2>
            {displayContactMe && <ContactMeButton />}
        </Container>
    );
};

TitleBar.defaultProps = {
    displayContactMe: false,
};

export default TitleBar;
