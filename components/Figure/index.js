export default ({ desc, href, children }) => (
  <div>
    {href ? <a href={href} target="_blank">{children}</a> : children}
    {desc &&
      <p>
        {desc}
      </p>}
    <style jsx>{`
      div {
        margin-bottom: 20px;
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
