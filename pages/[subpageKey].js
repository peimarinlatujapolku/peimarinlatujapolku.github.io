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
                                    <Image src={image.src} alt={image.alt} layout="intrinsic" width={500} height={300} />
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