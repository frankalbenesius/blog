import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {/* global styles */}
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
  </div>
);
