<!-- @format -->

# Schemes.SG - Social Welfare Scheme Aggregator

[Schemes.sg](https://schemes.sg/) allows aid workers to quickly find relevant assistance schemes. It provides a directory of social assistance schemes offered by govt agencies, self-help groups, VWOs, and more (the directory is kept comprehensive and updated by volunteers).

SchemesSG has an active and growing user base among aid workers in Singapore.

Project board is [here](https://github.com/orgs/bettersg/projects/3).

Demo Video of the old site(V2) is [here](https://www.youtube.com/watch?v=xl2cw5GBNGg).

## Key Features:

**Schemes Bank**

Full repository of known aid schemes and help with helpful description.

**Schemes Pal**

AI/NLP based search engine that fetches as much as possible relevant and useful results for the inquiries of the social workers (SW) using the app. The search engine takes user's input from the search bar and conducts a fuzzy search of the schemes in the Bank using NLP, and returns schemes above confidence threshold. User can adjust the confidence threshold based on the scope they require

**Schemes Case**

A 'concierge service' where the Schemes.sg team selects recurrent SchemesPal submissions, and/or collect specific requests via the dedicated Schemes Case form to follow up for further research.

The team then identifies the schemes from the repository which may help, and can also conduct further research to find out what areas or gaps the Bank failed to cover.

After anonymising, the schemes for this profile are publish and the Bank is updated.

## Technologies

**Frontend:**

- NEXT.Js
- React
- Material UI
- JavaScript
- Mocha
- Chai

**Backend:**

- GENSIM
- spaCy
- Python
- Google Data Studio
- Prismic CMS

## Schemes SG Team

- Tan Weilie - Product Lead, Engineer
- Hong Chiong - Front End Engineer
- Joel - Backend and Deployment Engineer

* Quintus - ML Engineer
* Catrina - Comms and Outreach
* Karn - UX Research and Content
* Kenneth - Schemes Research I/C
* Karthig - Schemes Research I/C 2

## Other Contributors

- Ray Ho - Frontend work to complete porting over to NEXT.Js React and Material UI

## NEXT.Js Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
