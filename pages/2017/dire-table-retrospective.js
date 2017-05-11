import Head from 'next/head';
import Post from '../../components/Page/Post';
import Figure from '../../components/Figure';

export default () => (
  <Post>
    <Head><title>Copenhagen in Five Days</title></Head>
    <h1>Dire Table Retrospective</h1>
    <p>
      Late last year, I began to pursue a new project:
    </p>
    <h2>Firebase is awesome.</h2>
    <p>text</p>
    <h2>Header</h2>
    <p>text</p>
    <h2>h</h2>
    <p>text</p>
    <h2>h</h2>
    <p>text</p>
    <h2>h</h2>
    <p>text</p>
    <h2>h</h2>
    <p>text</p>
    <style jsx>{`
      h2 {
        font-size: 1em;
      }
    `}</style>
  </Post>
);

/*
Intro - new project. First thing I've "finished" on my own.

Lessons:
- Firebase is awesome.
- Don't architect too early
  - redux was super unnecessary
- Keep containers small.
  - passing props thru more than once, code smell
- keep sharing styles, but keep it simple.
- SVG and React pair perfectly.
- If you want it to be used by other people, make sure they want it.
- Working > finished. Feels great.
*/
