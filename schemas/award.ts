import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'award',
    title: 'Award',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'prize',
            title: 'Prize',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
        }),
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
        }),
        defineField({
            name: 'country',
            title: 'Country',
            type: 'string',
        }),
    ],
});
