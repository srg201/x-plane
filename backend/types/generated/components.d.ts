import type { Schema, Struct } from '@strapi/strapi';

export interface AuthorAuthors extends Struct.ComponentSchema {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'Authors';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface HelicopterHelicopter extends Struct.ComponentSchema {
  collectionName: 'components_helicopter_helicopters';
  info: {
    displayName: 'Helicopter';
  };
  attributes: {
    chart: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface PartnersPartners extends Struct.ComponentSchema {
  collectionName: 'components_partners_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    link: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'author.authors': AuthorAuthors;
      'helicopter.helicopter': HelicopterHelicopter;
      'partners.partners': PartnersPartners;
    }
  }
}
