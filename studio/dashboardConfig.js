export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604162f538eb5109749dcba6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uphtgygn',
                  apiId: 'b3a2364f-e1db-4412-b4ee-8882de6579d6'
                },
                {
                  buildHookId: '604162f42f309f095eb24ef7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7kxgn7cy',
                  apiId: '1b0f58ff-b296-4101-b23a-953599825e75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KristamMoffett/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7kxgn7cy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
