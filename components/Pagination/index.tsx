import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onLoadMore: () => void,
}

const Pagination: React.FC<IProps> = ({ onLoadMore, className, ...props }) => {
    return (
        <div className={cn(styles.pagination, className)}
             {...props}
        >
            <Button onClick={onLoadMore}>
                Load More
            </Button>
        </div>
    );
};

export default Pagination;
