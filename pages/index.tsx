import type { GetStaticProps, NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import ProjectSection from 'components/ProjectSection';
import ContactSection from 'components/ContactSection';
import { client } from 'lib/sanity.client';
import { groq } from 'next-sanity';
import SkillSection from 'components/SkillSection';

interface IProps {
    skills: Skill[];
    projects: Project[];
}

const Home: NextPage<IProps> = ({ skills, projects }) => {
    return (
        <>
            <main className={styles.main}>
                <Header className={styles.header} />
                <div className={styles.container}>
                    <HeroSection />
                    <SkillSection skills={skills} />
                    <ProjectSection projects={projects} />
                    <div className={styles.contactSectionWrapper}>
                        <ContactSection id={'contact'} />
                        <Header className={styles.footer} />
                    </div>
                </div>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const skills: Skill[] = await client.fetch(groq`*[_type == "skill"]{
        _id, name,
        "icon": icon.asset->url,
        _createdAt,
    } | order(_createdAt)[0...10]`);
    const projects: Project[] = await client.fetch(groq`*[_type == "project"]{
        _id, title, projectLink, codeLink,
        "thumbnail": thumbnail.asset->url,
        "tags": tags[]->name,
        _createdAt,
    } | order(_createdAt desc)[0...6]`);

    return {
        props: {
            projects,
            skills,
        },
    };
}

export default Home
