import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Input from 'components/Input';
import Button from 'components/Button';
import TextArea from 'components/TextArea';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import ClipLoader from 'react-spinners/ClipLoader';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    loading?: boolean;
}

const ContactForm: React.FC<IProps> = ({
                                           register, errors, loading, className,
                                           ...props
                                       }) => {
    return (
        <form className={cn(styles.contactForm, className)}
              {...props}
        >
            <Input type={'text'}
                   placeholder={'Name'}
                   {...register('name', {
                       required: 'Required here',
                   })}
                   error={errors?.name?.message as string}
                   disabled={loading}
            />
            <Input type={'text'}
                   placeholder={'Email'}
                   {...register('email', {
                       required: 'Required here',
                       pattern: {
                           value: /\S+@\S+\.\S+/,
                           message: 'Sorry, invalid format here'
                       }
                   })}
                   error={errors?.email?.message as string}
                   disabled={loading}
            />
            <TextArea placeholder={'Message'}
                      {...register('message', {
                          required: 'Required here',
                      })}
                      error={errors?.message?.message as string}
                      disabled={loading}
            />
            <div className={styles.buttonContainer}>
                <Button type={'submit'}
                        disabled={loading}
                >
                    {loading && (
                        <ClipLoader color={'#767676'}
                                    size={18}
                        />
                    )}
                    <span>
                        Send Message
                    </span>
                </Button>
            </div>
        </form>
    );
};

ContactForm.defaultProps = {
    loading: false,
};

export default ContactForm;
