import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    award: Award;
}

const AwardCard: React.FC<IProps> = ({
                                         award: {
                                             name, prize, year, institution,
                                             country
                                         },
                                         className, ...props
                                     }) => {
    return (
        <div className={cn(styles.award, className)}
             {...props}
        >
            <div>
                <h2 className={styles.name}>
                    {prize}, {name}
                </h2>
                <ul className={styles.details}>
                    <li>{year}</li>
                    <li>{institution}</li>
                    <li>{country}</li>
                </ul>
            </div>
        </div>
    );
};

export default AwardCard;
