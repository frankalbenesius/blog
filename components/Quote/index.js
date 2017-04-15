export default ({ by, children }) => (
  <blockquote>
    <p>
      {children}
      <br />
      {by && `– ${by}`}
    </p>
    <style jsx>{`
      blockquote {
        margin: 40px 0;
        text-align: center;
        // color: #999;
        font-style: oblique;
        font-size: 1.5rem;
      }
      p {
        line-height: 24px;
      }
    `}</style>
  </blockquote>
);
