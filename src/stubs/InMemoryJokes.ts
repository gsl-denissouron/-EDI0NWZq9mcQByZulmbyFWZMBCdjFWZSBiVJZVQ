import { Joke } from '../domain/entities/Joke';
import { JokeRepository } from '../domain/repositories/JokeRepository';

let allJokes: Joke[] = [
  {
    type: 'general',
    setup: 'Why did the chicken get a penalty?',
    punchline: 'For fowl play.',
    id: 323,
  },
  {
    type: 'general',
    setup: 'What do I look like?',
    punchline: 'A JOKE MACHINE!?',
    id: 190,
  },
  {
    type: 'general',
    setup: 'Why did Dracula lie in the wrong coffin?',
    punchline: 'He made a grave mistake.',
    id: 317,
  },
  {
    type: 'general',
    setup: 'What did the duck say when he bought lipstick?',
    punchline: 'Put it on my bill',
    id: 30,
  },
  {
    type: 'programming',
    setup: "Why dot net developers don't wear glasses?",
    punchline: 'Because they see sharp.',
    id: 383,
  },
  {
    type: 'general',
    setup: "What's the difference between a seal and a sea lion?",
    punchline: 'An ion! ',
    id: 277,
  },
  {
    type: 'general',
    setup:
      "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
    punchline: 'Yep, people are just dying to get in there',
    id: 51,
  },
  {
    type: 'general',
    setup: 'What did the dog say to the two trees?',
    punchline: 'Bark bark.',
    id: 172,
  },
  {
    type: 'general',
    setup: "I couldn't get a reservation at the library...",
    punchline: 'They were fully booked.',
    id: 71,
  },
  {
    type: 'general',
    setup: 'If you boil a clown...',
    punchline: 'Do you get a laughing stock?',
    id: 45,
  },
];

export const getJokes: JokeRepository['getJokes'] = async () => allJokes;

export const setJokes = (jokes: Joke[]) => {
  allJokes = jokes;
};
