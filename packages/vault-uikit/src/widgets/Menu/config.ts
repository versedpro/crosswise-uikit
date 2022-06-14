import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.crosswise.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.crosswise.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "CardIcon",
    icon: "CardIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "ExplorerIcon",
    icon: "ExplorerIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "StatisticIcon",
    icon: "StatisticIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "SettingsIcon",
    icon: "SettingsIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "LotteryIcon",
    icon: "LotteryIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://crosswise.info",
      },
      {
        label: "Tokens",
        href: "https://crosswise.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://crosswise.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://crosswise.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.crosswise.finance",
      },
      {
        label: "Github",
        href: "https://github.com/crosswise",
      },
      {
        label: "Docs",
        href: "https://docs.crosswise.finance",
      },
      {
        label: "Blog",
        href: "https://crosswise.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Announcement",
        href: "https://t.me/crosswise_a",
      },
      {
        label: "English",
        href: "https://t.me/crosswise",
      },
      {
        label: "Arabic",
        href: "https://t.me/crosswisearabic",
      },
      {
        label: "Chinese",
        href: "https://t.me/crosswisechinese",
      },
      {
        label: "Indonesian",
        href: "https://t.me/crosswiseindonesia",
      },
      {
        label: "Russian",
        href: "https://t.me/crosswiserussian",
      },
      {
        label: "Thai",
        href: "https://t.me/crosswisethai",
      },
      {
        Label: "Portugues",
        href: "https://t.me/crosswiseportugues",
      },
      {
        Label: "Deutsch",
        href: "https://t.me/crosswisedeutsch",
      },
      {
        Label: "Indian",
        href: "https://t.me/crosswiseindia",
      },
    ],
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.gg/4BuwxMz24J",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/crosswise/",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/crosswisefi",
  },
  {
    label: "Facebook",
    icon: "FacebookIcon",
    href: "https://www.facebook.com/crosswisefi/",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://crosswise.medium.com/",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
