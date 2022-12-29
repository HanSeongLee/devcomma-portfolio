import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import SkillSection from 'components/SkillSection';
import ProjectSection from 'components/ProjectSection';
import ContactSection from 'components/ContactSection';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <Header />
                <div className={styles.container}>
                    <HeroSection />
                    <SkillSection />
                    <ProjectSection />
                    <div className={styles.contactSectionWrapper}>
                        <ContactSection id={'contact'} />
                        <Header className={styles.header} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home
