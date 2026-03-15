// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "API Language", href: "/language" },
      { title: "Support Me", href: "/support" },
      { title: "SDK", href: "/mlbb-sdk" },
    ],
  },
  { 
    title: "API Status",
    href: "/api-status"
  },
  {
    title: "Example Usage",
    href: "/example-usage",
    noLink: true,
    items: [
      {
        title: "GET MLBB Data",
        href: "/get-mlbb-data",
        noLink: true,
        items: [
          { title: "GET Hero List", href: "/get-hero-list" },
          { title: "GET Hero Rank", href: "/get-hero-rank" },
          { title: "GET Hero Position", href: "/get-hero-position" },
          { title: "GET Hero Detail", href: "/get-hero-detail" },
          { title: "GET Hero Detail Stats", href: "/get-hero-detail-stats" },
          { title: "GET Hero Skill Combo", href: "/get-hero-skill-combo" },
          { title: "GET Hero Rate", href: "/get-hero-rate" },
          { title: "GET Hero Relation", href: "/get-hero-relation" },
          { title: "GET Hero Counter", href: "/get-hero-counter" },
          { title: "GET Hero Compatibility", href: "/get-hero-compatibility" }
        ]
      },
      {
        title: "GET Academy Data",
        href: "/get-academy-data",
        noLink: true,
        items: [
          { title: "GET Version", href: "/get-version" },
          { title: "GET Heroes", href: "/get-heroes" },
          { title: "GET Roles", href: "/get-roles" },
          { title: "GET Equipment", href: "/get-equipment" },
          { title: "GET Equipment Details", href: "/get-equipment-details" },
          { title: "GET Spells", href: "/get-spells" },
          { title: "GET Emblems", href: "/get-emblems" },
          { title: "GET Recommended", href: "/get-recommended" },
          { title: "GET Recommended Detail", href: "/get-recommended-detail" },
          { title: "GET Guide", href: "/get-guide" },
          { title: "GET Guide Stats", href: "/get-guide-stats" },
          { title: "GET Guide Lane", href: "/get-guide-lane" },
          { title: "GET Guide Time Win Rate", href: "/get-guide-time-win-rate" },
          { title: "GET Guide Builds", href: "/get-guide-builds" },
          { title: "GET Guide Counters", href: "/get-guide-counters" },
          { title: "GET Guide Teammates", href: "/get-guide-teammates" },
          { title: "GET Guide Trends", href: "/get-guide-trends" },
          { title: "GET Guide Recommended", href: "/get-guide-recommended" },
          { title: "GET Hero Ratings", href: "/get-hero-ratings" },
          { title: "GET Hero Ratings Subject", href: "/get-hero-ratings-subject" }
        ]
      },
      {
        title: "GET MPLID Data",
        href: "/get-mplid-data",
        noLink: true,
        items: [
          { title: "GET MPLID Standings", href: "/get-mplid-standings" },
          { title: "GET MPLID Teams", href: "/get-mplid-teams" },
          { title: "GET MPLID Team Detail", href: "/get-mplid-team-detail" },
          { title: "GET MPLID Transfers", href: "/get-mplid-transfers" },
          { title: "GET MPLID Team Stats", href: "/get-mplid-team-stats" },
          { title: "GET MPLID Player Stats", href: "/get-mplid-player-stats" },
          { title: "GET MPLID Hero Stats", href: "/get-mplid-hero-stats" },
          { title: "GET MPLID Hero Pools", href: "/get-mplid-hero-pools" },
          { title: "GET MPLID Player Pools", href: "/get-mplid-player-pools" },
          { title: "GET MPLID MVP Standings", href: "/get-mplid-mvp-standings" }
        ]
      }
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
