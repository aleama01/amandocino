export interface ISection {
  name: string,
  image: string,
  description: Array<string>,
}

export const SECTIONS: Array<ISection> = [
  {
    name: 'diary',
    image: '/stories.jpg',
    description: [
      "An archive of all the things I write every now and then to keep track of time and stuff.",
      "You can read the pages of my virtual diary which, unfortunately for my international friends, are all written in italian.",
    ]

  },
  {
    name: 'friends',
    image: '/friends.jpg',
    description: [
      "Everytime I see some friend of mine doing something cool, I get the strong desire to show the world their greatness.",
      "Well, the world most likely will not see this, but maybe a bunch of people will do,",
      "so here's their works and projects."
    ]
  },
  {
    name: 'photos',
    image: '/photos.jpeg',
    description: [
      "Another archive of some of my favourite photos taken in the places I visited in the last years.",
      "Most of them are actually crappy shots of woods or animals, but I will never surrender capturing nature with my phone camera."
    ]
  },
  {
    name: 'projects',
    image: '/projects.JPG',
    description: [
      "Alongside academic work and projects, I tend to do other things related to my passions.",
      "Here's a tiny list that can help you understand what other projects I'm working on or I've already worked on."
    ],
  }
]
