// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Golden BC",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://github.com/demon-alt",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "work",
      background_url: "src/img/banners/cbg-16.gif",
      categories: [
        {
          name: "other",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "school",
              url: "https://sd71.onlinelearningbc.com/d2l/home",
              icon: "school",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "writing",
          links: [
            {
              name: "docs",
              url: "https://docs.google.com/",
              icon: "file-description",
              icon_color: palette.red,
            },
            {
              name: "office",
              url: "https://www.office.com/?auth=2",
              icon: "brand-office",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "gptzero",
              url: "https://gptzero.me/",
              icon: "zoom-check",
              icon_color: palette.mauve,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brain",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-19.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },

            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "rootme",
              url: "https://www.root-me.org/en/Challenges/",
              icon: "skull",
              icon_color: palette.red,
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/",
              icon: "code-dots",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "neo",
              url: "https://www.whiterabbitneo.com",
              icon: "carrot",
              icon_color: palette.mauve,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brain",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "music",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "9anime",
              url: "https://9animetv.to/",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "zoechip",
              url: "https://www3.zoechip.com",
              icon: "movie",
              icon_color: palette.red,
            }
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
