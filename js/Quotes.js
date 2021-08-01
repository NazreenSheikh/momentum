const Quotes = [
  {
    quote:
      'If it is right, it happens—the main thing is not to hurry. Nothing good gets away.',
    author: 'John Steinbeck',
  },
  {
    quote:
      'You don’t love because: you love despite; not for the virtues, but despite the faults.',
    author: 'William Faulkner',
  },
  {
    quote: 'In love there are two things—bodies and words.',
    author: 'Joyce Carol Oates',
  },
  {
    quote:
      'It doesn’t matter who you are or what you look like, so long as somebody loves you.',
    author: 'Roald Dahl',
  },
  {
    quote:
      'The desire to get married is a basic and primal instinct in women. It’s followed by another basic and primal instinct: the desire to be single again.',
    author: 'Nora Ephron',
  },
  {
    quote:
      'I have learned not to worry about love; but to honor its coming with all my heart.',
    author: 'Alice Walker',
  },
  {
    quote: 'Love is like the wind, you can’t see it but you can feel it.',
    author: 'Nicholas Sparks',
  },
  {
    quote: 'We love the things we love for what they are.',
    author: 'Robert Frost',
  },
  {
    quote: 'Love loves to love love',
    author: ' James Joyce',
  },
  {
    quote:
      'The one thing we can never get enough of is love. And the one thing we never give enough is love.',
    author: 'Henry Miller',
  },
]
const chosenQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
const Cquote = document.querySelector('#Quotes span:first-child')
const Cauthor = document.querySelector('#Quotes span:last-child')

Cquote.innerText = chosenQuote.quote
Cauthor.innerText = `~${chosenQuote.author}`
