export const settingsSchema = {
	type: 'document',
	name: 'settings',
	title: 'Site Settings',
	fields: [
		{
			name: 'title',
			title: 'Site Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Site Description',
			type: 'text'
		}
	]
};
