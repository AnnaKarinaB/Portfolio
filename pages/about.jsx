import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I have a master's degree in communication science as well as a
              bachelor's degree in theatre, film and media science. In the last
              years I have tried different jobs to find out what my real passion
              is. That's how I ended up in a Bootcamp. Feel free to follow me on
              my journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
