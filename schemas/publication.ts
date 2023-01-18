import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'publication',
    title: 'Publication',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
        }),
        defineField({
            name: 'publisher',
            title: 'Publisher',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
    ],
});
