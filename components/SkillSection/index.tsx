import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import SkillContainer from 'containers/SkillContainer';
import RingsPattern from 'public/img/pattern-rings.svg'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    skills: Skill[];
}

const SkillSection: React.FC<IProps> = ({ skills, className, ...props }) => {
    return (
        <section className={cn(styles.skillSection, className)}
                 {...props}
        >
            <div className={styles.ringsPattern}>
                <RingsPattern />
            </div>
            <Container>
                <SkillContainer className={styles.skillContainer}
                                skills={skills}
                />
            </Container>
        </section>
    );
};

export default SkillSection;
