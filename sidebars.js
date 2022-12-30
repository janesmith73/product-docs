// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    'cellular-iot',
    'quickstart',
    'service-stack-overview',
    'services',
    'rest-api',
    {
      type: 'category',
      label: 'Data Streamer',
      link: { 
        type: 'generated-index', 
        title: 'emnify multicloud Data Streamer',
        slug: 'data-streamer'
      },
      items: [
        {
          type: 'doc',
          label: 'Getting Started',
          id: 'data-streamer/getting-started'
        },
        {
          type: 'doc',
          label: 'Connection Types',
          id: 'data-streamer/connection-types'
        },
        {
          type: 'doc',
          label: 'Stream Types',
          id: 'data-streamer/stream-types'
        },
        {
          type: 'doc',
          label: 'Managing Data Streams',
          id: 'data-streamer/managing-data-streams'
        },
        {
          type: 'doc',
          label: 'Using the Data Streamer',
          id: 'data-streamer/usage'
        },
        {
          type: 'doc',
          label: 'Available Integrations',
          id: 'data-streamer/available-integrations'
        }
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index', 
        title: 'emnify system events',
        slug: '/events'
      },
      items: [
        'events/getting-started',
        'events/event-types',
        'events/mno-events',
        'events/usage'
      ],
    },
    {
      type: 'category',
      label: 'Single Sign-On',
      link: { 
        type: 'doc', 
        id: 'sso/overview' 
      },
      items: [
        {
          type: 'doc',
          label: 'Microsoft Active Directory',
          id: 'sso/microsoft-active-directory'
        },
        {
          type: 'doc',
          label: 'Google Cloud Platform',
          id: 'sso/google-cloud-platform'
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'sso/troubleshooting'
        }
      ],
    },
    'glossary',
  ]
};

module.exports = sidebars;
