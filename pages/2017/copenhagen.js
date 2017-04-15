import Head from "next/head";
import Post from "../../components/Page/Post";
import Figure from "../../components/Figure";
import Quote from "../../components/Quote";

export default () => (
  <Post>
    <Head><title>Copenhagen</title></Head>
    <h1>Copenhagen</h1>
    <Figure desc="The canal area of Nyhavn was my favorite place to read while waiting for the city to wake up, which wasn't until around 10 each morning.">
      <img src="/static/img/cph/nyhavn.jpg" />
    </Figure>
    <p>
      I have just returned from a 5-night solo adventure to Copenhagen. I'd like to write about this trip for two reasons. The first is to just document it for myself. This vacation happened at a notable time in life. I recently left my job to start a new life with a startup in southern California. But the night before my belongings were to be picked up by the movers, I got a call from my new employer telling me they had lost their funding and had to rescind the offer. I was left in a bit of a pickle the turned my trip from one of celebration to one of contemplation. I expect that this is a time of my life I will frequently look back on, which makes documenting this trip a bit more important to me.
    </p>
    <p>
      Secondly, I'd like to try and help other travelers plan their Copenhagen trips. It felt like a lot of the information about the city was spread thin across the internet. I had already booked the flight in a moment of spontaneity, so it felt right to forego the preplanning and "winging it" upon arrival. While I'm happy with that decision, my experiences may save other travelers some time and energy with their planning.
    </p>
    <p>
      So let's start at the beginning. I managed to score a round-trip flight from St. Louis to Copenhagen for $460 through
      {" "}
      <a target="_blank" href="flights.google.com">Google Flights</a>
      . I'm not totally sure how that great of a deal happened. I
      {" "}
      <i>can</i>
      {" "}
      tell you that for at least a day or so in December of 2016, flights for one-week trips to Europe in April were very, very cheap. Another friend of mine purchased a similar deal in the same time frame to Austria. So my best advice here is to frequently check for deals while maintaining a flexible schedule. Good luck.
    </p>
    <p>
      For boarding, I stayed in a
      {" "}
      <a target="_blank" href="https://www.airbnb.com/rooms/15060832">
        really great airbnb with an amazing host
      </a>
      . It was located in the center of Copenhagen which made walking to everything super easy. I walked so much, though, that I don't think you should shy away from deals in other parts of the city. Copenhagen is very bike-friendly, too. There are free bike shares around the city along with dedicated lanes everywhere you want to go. I didn't bike much, though, because the lanes were pretty fast and I didn't want to stop traffic when I looked at my phone for directions. You may be more comfident than me.
    </p>
    <Figure desc="The morning view from my airbnb. I love screenless windows.">
      <img src="/static/img/cph/window.jpg" />
    </Figure>
    <h3>Day 1: Friday</h3>
    <p>
      I left St. Louis at 11:36AM Thursday and landed in Copenhagen at 12:50PM on Friday (i.e. the future). After two layovers and a red-eye flight, I was not in my mental prime. I went to the ATM to withdraw money for the trip and accidentally withdrew 10 times more than I thought I was withdrawing. The ATM bamboozled me. It offered between 2 and 6 thousand Danish krones (DKK). The exchange rate is (roughly) 1USD to 7DKK, but I didn't consider hard enough before smashing the 5,000DKK button. I realized pretty quickly that I had just withdrawn over $700 USD when I had intended to withdraw closer to $70. I just stowed most of that money and used the cash for the rest of the trip, so it turned out fine. I'll be heading to a bank here in the US to deposit the remaining money.
    </p>
    <p>
      You might be saying, "Frank... why don't you just use your credit card everywhere? No one uses cash in Europe." You make a great point. And if you have a credit card with a low or nonexistant international fee (like my Amazon Prime card) you should definitely use that. But I realized far too late that I didn't know the pin to my credit card. You see, in Europe, businesses require you to use "chip & pin". We're starting to get the "chip" portion in the U.S. but no one has asked me for a pin yet here. Anyway, request your pin from your bank early if you plan to use your credit card while overseas.
    </p>
    <Quote>
      PROTIP #1: Know how money works.
    </Quote>
    <p>
      After the entire airport laughed at me, I got on the metro and headed to the station my airbnb host has directed me to. The public transit in Denmark is both confusing & great. It works on a weird "zone" system, but you can largely ignore that by either purchasing tickets to an entered destination or by grabbing a time-based pass when you know you'll be using the the transit a lot (like when traveling outside the city). This is also the point where I'd recommend you look into the
      {" "}
      <a href="http://www.copenhagencard.com/whats-included" target="_blank">
        Copenhagen Card
      </a>
      . I didn't realize this was a thing until a few days into my trip but it covers all public transit costs as well as a lot of the tourist destinations I ended up visiting. It might be a good purchase for you.
    </p>
    <p>
      After meeting with my host and dropping my stuff off, I had only one goal: stay the heck awake until night time so jetlag doesn't ruin my trip. I hadn't yet planned any sightseeing but I knew I needed some physical activity, so I decided to take a stroll along the nearby waterfront and visit some of the more obvious sights on Google Maps.
    </p>
    <Figure desc="The Little Mermaid statue is one of those landmarks that is only famous because it is famous. Much like a Kardashian. Also, this viking guy was really nice.">
      <img src="/static/img/cph/mermaid.jpg" />
    </Figure>
    <Figure
      desc={
        'The barracks in Kastellet ("The Citadel"), a preserved star fortress along the coast of Copenhagen. The signs say "No Bikes" but these people are renegades.'
      }
    >
      <img src="/static/img/cph/kastellet.jpg" />
    </Figure>
    <Figure
      desc={
        "The Danish Museum of Art & Design was a pleasant surprise. They had some really neat exhibits and an even better restroom."
      }
    >
      <img src="/static/img/cph/chair1.jpg" />
    </Figure>
    <Figure
      desc={
        "This chair exhibit was particularly dope. The ones at the top were kind of difficult to sit on, though. No one was willing to help me up."
      }
    >
      <img src="/static/img/cph/chair2.jpg" />
    </Figure>
  </Post>
);
