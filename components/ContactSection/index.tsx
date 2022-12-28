import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import ContactFormContainer from 'containers/ContactFormContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ContactSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.contactSection, className)}
                 {...props}
        >
            <Container>
                <h2 className={styles.title}>
                    Contact
                </h2>
                <p className={styles.description}>
                    I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                </p>
                <ContactFormContainer />
                <hr/>
            </Container>
        </section>
    );
};

export default ContactSection;
