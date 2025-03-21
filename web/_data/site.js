module.exports = {
  meta: {
    title: "Contex.st: Collect, Research, Analyze, Share",
    description: "Collect, Research, Analyze, Share",
    lang: "en",
    siteUrl: "https://contex.st/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "John Doe",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Collect, Research, Analyze, Share",
    description: "Contex.st is an app that helps people collect and analyze research, media and other data. Easy, permission-less sharing is enabled via the Nostr protocol",
  }
}