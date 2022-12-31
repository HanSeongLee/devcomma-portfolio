import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Container from 'components/Container';
import cn from 'classnames';
import ContactMeButton from 'components/ContactMeButton';
import RingsPattern from 'public/img/pattern-rings.svg';
import CirclePattern from 'public/img/pattern-circle.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <div className={styles.ringsPattern}>
                <RingsPattern />
            </div>
            <Container className={styles.container}>
                <div className={styles.profileWrapper}>
                    <picture>
                        <source srcSet={'/img/image-profile-desktop.webp'}
                                media={'(min-width: 992px)'}
                        />
                        <source srcSet={'/img/image-profile-tablet.webp'}
                                media={'(min-width: 768px)'}
                        />
                        <source srcSet={'/img/image-profile-mobile.webp'} />
                        <img className={styles.profile}
                             src={'/img/image-profile-mobile.webp'}
                             alt={''}
                        />
                    </picture>
                </div>


                <Container className={styles.contentsBox}>
                    <h2 className={styles.title}>
                        Nice to <br />meet you! I’m <span className={styles.highlight}>HanSeong Lee</span>.
                    </h2>
                    <p className={styles.description}>
                        Based in the South Korea, I’m a full-stack engineer passionate about Software Dev & I enjoy
                        learning new things.
                    </p>
                    <ContactMeButton />
                </Container>
            </Container>
            <div className={styles.circlePattern}>
                <CirclePattern />
            </div>
        </section>
    );
};

export default HeroSection;
