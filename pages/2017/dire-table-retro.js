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
      about my motivation. It was made mostly with SVG, React, Redux, and Firebase. This project ended up being fairly large and I learned quite a bit in the process. The purpose of this post is to share and document some of those lessons. I'm not really an expert in any one of these technologies and you might disagree or see errors in what I'm writing. If so, I would love to hear from you about your insights. With that said, let's get started:
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
    <p>
      I've found that the clearest "code smell" of a bloated container is passing props through one or more intermediary components. Generally speaking, I think container data should only go a single layer deep.
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
      to create most of my applications these days. It offers transpilation, bundling, hot code reloading, server-side rendering, and more right out of the box. It's very similar to
      {' '}
      <a href="https://github.com/facebookincubator/create-react-app">
        create-react-app
      </a>
      {' '}
      in that one of its main goals is to help developers make apps with less upfront concern for configuration.
    </p>
    <p>
      The problem is, I'm starting to realize I need to have a better understand of server-side rendering. I had several problems arise in development that stemmed from this. When using any CSS-in-JS method for your styling, you have to be sure that your styles are being
      {' '}
      <a href="https://github.com/threepointone/glamor/blob/master/docs/server.md">
        hydrated"
      </a>
      {' '}
      on the server rendered pieces in order to avoid a
      {' '}
      <a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content">
        "flash of unstyled content"
      </a>
      . Additionally, Firebase becomes a bit more complicated when you have to consider where your app is being initialized and in what order. I really loved the
      {' '}
      <a href="https://github.com/unfold/react-firebase">react-firebase</a>
      {' '}
      library because I was able to replace my redux containers with Firebase containers very easily. But it was tricky to organize the rendering order of my components in order to avoid Firebase-connected components from attempting to access the data before the database was initialized.
    </p>
    <p>
      The lesson here is that I need to do more reading and tinkering to have a better understanding of what's actually happening here. I could've given up and moved to an environment without server-side rendering, but
      {' '}
      <a href="https://rauchg.com/2014/7-principles-of-rich-web-applications#server-rendered-pages-are-not-optional">
        7 Principles of Rich Web Applications
      </a>
      {' '}
      by Guillermo Rauch has convinced me to study and embrace it.
    </p>
    <h2>5. Firebase is magical.</h2>
    <p>
      For real though: it's awesome. Using Firebase for the first time was like making a website for the first time: it felt magical. Historically, most of my uncertainty or lack of motivation for starting new projects has been a lack of confidence in building backends and database layers. Firebase has single-handedly solved that for me. It's so easy to use and the documentation is great. Try it if you haven't yet.
    </p>
    <h2>6. "Working" is better than "complete".</h2>
    <p>
      The idea that shipping code is more important than writing perfect code is a prominent one in our field, but through this project I experienced it first hand. I thought I was building the minimum viable product as I wrote all my logic with Redux action creators and reducers. I had spent a long time building a clean and commendable virtual tabletop that only worked on a single client machine. But when the time came to add the shared table functionality through Firebase, I realized that I could remove literally 80% of my Redux code. I just didn't need to store that much state locally once it was captured in a realtime database that my components were subscribed to.
    </p>
    <p>
      My point is, I could have avoided a lot of work had I started my application with the database functionality in mind. In retrospect, the real "MVP" of this project would have been a single token moving around on a board shared by all clients. It would have been easy for me to see then that I didn't need to complicate it by maintaining a local state.
    </p>
    <p>
      I was also a lot more motivated to work on my application once I saw it "working". It was so exciting to see the app actually resolving the problem I set out to solve. The next time I start a side-project, I'm going to try and set myself for that feeling as fast as possible, rather than focus too early on implementation details.
    </p>
    <h2>
      7. Knowing your audience should be the top priority.
    </h2>
    <p>
      This last lesson isn't so much about code as it is about releasing a product. Put bluntly, I had assumed that there would be tons of other RPG players with similar gripes about existing products as me. I'm having trouble finding those people. Those that I've shown the app too are interested and impressed with it, but it's mostly a passing curiosity. It'll take some more time and research to confirm this, but it seems that most D&D players are perfectly okay with putting time into their virtual tabletops.
    </p>
    <p>
      That's fine with me. This is only the first tool I've made within the
      {' '}
      <a href="https://dire.tools">dire.tools</a>
      {' '}
      suite and I've learned so much doing it. Perhaps it's audience will grow slowly over time and minor improvements. Either way, I'm going to be a lot more focussed on listening to my potential users the next time I'd like to make a product that people need.
    </p>
  </Post>
);
