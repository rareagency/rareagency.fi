export const items = [
  {
    url: '/',
    text: 'Me'
  },
  {
    url: '/training',
    text: 'Workshopit'
  },
  {
    url: '/careers',
    text: 'Työpaikat'
  },
  {
    text: 'Ota yhteyttä',
    url: '#contact',
    onClick: (event?: React.MouseEvent) => {
      const contact = document.getElementById('contact');

      if (contact && event) {
        event.preventDefault();
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
];
