import React, { TextareaHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({ error, className, children, ...props }, ref) => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={styles.textarea}
                      ref={ref}
                      {...props}
            >
                {children}
            </textarea>
        </div>
    );
});

export default TextArea;
