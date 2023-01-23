import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import TitleBar from 'components/TitleBar';
import Container from 'components/Container';
import AwardContainer from 'containers/AwardContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    awards: Award[];
}

const AwardSection: React.FC<IProps> = ({ awards, className, ...props }) => {
    return (
        <section className={cn(styles.awardSection, className)}
                 {...props}
        >
            <TitleBar title={'Honors and Awards'} />
            <Container>
                <AwardContainer className={styles.awardContainer}
                                awards={awards}
                />
            </Container>
        </section>
    );
};

export default AwardSection;
