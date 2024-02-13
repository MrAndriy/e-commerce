export const PRODUCT_CATEGORIES = [
  {
    id: '1',
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg'
      },
      {
        name: 'Bestsellers',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg'
      }
    ]
  },
  {
    id: '2',
    label: 'Icons',
    value: 'Icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        imageSrc: '/nav/icons/picks.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/icons/new.jpg'
      },
      {
        name: 'Bestselling icons',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg'
      }
    ]
  }
];
