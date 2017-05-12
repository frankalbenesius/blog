import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

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
           font: 1rem Menlo, Monaco, monospace, serif;
           color: #311;
         }
         img {
           max-width: 100%;
         }
         h1, h2, h3, h4, h5, h6 {
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
      </html>
    );
  }
}
