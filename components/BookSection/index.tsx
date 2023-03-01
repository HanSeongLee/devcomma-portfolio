import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import TitleBar from 'components/TitleBar';
import Container from 'components/Container';
import BookContainer from 'containers/BookContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    books: Book[];
}

const BookSection: React.FC<IProps> = ({ books, className, ...props }) => {
    return (
        <section className={cn(styles.bookSection, className)}
                 {...props}
        >
            <TitleBar title={'Books'} />

            <Container>
                <BookContainer className={styles.bookContainer}
                               books={books}
                />
            </Container>
        </section>
    );
};

export default BookSection;
