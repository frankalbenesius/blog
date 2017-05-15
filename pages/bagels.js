import Head from 'next/head';
import Page from '../components/Page';

export default () => (
  <Page>
    <Head>
      <title>Delicious Bagels</title>
    </Head>
    <div>
      <h1>Bagels!</h1>
      <img src="/static/img/bagels.jpg" />
      <p>
        If you'd like to make your own, I recommend
        {' '}
        <a href="http://www.epicurious.com/recipes/food/views/bagels-366757">
          this recipe
        </a>
        .
      </p>

      <style jsx>{`
        img {
          max-width: 50em;
          display: block;
          margin: 0 auto;
        }
        div {
          text-align: center;
        }
    `}</style>
    </div>
  </Page>
);
