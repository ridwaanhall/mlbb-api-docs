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
      { title: "Sponsor Me", href: "/sponsor" },
    ],
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
