export const workSchema = {
	type: 'document',
	name: 'work',
	title: 'Work',
	fields: [
		{
			type: 'image',
			name: 'image',
			title: 'Image'
		},
		{
			type: 'string',
			name: 'title',
			title: 'Title'
		},
		{
			type: 'slug',
			name: 'slug',
			title: 'Slug'
		},
		{
			type: 'text',
			name: 'description',
			title: 'Description'
		},
		{
			type: 'url',
			name: 'public_url',
			title: 'Public URL'
		},
		{
			type: 'url',
			name: 'source_url',
			title: 'Source URL'
		}
	]
};
