import Head from 'next/head';
import Image from 'next/image';
import { textContent } from '../lib/content';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Subpage({ subpage }) {
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
                        <li><a href="/">{textContent.navLinks.home}</a></li>
                        <li><a href="/#activities">{textContent.navLinks.activities}</a></li>
                        <li><a href="/#schedule">{textContent.navLinks.schedule}</a></li>
                        <li><a href="/#membership">{textContent.navLinks.membership}</a></li>
                        <li><a href="/#contact">{textContent.navLinks.contact}</a></li>
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
                    <h1>{subpage.heading}</h1>
                    <p>{subpage.description}</p>
                </section>
                <section id="subpage-content" className="subpage-content">
                    <h2>{subpage.subheading}</h2>
                    <div className="subpage-grid">
                        {subpage.content.map((item, index) => (
                            <div key={index} className="subpage-card">
                                <h3>{item.title}</h3>
                                {item.images.map((image, index) => (
                                    <Image src={image.src} alt={image.alt} layout="responsive" width={500} height={300} />
                                ))}
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>{textContent.footer}</p>
            </footer>
            <div>
                <h1>{subpage.heading}</h1>
                {/* Add your subpage content here */}
            </div>
        </div>
    );
    return (
        <div>

            <main>
                <section id="home" className="hero">
                    <h1>{textContent.hero.heading}</h1>
                    <p>{textContent.hero.description}</p>
                    <a href="#membership" className="cta-button">{textContent.hero.cta}</a>
                </section>

                <section id="activities" className="activities">
                    <h2>{textContent.activities.heading}</h2>
                    <div className="activity-grid">
                        {Object.keys(textContent.activities).filter(key => key !== 'heading').map(activityKey => {
                            const activity = textContent.activities[activityKey];
                            return (
                                <div key={activityKey} className="activity-card">
                                    <Image src="https://placehold.co/500x300.png" alt={activity.title} width={500} height={300} />
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section id="schedule" className="schedule">
                    <h2>{textContent.schedule.heading}</h2>
                    <div className="event-list">
                        {/* Add your events here */}
                    </div>
                </section>

                <section id="membership" className="membership">
                    <h2>{textContent.membership.heading}</h2>
                    
                    <div className="membership-options">
                        <div className="membership-card">
                            <h3>{textContent.membership.basic.title}</h3>
                            <p>{textContent.membership.basic.description}</p>
                            <a href={textContent.membership.basic.link} className="join-button">Liity nyt</a>
                        </div>
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

export async function getStaticPaths() {
    const paths = Object.keys(textContent.subpages).map(subpageKey => ({
        params: { subpageKey }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const subpage = textContent.subpages[params.subpageKey];
    
    return {
        props: {
            subpage
        }
    };
} 