import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'devComma',
  title: 'devComma',

  projectId: projectId as string,
  dataset: dataset as string,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
