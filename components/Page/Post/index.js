import Page from '../';

export default ({ children }) => (
  <Page>
    <article>
      {children}
    </article>
    <style jsx>{`
      article {
        max-width: 650px;
        margin: auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
  </Page>
);
