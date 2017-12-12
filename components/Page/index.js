import Link from 'next/link'
import Head from 'next/head'
import ReactGA from 'react-ga'

class Page extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-81640506-1')
      window.GA_INITIALIZED = true
    }
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  render() {
    return (
      <div className="main">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/img/favicon.ico" />
        </Head>
        <div className="logo">
          <Link prefetch href="/">
            <a>albenesi.us</a>
          </Link>
        </div>

        {this.props.children}

        {/* Page styles */}
        <style jsx>{`
          .main {
            padding: 25px 50px;
          }
          .logo {
            padding-bottom: 50px;
          }
          a {
            text-decoration: none;
          }
          @media (max-width: 500px) {
            .main {
              padding: 25px 15px;
            }
            .logo {
              padding-bottom: 20px;
            }
          }
        `}</style>
        {/* https://palx.jxnblk.com/e33d27 */}
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font: 1rem Menlo, Monaco, monospace, serif;
            color: #311;
          }
          img {
            width: 100%;
            max-width: 100%;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 1em;
            margin: 0;
            font-weight: normal;
            line-height: 1.25;
            margin-bottom: 1.25rem;
          }
          h1 {
            font-size: 1.25em;
            line-height: 1;
            margin: 1em 0 2em;
          }
          h2 {
            margin-top: 2.5em;
            font-weight: bold;
          }
          a {
            color: #e33d27;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            text-decoration: none;
          }
          a:hover {
            color: #fff;
            background: #e33d27;
            text-decoration: none;
          }
          iframe {
            width: 100%;
            border: 0;
          }
          p {
            font-size: 1em;
            line-height: 1.25em;
            margin: 1.25em 0;
          }
          code {
            font: 1rem Menlo, Monaco, monospace, serif;
            display: inline-block;
            line-height: 1.25;
            color: #2364cc;
          }
        `}</style>
      </div>
    )
  }
}

export default Page
