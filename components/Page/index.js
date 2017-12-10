import Link from 'next/link';
import ReactGA from 'react-ga';

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
        <div className="logo">
          <Link prefetch href="/"><a>albenesi.us</a></Link>
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
      </div>
    );
  }
}

export default Page;
