import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Un archivo Markdown por proyecto y por idioma:
 *   src/content/projects/es/<slug>.md
 *   src/content/projects/en/<slug>.md
 * El cuerpo del Markdown es el caso de estudio de la página de detalle.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const screenshot = z.object({
      src: image(),
      alt: z.string(),
      device: z.enum(['phone', 'browser']).default('phone'),
    });

    return z.object({
      title: z.string(),
      description: z.string(),
      stack: z.array(z.string()),
      demo: z.url().optional(),
      repo: z.url().optional(),
      // Captura de la tarjeta (móvil) y galería de la página de detalle
      cover: screenshot.optional(),
      screenshots: z.array(screenshot).default([]),
      order: z.number(),
      featured: z.boolean().default(false),
      // 'wip' = en desarrollo: tarjeta pequeña, sin enlaces ni página de detalle
      status: z.enum(['live', 'wip']).default('live'),
    });
  },
});

export const collections = { projects };
