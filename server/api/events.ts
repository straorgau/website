import { parseAtomFeed } from "feedsmith";

// This simple parser is required to be done server-side, as TidyHQ has CORS enabled,
// effectively rendering client-side Atom parsing impossible.
export default defineEventHandler(async (event) => {
  const res = await fetch("https://auscycling.tidyhq.com/public/schedule/events.atom");
  const feedText = await res.text();

  const feed = parseAtomFeed(feedText);

  if (feed.entries) return feed.entries
  else return [];
});