import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onLoadMore: () => void,
    loading?: boolean;
}

const Pagination: React.FC<IProps> = ({ onLoadMore, loading, className, ...props }) => {
    return (
        <div className={cn(styles.pagination, className)}
             {...props}
        >
            <Button onClick={onLoadMore}
                    disabled={loading}
                    loading={loading}
            >
                Load More
            </Button>
        </div>
    );
};

Pagination.defaultProps = {
    loading: false,
};

export default Pagination;
