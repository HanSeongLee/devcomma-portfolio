import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className)}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
