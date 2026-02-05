interface NavLink {
  to: string;
  label: string;
  target?: '_blank' | '_self';
  isAnchor?: boolean;
}

export const navLinks: NavLink[] = [
  { to: '/', label: 'О нас' },
  { to: '/kids-club', label: 'Детский клуб' },
  { to: '/school', label: 'Школа' },
  { to: '/after-school', label: 'Продлёнка' },
  { to: '/camp', label: 'Лагерь' },
  { to: '/#contacts', label: 'Контакты', isAnchor: true },
];
