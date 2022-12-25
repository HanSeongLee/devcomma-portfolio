import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import SkillContainer from 'containers/SkillContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const SkillSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.skillSection, className)}
                 {...props}
        >
            <Container>
                <SkillContainer className={styles.skillContainer} />
            </Container>
        </section>
    );
};

export default SkillSection;
