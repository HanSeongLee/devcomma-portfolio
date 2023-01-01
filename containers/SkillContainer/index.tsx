import React, { HTMLAttributes } from 'react';
import SkillCard from 'components/SkillCard';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    skills: Skill[];
}

const SkillContainer: React.FC<IProps> = ({ skills, ...props }) => {
    return (
        <ul {...props}>
            {skills?.map((skill) => (
                <li key={skill._id}>
                    <SkillCard skill={skill} />
                </li>
            ))}
        </ul>
    );
};

export default SkillContainer;
