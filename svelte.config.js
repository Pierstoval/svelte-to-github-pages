import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: adapter(),

		paths: {base: process.env.GITHUB_ACTION ? process.env.GITHUB_REPOSITORY.replace(/^[^/]+\//gi, '/') : ''},
	}
};

export default config;
