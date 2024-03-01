# Cube Academy Developer Task


![image](https://github.com/Ben-Brady/cube-academy-developer-task/assets/64110708/b770bfdd-e34e-43bd-bd36-22fb221edd22)

Started on 18/02/2024

Design Sheet: [https://www.figma.com/file/oawjRK4Aqrss3BgYONNRQT/Pokemon-App?type=design&node-id=0%3A1&mode=design&t=5UOCvHHslYZdA5Fi-1](https://www.figma.com/file/oawjRK4Aqrss3BgYONNRQT/Pokemon-App?type=design&node-id=0%3A1&mode=design&t=5UOCvHHslYZdA5Fi-1)
## Getting Started Guide

In order to run the project, ensure you have node and git installed on your system. Then run the following commands

```bash
git clone https://github.com/Ben-Brady/cube-academy-developer-task
cd cube-academy-developer-task

# NPM
npm install
npm run build
npm run preview

# Yarn
yarn install
yarn build
yarn preview

# Bun
bun install
bun run build
bun run preview
```

Then the website should be hosted on [http://localhost:4173/](http://localhost:4173/)

## Explanation

> If you used any frameworks (JS or CSS) why did you choose them?

For this project I chose to make use of svelte, this was because it's something I'm familiar with and I really enjoyed it's simplicity for a project of this nature. It's incredibly powerful at creating dynamic UI and I thought that would be useful for this project. Additionally, it's scoped CSS meant that I would not need to use any CSS frameworks other than a sass preprocessor.

In order to properly implement the API, I made use of `zod` in order to validate the responses from the API. It provided type safety and validated the schemas provided by the API ensuring that errors in the API responses didn't go unnoticed.

> Did you have any challenges and if so, how did you overcome them?

I ran into a lot of issues with the API, a lot of resources and information required additional requests. This was really how to implement in a web environment where every request added to the page load time.

Additionally I ran into some further problems with the framework I was running, I had some issues with dynamic computing. Specifically, the compared to information wasn't updating when the comparison changed. This was because I was using a normal variable instead of an effect for the comparison info. This meant that it was never recomputed when the input changed, an easy mistake but took me a while to spot them.

> Did you add any extra features?

I added full text search for the pokémon search using levenshtein distance, this made it a lot easy to search for pokémon names since you didn't have to spell them exactly. It was very simple to implement, but it was something I'd never considered before. It was interesting how using the levenshtein distance directly wasn't effective, I had to check if the name had exact match as well otherwise the length of the Pokémon name had a big effect on the the ranking.

I also focused a lot on the look and feel of the site, adding animations when I could as well as hover effects. and ensuring I had a consistent design scheme with standard fonts and colours.

> If you had more time, what else would you implement?

I would have liked to implement further stats display for on the pokemon page. Specifically the evolution chain, which I had prototyped but I didn't have enough to implement.

Additionally, there's a lot of growing problems in the codebase with being over-complicated and hard to understand, especially on the stats componenet, that I would like to go back and refactor

Additionally, if I were to work on this project much longer I would have liked to create a more interesting and consistent design framework. I used a bit of Figma to get an overall feels for the design I wanted, but I didn't have time to create something high quality. It would have been especially nice to create a design language for this project, other than the fonts and colour scheme used. Maybe even a mobile design, since the site is mostly non-functional on mobile right now.

### Considerations

One of the things I chose not do was using a [pokeapi.co library](https://www.npmjs.com/package/pokeapi), this was to demonstrate my ability to implement such an API on my own, since this is intended to be a demonstration of my skills. If I were to do implement this in product, I would make use of such a library or existing solution rather than incurring the cost of creating my own

## Task

Build a simple web UI that interfaces with the [Pokemon API](https://pokeapi.co).

This task is designed to assess how you will go about building a web application, at the very least you must demonstrate your ability to write:

-   Readable and well laid out code
-   JS / HTML and CSS
-   Appropriate documentation (How would another developer get started your code?)

### Feature list

-   Allow the user to view a list of pokemon (extra points for using pagination).
-   Allow the user to search that list of pokemon by the pokemon's name.
-   Allow the user to view a pokemon's details and statistics.
-   Compare two pokemon's statistics together, side-by-side.
-   Allow the user to maintain a list of their favourite Pokemon (extra points for data persistence (e.g. local storage)).
-   Should run on modern web browsers (Chrome, Firefox, Safari, Opera etc).

### Getting Started

-   The following endpoint provides a list of Pokemon: https://pokeapi.co/api/v2/pokemon/
-   You may use any other endpoints and resources provided by the Pokeapi to achieve the feature list.
-   Your solution should demonstrate use of version control (git).
-   You may use any additional JavaScript or CSS frameworks and libraries to achieve your solution.

### Submission

-   The Submission must have version control history (.git directory) - this is essential so we can see how you went about implementing your solution.
-   Can be zipped up and sent to us via email or hosted on GitHub.
-   Please ensure that with your solution you include the following documentation (this can be included as part of a `README.md` or separate document)
    -   A brief "Getting Started guide" on how to open the project locally
    -   If you used any frameworks (JS or CSS) why did you choose them?
    -   Did you have any challenges and if so, how did you overcome them?
    -   Did you add any extra features?
    -   If you had more time, what else would you implement?
