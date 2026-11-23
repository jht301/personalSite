// Every cartridge on the shelf. `color` tints the plastic and the room's
// ambient light; `accent` is the lighter shade used for text on the dark LCD.
export const CARTRIDGES = [
  { id: 'about', title: 'About Jack', icon: 'about', color: '#E63946', accent: '#FF7A84' },
  { id: 'jackal', title: 'Jackal Games', icon: 'jackal', color: '#059669', accent: '#34D399' },
  { id: 'games', title: 'Game Lab', icon: 'games', color: '#E8760C', accent: '#FBBF24' },
  { id: 'lab', title: 'Apps & Tools', icon: 'lab', color: '#D6246E', accent: '#F78FB8' },
  { id: 'projects', title: 'Websites', icon: 'projects', color: '#0E7FC2', accent: '#7DD3FC' },
];

export const CONTACT_CARTRIDGE = {
  id: 'contact',
  title: 'Contact',
  icon: 'contact',
  color: '#2563EB',
  accent: '#93C5FD',
};

export const SECRET_CARTRIDGE = {
  id: 'secret',
  title: '???',
  icon: 'star',
  color: '#16A34A',
  accent: '#4ADE80',
};

export const DEFAULT_AMBIENT = '#E63946';
