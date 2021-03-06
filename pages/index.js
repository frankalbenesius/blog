import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
  <Page>
    <Head>
      <title>Frank Albenesius</title>
    </Head>

    <div className="wrapper">
      <div className="main">
        <h1>Frank Albenesius</h1>
        <nav>
          <Link prefetch href="/blog">
            <a>Blog</a>
          </Link>
          <Link prefetch href="/projects">
            <a>Projects</a>
          </Link>
          <a target="_blank" href="https://instagram.com/frankalbenesius">
            Instagram
          </a>
          <a target="_blank" href="https://twitter.com/frankalbenesius">
            Twitter
          </a>
          <a target="_blank" href="https://github.com/frankalbenesius">
            Github
          </a>
          <a href="mailto:frankalbenesius@gmail.com">Email</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      h1 {
        font-size: 1em;
        line-height: 1.25;
        margin: 0 0 1.25em 0;
      }
      .main {
        flex: none;
        text-align: center;
      }
      a {
        display: block;
        line-height: 1.25;
      }
    `}</style>
  </Page>
)
