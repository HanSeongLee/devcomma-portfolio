import React, { HTMLAttributes } from 'react';
import SocialLink from 'components/SocialLink';

interface IProps extends HTMLAttributes<HTMLUListElement> {

}

const socialList: {
    name: SocialName,
    href: string,
}[] = [
    {
        name: 'github',
        href: '#',
    },
    {
        name: 'frontend-mentor',
        href: '#',
    },
    {
        name: 'linkedin',
        href: '#',
    },
    {
        name: 'twitter',
        href: '#',
    },
];

const SocialContainer: React.FC<IProps> = ({ ...props }) => {
    return (
        <ul {...props}>
            {socialList?.map(({ name, href }, index) => (
                <li key={index}>
                    <SocialLink icon={name}
                                href={href}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SocialContainer;
