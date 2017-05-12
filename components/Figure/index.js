export default ({ src, children }) => (
  <div>
    <img src={src} />
    {children
      ? <p>
          {children}
        </p>
      : null}
    <style jsx>{`
      div {
        margin: 1.25em 0;
      }
      img {
        display: block;
      }
      p {
        font-size: 0.8rem;
        color: #999;
        text-align: center;
        font-style: oblique;
      }
    `}</style>
  </div>
);
