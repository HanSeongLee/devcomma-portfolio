import React, { HTMLAttributes } from 'react';
import SkillCard from 'components/SkillCard';

interface IProps extends HTMLAttributes<HTMLUListElement> {

}

const skillList: Skill[] = [
    {
        name: 'HTML',
        year: 4,
    },
    {
        name: 'CSS',
        year: 4,
    },
    {
        name: 'Javascript',
        year: 4,
    },
    {
        name: 'Accessibility',
        year: 4,
    },
    {
        name: 'React',
        year: 3,
    },
    {
        name: 'Sass',
        year: 3,
    },
];

const SkillContainer: React.FC<IProps> = ({ ...props }) => {
    return (
        <ul {...props}>
            {skillList?.map((skill, index) => (
                <li key={index}>
                    <SkillCard skill={skill} />
                </li>
            ))}
        </ul>
    );
};

export default SkillContainer;
