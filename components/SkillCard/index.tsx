import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    skill: Skill;
}

const SkillCard: React.FC<IProps> = ({ skill: { icon, name }, className, ...props }) => {
    return (
        <div className={cn(styles.skillCard, className)}
             {...props}
        >
            <img className={styles.icon}
                 src={icon}
                 alt={name}
            />
            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
};

export default SkillCard;
