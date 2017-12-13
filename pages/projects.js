import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
  <Page>
    <Head>
      <title>Projects</title>
    </Head>
    <div className="project">
      <a target="_blank" href="https://spinner.albenesi.us">
        Spinner
      </a>
      <p>
        A simple spinner created for a teacher friend of mine who wanted a way
        to randomly choose students without leaving any students unpicked for
        too long.
      </p>
    </div>
    <div className="project">
      <a target="_blank" href="https://spinner.albenesi.us">
        Snake
      </a>
      <p>A game of snake built with vanilla JavaScript!</p>
    </div>
    <div className="project">
      <a target="_blank" href="https://table.albenesi.us">
        Dire Table
      </a>
      <p>A minimalistic virtual tabletop for tabletop role-playing games.</p>
    </div>
    <div className="project">
      <a target="_blank" href="https://spotify.albenesi.us">
        Spotify Top Tracks
      </a>
      <p>A small tool to review your top-played Spotify tracks.</p>
    </div>
    <div className="project">
      <Link prefetch href="/bagels">
        <a>Homemade Bagels</a>
      </Link>
      <p>They're delicious.</p>
    </div>
    <div className="project">
      <a target="_blank" href="https://spotify.albenesi.us">
        popogigio.com
      </a>
      <p>Because the internet still needs weird stuff.</p>
    </div>

    <style jsx>{`
      .project {
        padding: 1rem;
        text-align: center;
        max-width: 30em;
        margin: 0 auto;
      }
      .project a {
        display: inline-block;
        line-height: 1.25em;
      }
    `}</style>
  </Page>
)
