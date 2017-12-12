import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Post from '../../components/Page/Post'
import Figure from '../../components/Figure'
import Date from '../../components/Date'

export default () => (
  <Post>
    <Head>
      <title>Spinner Retrospective</title>
    </Head>
    <Date>Dec 11, 2017</Date>
    <h1>Spinner Retrospective</h1>
    <pre>{`
- I made a thing: Spinner. Short description.
  - constant delivery, fun to have real feedback loop
- Discovery:
  - a bit from zach
    - maybe video? or images?
  - my own requirements
- Planning:
  - can we make this more elegant than existing solution?
  - can we make this without lying about the numbers?
  - what will make this engaging for students?
- Implementing:
  - steps I took:
    - check github commit log
  - interesting problems:
    - svg animations, interpolating
    - svg transitions, <g> sizing
    - rendering semi circles
    - spinning a spinner
    - pausing between phases of animation
    - simplifying application state
    - choosing the right colors
    - signifying interactability
    - responsiveness on tvs & phones
- Conclusion:
  - neat experience to have a real feedback loop
  - a real consumer, real users with opinions and joy
  - great learning experience
    `}</pre>
  </Post>
)
