export default ({ children }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        display: inline-block;
        color: #999;
      }
    `}</style>
  </span>
);
