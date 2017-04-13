import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font: 16px Menlo, Monaco, monospace, serif;
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
    `}</style>
  </div>
)
