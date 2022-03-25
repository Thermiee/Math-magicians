import React from 'react';
import monopoly from '../images/monophy.gif';

export default function Home() {
  return (
    <div className="home">
      <img src={monopoly} alt="brain" />
      <div className="home-text">
        <h1>
          Welcome to Math Magicians
        </h1>
        <br />
        <p>
          <span>Why study maths?</span>
          <br />
          Because it&apos;s fun and can prepare you for a variety of
          excellent careers! If you like solving puzzles and figuring
          things out, then a mathematics major may interest you.
          In addition, applications of mathematics are everywhere
          and a strong background in mathematics can help you
          in many different careers.
        </p>
      </div>
    </div>

  );
}
