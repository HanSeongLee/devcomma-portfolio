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
        href: 'https://github.com/HanSeongLee',
    },
    {
        name: 'frontend-mentor',
        href: 'https://www.frontendmentor.io/profile/HanSeongLee',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/han-seong-lee-4b2488135/',
    },
    {
        name: 'twitter',
        href: 'https://twitter.com/devComma',
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
