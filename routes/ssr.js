async function routes(fastify, options) {
  fastify.get("/portfolio.html", async (request, reply) => {
    reply.view("/public/portfolio.ejs", {
      desc: "Ini description",
      categories: [
        { "data-filter": ".filter-app", name: "App" },
        { "data-filter": ".filter-card", name: "Card" },
        { "data-filter": ".filter-web", name: "Web" },
      ],
      items: [
        {
          filter: "filter-app",
          imgSrc: "assets/img/portfolio/portfolio-1.jpg",
          title: "App 1",
          summary: "App",
          galleryHref: "assets/img/portfolio/portfolio-1.jpg",
          galleryTitle: "App 1",
        },
        {
          filter: "filter-web",
          imgSrc: "assets/img/portfolio/portfolio-2.jpg",
          title: "Web 3",
          summary: "Web",
          galleryHref: "assets/img/portfolio/portfolio-2.jpg",
          galleryTitle: "Web 3",
        },
        {
          filter: "filter-app",
          imgSrc: "assets/img/portfolio/portfolio-3.jpg",
          title: "App 2",
          summary: "App",
          galleryHref: "assets/img/portfolio/portfolio-3.jpg",
          galleryTitle: "App 2",
        },
        {
          filter: "filter-card",
          imgSrc: "assets/img/portfolio/portfolio-4.jpg",
          title: "Card 2",
          summary: "Card",
          galleryHref: "assets/img/portfolio/portfolio-4.jpg",
          galleryTitle: "Card 2",
        },
        {
          filter: "filter-web",
          imgSrc: "assets/img/portfolio/portfolio-5.jpg",
          title: "Web 2",
          summary: "Web",
          galleryHref: "assets/img/portfolio/portfolio-5.jpg",
          galleryTitle: "Web 2",
        },
        {
          filter: "filter-app",
          imgSrc: "assets/img/portfolio/portfolio-6.jpg",
          title: "App 3",
          summary: "App",
          galleryHref: "assets/img/portfolio/portfolio-6.jpg",
          galleryTitle: "App 3",
        },
        {
          filter: "filter-card",
          imgSrc: "assets/img/portfolio/portfolio-7.jpg",
          title: "Card 1",
          summary: "Card",
          galleryHref: "assets/img/portfolio/portfolio-7.jpg",
          galleryTitle: "Card 1",
        },
        {
          filter: "filter-card",
          imgSrc: "assets/img/portfolio/portfolio-8.jpg",
          title: "Card 3",
          summary: "Card",
          galleryHref: "assets/img/portfolio/portfolio-8.jpg",
          galleryTitle: "Card 3",
        },
        {
          filter: "filter-web",
          imgSrc: "assets/img/portfolio/portfolio-9.jpg",
          title: "Web 3",
          summary: "Web",
          galleryHref: "assets/img/portfolio/portfolio-9.jpg",
          galleryTitle: "Web 3",
        },
      ],
    });
  });
}

module.exports = routes;