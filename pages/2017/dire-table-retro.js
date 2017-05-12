import Head from 'next/head';
import Link from 'next/link';
import Post from '../../components/Page/Post';
import Figure from '../../components/Figure';
import Date from '../../components/Date';

export default () => (
  <Post>
    <Head><title>Dire Table Retrospective</title></Head>
    <Date>May 12, 2017</Date>
    <h1>Dire Table Retrospective</h1>
    <p>
      <a href="https://table.dire.tools">Dire Table</a>
      {' '}
      is a minimal virtual tabletop application. If you want to read more about why I made the app, I wrote a short
      {' '}
      <Link href="/2017/dire-table">blog post</Link>
      {' '}
      about my motivation. It was made mostly with SVG, React, Redux, and Firebase. Being the largest side project I've ever followed-through on, this project taught me a lot. In those post, I'm going to share the lessons I've learned.
    </p>
    <h2>1. SVG & React are badass together.</h2>
    <p>
      My first instinct when I set out to build the mapping infrastructure of the app was to use HTML Canvas since I had used it on a previous project. For some reason, I had believed that SVG was an outdated technology being replaced by Canvas. It took me a few days of searching for various "React + Canvas" libraries to realize I was going down the wrong path. SVG is dope. And it works beautifully with React due to their composible natures. SVG is just HTML elements, so I was able to create React elements like
      {' '}
      <code>{'<Token />'}</code>
      {' '}
      and
      {' '}
      <code>{'<Area />'}</code>
      {' '}
      that rendered as a function of state.
      Canvas would have likely required me to create a "rendering" layer that knew how to "draw" my components rather then move them independently. This turned out to be a much easier way to be productive with my application.
      <p>
        One thing I don't know, though, is the difference in performance. SVG seemed performant enough for my uses, but perhaps I'm overestimating the processing power of many of my users. If anyone has some insight into this I'd love to hear it.
      </p>
    </p>
    <h2>2. Containers components should be simple.</h2>
    <p>
      Separating your presentation logic from your application logic doesn't give you a free pass to build bloated containers. Several times in the development of my app I had to refactor my component hierarchy as the containers became burdensome.
    </p>
    <p>
      For example, I had mentally organized the parts of my app into 3 parts:
      {' '}
      <code>{'<Map />'}</code>,
      {' '}
      <code>{'<Controls />'}</code>, &
      {' '}
      <code>{'<Chat />'}</code>
      . These distinct parts seemed like reasonable places to build my application logic. Unfortunately, I was letting my mental model of the UI control the code structure. My containers quickly became too large as I tried to handle my data concepts like "areas" and "tokens", and "dragging" in the same
      {' '}
      <code>{'<Map />'}</code>
      {' '}
      container. In the end, all three of those concepts could become their own focussed and loosely coupled containers:
      {' '}
      <code>{'<Areas />'}</code>
      ,
      {' '}
      <code>{'<Tokens />'}</code>
      , &
      {' '}
      <code>{'<Board />'}</code>
      .
    </p>
    <p>
      Furthermore, there's no reason to be afraid of nesting your containers if it makes sense in your app. Having both a
      {' '}
      <code>{'<Tokens />'}</code>
      {' '}
      container and a singular
      {' '}
      <code>{'<Token />'}</code>
      {' '}
      container meant that I could consider operations to single tokens separate from operations to all tokens. This was particularly useful once I began mapping nested Firebase data to individual tokens.
    </p>
    <h2>3. A shared "style constants" module is great for CSS-in-JS.</h2>
    <p>
      Keeping an importable Javascript module of styling constants is a very easy way to maintain a constant aesthetic in your app. Things like importable sizes and colors help kept me sane while adding CSS in so many different places. Try not to use any "magic numbers" in your CSS. Import them from your constants module instead. Even things like "border-radius" and "box-shadow" signatures are great to make importable.
    </p>
    <p>
      One caveat: make sure to keep it simple. I would stick to a single, small array of size values. Like
      {' '}
      <code>[0, 0.5, 1, 2, 4]</code>
      {' '}
      if you're working in
      {' '}
      <code>rem</code>
      s. Brent Jackson has a really great article about
      {' '}
      <a href="http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/">
        styling patterns in React
      </a>
      . Read that, then read all the rest of his content. I even use his
      {' '}
      <a href="https://palx.jxnblk.com/">palette generator</a>
      {' '}
      to create color constants in most of my apps these days.
    </p>
    <h2>4. Server-Side Rendering confuses the crap out of me.</h2>
    <p>
      I've been using the amazing
      {' '}
      <a href="https://github.com/zeit/next.js/">Next.js</a>
      {' '}
      to create most of my applications these days.
    </p>
    <h2>5. Firebase is magical.</h2>
    <p>text</p>
    <h2>6. Build a relationship with your users early.</h2>
    <p>know what you're getting into and who you're making it for</p>
    <h2>7. "Working" is better than "complete".</h2>
    <p>redux unnecessary & feelsgoodman</p>
  </Post>
);
