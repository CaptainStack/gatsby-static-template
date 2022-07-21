import TwitterLogo from '../images/twitter.svg'
import GitHubLogo from '../images/github.svg'
import EmailLogo from '../images/email.svg'

export const HeaderLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
    sublinks: [
      {
        text: "Contact",
        url: "/about/contact",
      },
      {
        text: "FAQ",
        url: "/about/faq",
      },
    ],
  },
  {
    text: "Blog",
    url: "https://en.wikipedia.org/wiki/Blog",
  },
];

export const AboutSidebarLinks = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Contact",
    url: "/about/contact",
  },
  {
    text: "FAQ",
    url: "/about/faq",
  },
];

export const FooterSocialLinks = [
  {
    text: "Twitter",
    url: "https://twitter.com/GatsbyJS",
    logo: TwitterLogo,
    title: 'Follow us on Twitter',
  },
  {
    text: "GitHub",
    url: "https://github.com/CaptainStack/gatsby-static-template",
    logo: GitHubLogo,
    title: 'View source on GitHub',
  },
  {
    text: "Email",
    url: "mailto:contact@email.com",
    logo: EmailLogo,
    title: 'Send us an email',
  },
];
