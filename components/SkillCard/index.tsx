import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    skill: Skill;
}

const SkillCard: React.FC<IProps> = ({ skill: { name, year }, className, ...props }) => {
    return (
        <div className={cn(styles.skillCard, className)}
             {...props}
        >
            <div className={styles.name}>
                {name}
            </div>
            {year > 0 && (
                <p className={styles.period}>
                    {year === 1 && `${year} Year Experience`}
                    {year > 1 && `${year} Years Experience`}
                </p>
            )}
        </div>
    );
};

export default SkillCard;
