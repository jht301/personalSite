// Content for the multi-project cartridges.

export const GAMES = [
  {
    title: 'Wildcard Ruins',
    tagline: '3D action RPG where your deck is your mana.',
    status: 'In development',
    image: { src: '/projects/wildcard.jpg', alt: 'Wildcard Ruins title screen: a hooded hero with a staff in a village', shape: 'wide' },
    description:
      'A real-time action RPG that runs in the browser. Make a hero, explore an island of overgrown ruins, and fight creatures live while playing spell cards drawn from a deck that doubles as your mana pool.',
    highlights: [
      'Four classes: Sage, Warden, Bloomcaller and Thornblade',
      'Shared-world server so players see each other, plus solo play',
      'Delve: roguelike dives of five generated rooms with pick-one-of-three card drafts',
      'Dungeons with Heroic and Mythic tiers and a 2–4 player raid',
      'Plays on desktop and touch, with guest play before sign-in',
    ],
    stack: ['TypeScript', 'Three.js', 'Vite', 'Node + WebSockets', 'Firebase'],
  },
  {
    title: 'NetBattle Arena',
    tagline: 'Grid-based battler built for one-thumb play.',
    status: 'In development',
    image: { src: '/projects/netbattle.png', alt: 'NetBattle Arena title screen and menu', shape: 'tall' },
    description:
      'A 2D grid battle game with a dual-screen layout: the battlefield on top, touch controls below. Dodge across your side of the grid, fire your buster, and play chips from a 20-chip deck against viruses and bosses.',
    highlights: [
      'Arcade mode: three themed levels of three rounds, looping endlessly',
      'Three bosses, each dropping its own boss chip',
      'Challenge mode with three unlockable characters, ranked S to C, plus a daily challenge',
      'Fourteen chip combos to discover and three deck slots',
      'Every sound effect and music loop is generated in code',
    ],
    stack: ['JavaScript', 'Phaser', 'Web Audio', 'Firebase', 'Cloudflare Workers'],
  },
];

export const TOOLS = [
  {
    title: 'Reviewer Like Me',
    tagline: 'Find the game critics who actually share your taste.',
    status: 'Live',
    url: 'https://reviewerlikeme.com/',
    linkLabel: 'Visit site',
    image: { src: '/projects/reviewerlikeme.jpg', alt: 'Reviewer Like Me home page', shape: 'wide' },
    description:
      'Rate the games you have played and it finds professional critics whose scores line up with yours. Follow the ones who match and get an email when they review something new.',
    highlights: [
      'Matching weighs agreement by confidence, so a tiny perfect sample never ranks first',
      'Rate anonymously and keep your ratings when you sign up',
      'Shareable taste card of your top games and matched critics',
      'Review data syncs daily',
    ],
    stack: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'Celery'],
  },
  {
    title: 'Blank Slate',
    tagline: 'Goals, daily tasks and a journal that play like a game.',
    status: 'In testing',
    description:
      'A mobile app for tracking long-term goals, daily tasks and a daily journal. Streaks, points, levels and achievements keep the momentum going, and everything syncs across devices.',
    highlights: [
      '45+ achievements across seven categories',
      'Ten levels, from Newcomer to Grandmaster',
      'Morning goal reminders and evening journal prompts',
      'A momentum score for every goal',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'GitHub Actions'],
  },
  {
    title: 'Legal Jobs Tracker',
    tagline: 'Daily watch on law-firm hiring.',
    status: 'In production',
    description:
      'A service that checks the career pages of 50 law firms every day, detects new, changed and removed postings, keeps the full history, and emails a report with the changes.',
    highlights: [
      'One scraper per applicant-tracking system, built on a shared factory',
      'Hash-based change detection against stored history',
      'Reports go out twice a day with CSV attachments',
      'Separates attorney roles from staff roles automatically',
    ],
    stack: ['Python', 'Selenium', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Strategy Backtesting Lab',
    tagline: 'Testing day-trading ideas against five years of market data.',
    status: 'Research',
    description:
      'A research harness that runs trading ideas against historical US share prices, with realistic costs and stop-losses, then checks whether they still hold up on years the rules never saw. Research only, not financial advice.',
    highlights: [
      'Five-minute price bars for roughly 4,000 heavily traded US companies',
      'Around 90 signals per company per day',
      'Walk-forward testing on unseen years',
      'Experiments with language models reading the morning headlines',
    ],
    stack: ['Python', 'pandas', 'LightGBM', 'SQLite'],
  },
];

export const WEBSITES = [
  {
    title: 'Bola',
    url: 'https://www.shopbola.com/',
    blurb: 'Protection. Power. Strength. An e-commerce brand offering luxury athletic apparel.',
    image: '/websites/bola.png',
  },
  {
    title: 'Jakkal Games',
    url: 'https://www.jakkal.games/',
    blurb: 'Where Creation is Play. Jakkal lets kids describe an idea, play it instantly, and share it with friends to remix and compete.',
    image: '/websites/jakkal.png',
  },
  {
    title: 'Siena',
    url: 'https://www.sienany.com/',
    blurb: 'An elegant restaurant and bar in New York featuring refined Kosher, Italian-inspired cuisine and a curated dining experience.',
    image: '/websites/siena.png',
  },
  {
    title: 'Darmoni Foundation',
    url: 'https://www.darmonifamilyfoundation.org/',
    blurb: "Honoring Edan Darmoni. A foundation created in loving memory to continue Edan's legacy of kindness and devotion.",
    image: '/websites/darmoni.png',
  },
];
