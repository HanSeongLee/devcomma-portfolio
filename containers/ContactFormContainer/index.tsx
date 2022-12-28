import React, { HTMLAttributes, useCallback } from 'react';
import ContactForm from 'components/ContactForm';
import { useForm } from "react-hook-form";

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ContactFormContainer: React.FC = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback((data) => {
        // TODO: Implement here.
        console.log(data);
    }, []);

    return (
        <div {...props}>
            <ContactForm register={register}
                         onSubmit={handleSubmit(onSubmit)}
                         errors={errors}
            />
        </div>
    );
};

export default ContactFormContainer;
