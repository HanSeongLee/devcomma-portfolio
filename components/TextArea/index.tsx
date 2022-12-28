import React, { TextareaHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({ error, className, children, ...props }, ref) => {
    return (
        <div className={cn(styles.textareaWrapper, {
            [styles.error]: error,
        }, className)}>
            <textarea className={styles.textarea}
                      ref={ref}
                      {...props}
            >
                {children}
            </textarea>
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
});

export default TextArea;
