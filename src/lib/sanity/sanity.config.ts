import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { settingsSchema } from './schemas/settings';
import { workSchema } from './schemas/work';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['settings']);

export default defineConfig({
	name: 'default',
	title: 'thompsonbear.com',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	basePath: '/studio',

	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title('Base')
					.items([
						S.listItem()
							.title('Site Settings')
							.child(S.document().schemaType('settings').documentId('settings')),
						...S.documentTypeListItems().filter(
							(listItem) => !['settings'].includes(listItem.getId() || '')
						)
					])
		})
	],

	schema: {
		types: [settingsSchema, workSchema],
		// Filter out singleton types from the global “New document” menu options
		templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
	},
	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input
	}
});
