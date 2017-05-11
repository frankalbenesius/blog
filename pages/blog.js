import Head from 'next/head';
import Link from 'next/link';
import Page from '../components/Page';
import { posts } from '../posts';

export default () => (
  <Page>
    <Head>
      <title>Blog</title>
    </Head>
    <div className="posts">
      {posts.map(({ id, date, title }) => (
        <Post id={id} key={id} date={date} title={title} />
      ))}
    </div>
  </Page>
);

const Post = ({ id, date, title }) => (
  <div className="post">
    <span className="date">{date}</span>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
      <a>{title}</a>
    </Link>

    <style jsx>{`
      .post {
        margin-bottom: 0.6rem;
      }
      .date {
        display: inline-block;
        width: 11rem;
        text-align: right;
        margin-right: 2rem;
        color: #999;
      }
      a {
        text-decoration: none;
      }
      @media (max-width: 38rem) {
        .post {
          margin-bottom: 1.5rem;
        }
        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 0.8rem;
          color: #ccc;
          margin-bottom: 0.3rem;
        }
      }
    `}</style>
  </div>
);
