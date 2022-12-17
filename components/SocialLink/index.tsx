import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import GitHubIcon from '/public/icons/icon-github.svg';
import FrontendMentorIcon from '/public/icons/icon-frontend-mentor.svg';
import LinkedInIcon from '/public/icons/icon-linkedin.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: SocialName;
}

const icons = {
    github: <GitHubIcon />,
    'frontend-mentor': <FrontendMentorIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <TwitterIcon />,
};

const SocialLink: React.FC<IProps> = ({ icon, className, ...props }) => {
    return (
        <a className={cn(styles.socialLink)}
           target={'_blank'}
           title={icon}
           {...props}
        >
            {icons[icon]}
        </a>
    );
};

export default SocialLink;
