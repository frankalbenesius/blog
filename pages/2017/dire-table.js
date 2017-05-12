import Head from 'next/head';
import Link from 'next/link';
import Post from '../../components/Page/Post';
import Figure from '../../components/Figure';
import Date from '../../components/Date';

export default () => (
  <Post>
    <Head><title>I Made a Thing: Dire Table</title></Head>
    <Date>May 11, 2017</Date>
    <h1>I Made a Thing: Dire Table</h1>
    <p>
      Late last year, I began to pursue a new side project. The urge to work on a side-project has been with me since graduation in 2013. Unfortunately, I've found it really hard to stay motivated with my ideas. I think this is something that a lot of new developers struggle with. Even though our passion for building things brings us to the field, the comfort of a well-paying job and a regular routine often means that our itch for creativity goes by the wayside.
    </p>
    <p>
      Fortunately, I was recently given an unexpected opportunity for personal focus. The position that I had accepted in March fell through due to a sudden loss of funding. I had left my previous employer, terminated my lease, and thrown a going-away party. My transition into a new life across the country was halted halfway through. I needed a new plan.
    </p>
    <p>
      Rather than start another round of applications right away, I decided to make the most of my unexpected free time. I committed to working solely on my most exciting side-project idea: a minimalistic virtual tabletop. It took about three weeks of planning and programming to "complete", but I did and I'm pumped about it. You can find it here:
      {' '}
      <a href="https://table.dire.tools">Dire Table</a>
      .
    </p>
    <p>
      I'm a frequent Dungeons & Dragons player and on occasion I play online with my friends. To play a tabletop role-playing game online, you have to choose one of a few existing virtual tabletop applications, each with their own benefits and caveats. The most popular of these is a web app called
      {' '}
      <a href="https://roll20.net/">Roll20</a>
      . It's honestly a great app and has really enabled a ton of players, but I was never personally satisfied with the commitment to configuration that Roll20 asks of its users.
    </p>
    <Figure src="/static/img/dire/before.jpg">
      My first sketch of the RPG table was drawn in late 2016.
    </Figure>
    <p>
      With Dire Table, I have attempted to address those issues. I wanted to create something that required zero configuration or user preparation. A user can go to the site, immediately share their assigned instance's URL with their friends and get playing. The tools that allow a game leader to create their map are designed with efficiency in mind, trading detail for speed and simplicity. There are no user accounts, and local storage is used to remember who the players are on page reloads. If you're curious, it's built primarily with SVG, React, Redux, and Firebase.
    </p>
    <Figure src="/static/img/dire/after.png">
      How Dire Table looks today (5/11). Pretty close to the sketch!
    </Figure>
    <p>
      All-in-all, I'm really happy with how this project turned out. I believe I've accomplished my goals and
      {' '}
      <Link href="/2017/dire-table-retro">learned a lot</Link>
      {' '}
      doing it. While I don't think this will replace the existing virtual tabletops anytime soon, perhaps it will find its niche in players with priorities similar to mine. I made Dire Table a subdomain of
      {' '}
      <a href="https://dire.table">dire.tools</a>
      {' '}
      because I plan to make at least a couple more digital tools for the same audience. Dire Tools would be a fun brand to maintain and promote in the future.
    </p>
  </Post>
);
