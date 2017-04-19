import Head from "next/head";
import Link from "next/link";
import Page from "../components/Page";

export default () => (
  <Page>
    <Head>
      <title>Frank Albenesius</title>
    </Head>

    <div className="wrapper">
      <div className="main">
        <h1>Frank Albenesius</h1>
        <nav>
          <Link prefetch href="/blog"><a>Blog</a></Link>
          <a target="_blank" href="https://instagram.com/frankalbenesius">
            Instagram
          </a>
          <a target="_blank" href="https://twitter.com/frankalbenesius">
            Twitter
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
      .main {
        flex: none;
        text-align: center;
      }
      h1 {
        font-size: 1rem;
        font-weight: normal;
      }
      nav {
        margin-top: 1.5rem;
      }
      a {
        display: inline-block;
        margin: 0 1rem;
      }
    `}</style>
  </Page>
);
