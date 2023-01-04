import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    color?: string;
}

const Button: React.FC<IProps> = ({
                                      loading, color, className, children,
                                      ...props
                                  }) => {
    return (
        <button className={cn(styles.button, className)}
                {...props}
        >
            {loading && (
                <ClipLoader color={'#767676'}
                            size={18}
                />
            )}
            <span>
                {children}
            </span>
        </button>
    );
};

Button.defaultProps = {
    loading: false,
    color: '#000000',
};

export default Button;
