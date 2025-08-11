const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },

  {
    id: 2,
    url: "#",
    name: "About",
    submenu: [
      {
        id: 1,
        url: "/about",
        name: "About Us",
      },
    ],
  },

  {
    id: 6,
    url: "#",
    name: "Gallery",
    submenu: [
      {
        id: 1,
        url: "/gallery",
        name: "Gallery",
      },
    ],
  },

  {
    id: 7,
    url: "/contact",
    name: "Contact Us",
  },
];

export default links;
