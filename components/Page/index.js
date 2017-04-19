import Link from "next/link";
import ReactGA from "react-ga";

const logPageView = () => {
  // I'm pretty sure this isn't ideal.
  // How do I initialize this once instead of every page mount?
  ReactGA.initialize("UA-81640506-1");

  const page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

class Page extends React.Component {
  componentDidMount() {
    logPageView();
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
