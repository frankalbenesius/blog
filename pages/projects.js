import Head from 'next/head';
import Link from 'next/link';
import Page from '../components/Page';

export default () => (
  <Page>
    <Head>
      <title>Projects</title>
    </Head>
    <div className="project">
      <a target="_blank" href="https://table.dire.tools">Dire Table</a>
      <p>
        A minimalistic virtual tabletop for tabletop role-playing games.
      </p>
    </div>
    <div className="project">
      <a target="_blank" href="https://spotify.albenesi.us">
        Spotify Top Tracks
      </a>
      <p>
        A small tool to review your top-played Spotify tracks.
      </p>
    </div>
    <div className="project">
      <Link prefetch href="/bagels"><a>Homemade Bagels</a></Link>
      <p>
        They're delicious.
      </p>
    </div>

    <style jsx>{`
      .project {
        padding: 1rem;
        text-align: center;
        margin-bottom: 1rem;
      }
      .project a {
        display: inline-block;
        line-height: 1.25em;
      }
    `}</style>
  </Page>
);
