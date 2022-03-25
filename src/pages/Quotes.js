import React from 'react';

const Quotes = () => {
  const quotes = [
    {
      quote: 'A mathematician who is not also something of a poet will never be a complete mathematician.',
      speaker: 'Karl Weierstrass, German mathematician',
    },

    {
      quote: 'Mathematics is a language.',
      speaker: 'Josiah Willard Gibbs, American scientist',
    },

    {
      quote: 'Nature is written in mathematical language.',
      speaker: 'Galileo Galilei, Italian astronomer, physicist and engineer',
    },

    {
      quote: 'Go down deep enough into anything and you will find mathematics.',
      speaker: 'Dean Schlicter',
    },

    {
      quote: ' It is clear that the chief end of mathematical study must be to make the students think.',
      speaker: 'Georg Cantor, German mathematician',
    },

    {
      quote: 'Somehow it’s okay for people to chuckle about not being good at math. Yet, if I said “I never learned to read,” they’d say I was an illiterate dolt.',
      speaker: 'Neil deGrasse Tyson, American astrophysicist and author',
    },

    {
      quote: 'Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.',
      speaker: 'Joseph Fourier, French mathematician and physicist',
    },

    {
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      speaker: 'William Paul Thurston, American mathematician',
    },
  ];

  return (
    <div className="quotes">
      <ul className="quotes-Container">
        {quotes.map((q) => (
          <li key={q.id}>
            <p className="quote">
              {q.quote}
            </p>
            <p className="creator">{q.speaker}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Quotes;
