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
    ],
  },
  {
    title: "Example Usage",
    href: "/example-usage",
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
      { title: "GET Hero Compatibility", href: "/get-hero-compatibility" },
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
