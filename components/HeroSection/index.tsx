import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Container from 'components/Container';
import cn from 'classnames';
import Button from 'components/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <div className={styles.profileWrapper}>
                    <picture>
                        <source srcSet={'/img/image-profile-desktop.webp'}
                                media={'(min-width: 992px)'}
                        />
                        <source srcSet={'/img/image-profile-tablet.webp'}
                                media={'(min-width: 568px)'}
                        />
                        <source srcSet={'/img/image-profile-mobile.webp'} />
                        <img className={styles.profile}
                             src={'/img/image-profile-mobile.webp'}
                        />
                    </picture>
                </div>


                <Container className={styles.contentsBox}>
                    <h2 className={styles.title}>
                        Nice to <br />meet you! I’m <span className={styles.highlight}>Adam Keyes</span>.
                    </h2>
                    <p className={styles.description}>
                        Based in the UK, I’m a front-end developer passionate about building accessible web apps that
                        users love.
                    </p>
                    <Button>
                        Contact Me
                    </Button>
                </Container>
            </Container>
        </section>
    );
};

export default HeroSection;
