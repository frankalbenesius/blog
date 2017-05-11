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
        margin-bottom: 1.25em;
        line-height: 1.25em;
      }
      .date {
        display: inline-block;
        width: 11em;
        text-align: right;
        margin-right: 2em;
        color: #999;
      }
      a {
        text-decoration: none;
        display: inline-block;
      }
      @media (max-width: 38em) {
        .post {
          margin-bottom: 1.5em;
        }
        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 0.8em;
          color: #ccc;
          margin-bottom: 0.3em;
        }
      }
    `}</style>
  </div>
);
