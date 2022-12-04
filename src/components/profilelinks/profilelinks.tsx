import {
  Discord,
  Instagram,
  Telegram,
  Tiktok,
  Reddit,
  Twitter,
  Whatsapp,
} from "../svg/svg";

export const ProfileLinks = ({ links }) => {
  const linksArray = [
    {
      link: "discord",
      element: (
        <button className="hover:bg-[#7289da] px-6 py-2.5 mb-2">
          <Discord />
        </button>
      ),
    },

    {
      link: "instagram",
      element: (
        <button className="hover:bg-[#c13584] px-6 py-2.5 mb-2">
          <Instagram />
        </button>
      ),
    },

    {
      link: "telegram",
      element: (
        <button className="hover:bg-[#0088cc] px-6 py-2.5 mb-2">
          <Telegram />
        </button>
      ),
    },

    {
      link: "tiktok",
      element: (
        <button className="hover:bg-[#6a76ac] px-6 py-2.5 mb-2">
          <Tiktok />
        </button>
      ),
    },

    {
      link: "reddit",
      element: (
        <button className="hover:bg-[#ff4500] px-6 py-2.5 mb-2">
          <Reddit />
        </button>
      ),
    },

    {
      link: "twitter",
      element: (
        <button className="hover:bg-[#1da1f2] px-6 py-2.5 mb-2">
          <Twitter />
        </button>
      ),
    },

    {
      link: "whatsapp",
      element: (
        <button className="hover:bg-[#128c7e] px-6 py-2.5 mb-2">
          <Whatsapp />
        </button>
      ),
    },
  ];

  const renderLinks = () => {
    const res = links.map((e) => {
      let temp = linksArray.find((el) => el.link === e.link)?.element;
      return (
        <a href={e.url} target="_blank">
          {temp}
        </a>
      );
    });
    return res;
  };

  return renderLinks();
};
