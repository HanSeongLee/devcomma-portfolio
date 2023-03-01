import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
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
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [{type: 'string'}],
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
