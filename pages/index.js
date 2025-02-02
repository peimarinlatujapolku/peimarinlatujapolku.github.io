import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { textContent } from '../lib/content';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>{textContent.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <header>
                <nav>
                    <div className="logo">{textContent.logo}</div>
                    <ul className="nav-links">
                        <li><a href="#home">{textContent.navLinks.home}</a></li>
                        <li><a href="#activities">{textContent.navLinks.activities}</a></li>
                        <li><a href="#membership">{textContent.navLinks.membership}</a></li>
                        <li><a href="#contact">{textContent.navLinks.contact}</a></li>
                        {Object.keys(textContent.subpages).map(subpageKey => (
                            <li key={subpageKey}>
                                <Link href={`/${subpageKey}`}>
                                    {textContent.subpages[subpageKey].heading}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main>
                <section id="home" className="hero">
                    <h1>{textContent.hero.heading}</h1>
                    <p>{textContent.hero.description}</p>
                    <a href="#membership" className="cta-button">{textContent.hero.cta}</a>
                </section>
                <section id="about" className="about">
                    <h2>{textContent.about.heading}</h2>
                    <h3>{textContent.about.subheading}</h3>
                    {textContent.about.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </section>

                <section id="activities" className="activities">
                    <h2>{textContent.activities.heading}</h2>
                    <div className="activity-grid">
                        {Object.keys(textContent.activities).filter(key => key !== 'heading').map(activityKey => {
                            const activity = textContent.activities[activityKey];
                            return (
                                <div key={activityKey} className="activity-card">
                                    <Image src={activity.image.src} alt={activity.image.alt} width={500} height={300} />
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section id="membership" className="membership">
                    <h2>{textContent.membership.heading}</h2>
                    
                    <div className="membership-options">
                        {Object.keys(textContent.membership).filter(key => key !== 'heading').map(membershipKey => {
                            const membership = textContent.membership[membershipKey];
                            return (
                                <div className="membership-card">
                                    <h3>{membership.title}</h3>
                                    <p>{membership.description}</p>
                                    <a href={membership.link} className="join-button">{membership.linkText}</a>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section id="contact" className="contact">
                    <h2>{textContent.contact.heading}</h2>
                    <div className="contact-people">
                        {textContent.contact.people.map((person, index) => (
                            <div key={index} className="contact-person">
                                <h3>{person.title}</h3>
                                <p>{person.name}</p>
                                <p>{person.email}</p>
                                <p>{person.phone}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>{textContent.footer}</p>
            </footer>
        </div>
    );
} 