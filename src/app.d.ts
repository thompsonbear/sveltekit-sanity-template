// See https://kit.svelte.dev/docs/types#app

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityClient } from 'sanity';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sanity: {
				client: SanityClient;
				imageUrlBuilder: ImageUrlBuilder;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
