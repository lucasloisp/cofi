# ☕ Cofi: a brew-tiful app

Cofi is a simple app to help you get a nice cup during those sleepy mornings or calm afternoons.
A routine is good, but exploring is best, and Cofi can be your companion on both, by allowing you to follow the same steps every time you make your favorite recipe, while also allowing you to explore and save a variety of alternatives, for all the brewing methods you want.

## Technical Description

I built Cofi because I wanted some reminders on what the right steps were to get a good cup and also to play some more with my preferred tech stack at the moment.

Cofi is built on top of [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/) and relies on some popular libraries for its core: [React Navigation](https://reactnavigation.org/), [Tanstack Query](https://tanstack.com/query/) and [Shopify's Restyle](https://shopify.github.io/restyle/).

<p float="left">
  <img src="./demo/recipes.png" width="200" />
  <img src="./demo/recipe.png" width="200" />
  <img src="./demo/recipe_adjust.png" width="200" />
</p>

### Architecture

The architecture of this app is inspired by Zalecki's [Elegant Frontend Architecture](https://michalzalecki.com/elegant-frontend-architecture/) and aligns with my preferred way to structure big-ish React Native codebases, with [Colocation](https://kentcdodds.com/blog/colocation) as a guiding principle.

Through `services/` we can create powerful abstractions that mean our app is much more flexible when it comes to changes in dependencies and that features can truly be abstracted away from the details of a particular library or SDK.
Eventually, this can also be used to keep platform-specific logic at bay too, by encapsulating all details specific to a particular OS inside them.

The `features/` folder allows building hooks and components in a way that makes them easily shareable while still keeping coupling low by grouping them.

## Credit

This app is built on a couple of super powerful resources:

- [Happy Hues](https://www.happyhues.co/) is a color palette inspiration site, [Palette #10](https://www.happyhues.co/palettes/10) powers Cofi.
- [The Noun Project](https://thenounproject.com/) is an icons repository. The icons throughout Cofi came from there.
  - Coffee by Iconnic from <a href="https://thenounproject.com/browse/icons/term/coffee/" target="_blank" title="Coffee Icons">Noun Project</a> (CC BY 3.0)
  - scoop with coffee by Juraj Sedlák from <a href="https://thenounproject.com/browse/icons/term/scoop-with-coffee/" target="_blank" title="scoop with coffee Icons">Noun Project</a> (CC BY 3.0)
  - French Press by Joshua Lepley from <a href="https://thenounproject.com/browse/icons/term/french-press/" target="_blank" title="French Press Icons">Noun Project</a> (CC BY 3.0)
  - Aeropress by Joshua Lepley from <a href="https://thenounproject.com/browse/icons/term/aeropress/" target="_blank" title="Aeropress Icons">Noun Project</a> (CC BY 3.0)
