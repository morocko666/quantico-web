// src/lib/sanity.js
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'la9evsb3',
  dataset: 'production',
  apiVersion: '2026-05-28',
  useCdn: false,
});