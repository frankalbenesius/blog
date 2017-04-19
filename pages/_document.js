import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>

        {/* https://palx.jxnblk.com/e33d27 */}
        <style jsx global>{`
         * {
           box-sizing: border-box;
         }
         body {
           margin: 0;
           font: 16px Menlo, Monaco, monospace, serif;
         }
         img {
           max-width: 100%;
         }
         a {
           color: #e33d27;
           -webkit-tap-highlight-color: rgba(0,0,0,0);
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
       `}</style>
      </html>
    );
  }
}
