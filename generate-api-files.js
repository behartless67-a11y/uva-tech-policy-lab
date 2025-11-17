const fs = require('fs');
const path = require('path');

const contentTypes = [
  { name: 'team-member', plural: 'team-members' },
  { name: 'project', plural: 'projects' },
  { name: 'publication', plural: 'publications' },
  { name: 'article', plural: 'articles' },
  { name: 'site-config', plural: 'site-config', isSingle: true }
];

contentTypes.forEach(({ name, plural, isSingle }) => {
  const apiPath = path.join(__dirname, 'cms', 'src', 'api', name);

  // Create directories
  fs.mkdirSync(path.join(apiPath, 'controllers'), { recursive: true });
  fs.mkdirSync(path.join(apiPath, 'services'), { recursive: true });
  fs.mkdirSync(path.join(apiPath, 'routes'), { recursive: true });

  // Controller
  const controller = `import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::${name}.${name}');
`;
  fs.writeFileSync(path.join(apiPath, 'controllers', `${name}.ts`), controller);

  // Service
  const service = `import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::${name}.${name}');
`;
  fs.writeFileSync(path.join(apiPath, 'services', `${name}.ts`), service);

  // Routes
  const routes = `import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::${name}.${name}');
`;
  fs.writeFileSync(path.join(apiPath, 'routes', `${name}.ts`), routes);

  console.log(`✓ Created API files for ${name}`);
});

console.log('\n✅ Done! Restart Strapi to load the APIs.');
