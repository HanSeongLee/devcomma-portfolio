import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    book: Book;
}

const BookCard: React.FC<IProps> = ({
                                        book: {
                                            thumbnail, title, date, authors,
                                            publisher, link
                                        }, className, ...props
                                    }) => {
    return (
        <div className={cn(styles.bookCard, className)}
             {...props}
        >
            <div>
                {typeof thumbnail === 'string' ? (
                    <img className={styles.thumbnail}
                         src={thumbnail}
                         alt={''}
                    />
                ) : (
                    <picture>
                        <source srcSet={thumbnail.large}
                                media={'(min-width: 796px)'}
                        />
                        <source srcSet={thumbnail.small} />

                        <img className={styles.thumbnail}
                             src={thumbnail.small}
                             alt={''}
                        />
                    </picture>
                )}
            </div>
            <div className={styles.body}>
                <div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <ul className={styles.details}>
                        <li>
                            {date}
                        </li>
                        <li>
                            {authors.join(', ')}
                        </li>
                        <li>
                            {publisher}
                        </li>
                    </ul>
                </div>

                <div>
                    <a href={link}
                       target={'_blank'}
                    >
                        <Button>
                            View Book
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
