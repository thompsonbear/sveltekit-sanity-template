import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { createClient } from '@sanity/client';
import type { Handle } from '@sveltejs/kit';

import imageUrlBuilder from '@sanity/image-url';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.sanity = {
		client: createClient({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: 'production',
			useCdn: true, // set to `false` to bypass the edge cache
			apiVersion: '2024-01-31' // use current date (YYYY-MM-DD) to target the latest API version
		}),
		imageUrlBuilder: imageUrlBuilder({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: 'production'
		})
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
