# From Svelte to Github Pages

This is a really standard Svelte-kit app, but it is adapted so that on every `git push`, it deploys a static app to Github Pages.

## How it works

There are several modification steps to do in order to update the default Svelte Kit app to be compatible with Github Pages on deploy.

* Add the `@sveltejs/adapter-static` package and use it as `adapter` variable in `svelte.config.js`.
* Add `paths: {base: process.env.GITHUB_ACTION ? process.env.GITHUB_REPOSITORY.replace(/^[^/]+\//gi, '/') : ''}` to the `config.kit` configuration option. This ensures that the base path corresponds to Github Pages' default sub-directory name (which is set to your repository name).
  <br>ℹ Note: if you host it at the root of a domain, you can omit this change.
* Create a ` .github/workflows/deploy_to_pages.yaml` file for deployment.
  <br>Check it out [here](https://github.com/Pierstoval/svelte-to-github-pages/blob/main/.github/workflows/deploy_to_pages.yaml) in this repository to know what to write in it.
* You might have to change absolute links to relative links in `src/app.html`, because Github Pages are by default hosted in a sub-directory (for example, by default, Svelte has a `favicon` link that you might want to change).

This should be enough 😉

Check out [this diff](https://github.com/Pierstoval/svelte-to-github-pages/compare/95acf480da6a6370360c2ea40b139bd4bfd6b290...75c1be7a02a91b2b28621882565f02cc6c14e3c4) to see the changes (it doesn't contain the changes to the adapter though).
