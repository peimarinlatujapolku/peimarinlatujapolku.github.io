import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Adventure Sports Club</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <header>
                <nav>
                    <div className="logo">Adventure Sports Club</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#activities">Activities</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#membership">Membership</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="home" className="hero">
                    <h1>Welcome to Adventure Sports Club</h1>
                    <p>Join us for exciting outdoor activities and sports adventures!</p>
                    <a href="#membership" className="cta-button">Become a Member</a>
                </section>

                <section id="activities" className="activities">
                    <h2>Our Activities</h2>
                    <div className="activity-grid">
                        <div className="activity-card">
                            <Image src="https://placehold.co/500x300.png" alt="Hiking" width={500} height={300} />
                            <h3>Hiking</h3>
                            <p>Weekly group hikes for all skill levels</p>
                        </div>
                        <div className="activity-card">
                            <Image src="https://placehold.co/500x300.png" alt="Cycling" width={500} height={300} />
                            <h3>Cycling</h3>
                            <p>Road and mountain biking adventures</p>
                        </div>
                        <div className="activity-card">
                            <Image src="https://placehold.co/500x300.png" alt="Climbing" width={500} height={300} />
                            <h3>Rock Climbing</h3>
                            <p>Indoor and outdoor climbing sessions</p>
                        </div>
                    </div>
                </section>

                <section id="schedule" className="schedule">
                    <h2>Upcoming Events</h2>
                    <div className="event-list">
                        {/* Add your events here */}
                    </div>
                </section>

                <section id="membership" className="membership">
                    <h2>Join Our Community</h2>
                    <div className="membership-options">
                        <div className="membership-card">
                            <h3>Basic Membership</h3>
                            <p>Access to weekly activities</p>
                            <p className="price">$30/month</p>
                            <button className="join-button">Join Now</button>
                        </div>
                        <div className="membership-card">
                            <h3>Premium Membership</h3>
                            <p>Access to all activities + equipment rental</p>
                            <p className="price">$50/month</p>
                            <button className="join-button">Join Now</button>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Adventure Sports Club. All rights reserved.</p>
            </footer>
        </div>
    );
} 