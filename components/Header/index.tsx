import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Logo from 'components/Logo';
import SocialContainer from 'containers/SocialContainer';
import Container from 'components/Container';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLHeadElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />

                <nav>
                    <Link href={'https://tools.devcomma.com/'}>
                        Calc & Tools
                    </Link>
                </nav>

                <SocialContainer className={styles.socialContainer} />
            </Container>
        </header>
    );
};

export default Header;
