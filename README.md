# Nuxt 3 UI Thing Starter

An opinionated Nuxt 3 starter template with components built with [UI Thing](https://ui-thing.behonbaker.com/getting-started/introduction). This is my personal port of the shadcn/ui library.

Feel free to make changes and delete what you don't need.

## Demo

The starter is deployed on Netlify [here](https://ui-thing-starter.behonbaker.com/)

## Getting Started

Clone the repo

```bash
npx --yes giget@latest gh:BayBreezy/nuxt-ui-thing-starter my-nuxt-app --install
```

Install the dependencies

```bash
cd my-nuxt-app &&  npm install
```

Start the dev server

```bash
npm run dev
```

---

<br/>

![Cover](/public/ui-thing-social.png)

## Major update

So on Jan 11, 2024, I remembered that I created this repo. I was going through github and saw where someone gave it a star.... I was like.. Hold up.. when did I create this? Then I realized it was created while I was experimenting with the Radix-Vue package (my very first attempt to replicate shadcn/ui). I was like.. I should update this repo with the latest version of UI Thing. So I did. I also updated the README.md file to reflect the changes.

## What's included?

- All the components from UI Thing
  - So this may impact performance. I'm not sure. I would recommend that you delete the components that you do not need.
- [Notivue](https://notivuedocs.netlify.app/installation/nuxt.html) was also added to the project.
  - This is not needed, I just wanted another toast library to play with. Feel free to remove it if VueSonner or the built in toast works for you.
- Pinia
  - This can be removed if you don't need it as well.
- [V-Wave](https://github.com/justintaddei/v-wave)
  - It just adds a ripple effect any component that you want. It's pretty cool. You can remove it if you don't need it.
