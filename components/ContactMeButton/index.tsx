import React, { ButtonHTMLAttributes, useCallback } from 'react';
import Button from 'components/Button';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const ContactMeButton: React.FC<IProps> = ({ ...props }) => {
    const onClick = useCallback(() => {
        const contactSection = window.document.getElementById('contact');
        if (!contactSection) {
            return;
        }

        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Button onClick={onClick}
                {...props}>
            Contact Me
        </Button>
    );
};

export default ContactMeButton;
