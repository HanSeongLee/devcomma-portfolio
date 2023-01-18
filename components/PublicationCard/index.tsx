import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    publication: Publication;
}

const PublicationCard: React.FC<IProps> = ({
                                               publication: { title, date, publisher, link },
                                               className, ...props
                                           }) => {
    return (
        <div className={cn(styles.publication, className)}
             {...props}
        >
            <div>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <ul className={styles.dateAndPublisher}>
                    <li>{date}</li>
                    <li>{publisher}</li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <a href={link}
                   target={'_blank'}
                >
                    <Button>
                        View Publication
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default PublicationCard;
