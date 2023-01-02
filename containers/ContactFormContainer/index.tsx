import React, { HTMLAttributes, useCallback, useState } from 'react';
import ContactForm from 'components/ContactForm';
import { useForm } from "react-hook-form";
import axios from 'axios';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ContactFormContainer: React.FC = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(async (data: any) => {
        setLoading(true);
        await axios.post(`/api/contact`, data);
        reset({
            name: '',
            email: '',
            message: '',
        });
        setLoading(false);

        window.alert('Thank you for submitting!');
    }, []);

    return (
        <div {...props}>
            <ContactForm register={register}
                         onSubmit={handleSubmit(onSubmit)}
                         errors={errors}
                         loading={loading}
            />
        </div>
    );
};

export default ContactFormContainer;
