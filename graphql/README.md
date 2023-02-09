# emnify GraphQL API

We use [graphql-markdown](https://graphql-markdown.github.io/) to generate the reference documentation for the emnify GraphQL API. 
It uses the same schema as [our GraphiQL interface](https://graphql-playground.emnify.net/).

You can find the configuration for this project in `graphql-markdown.config.js`.

## Updating the reference documentation

To update the [existing GraphQL reference documentation](https://docs.emnify.com/graphql), run:

```shell
yarn generate-graphql-docs
```

This command generates MDX files locally from the GraphQL schema. 
It writes to the `docs/graphql` directory.

> ⚠️ _Some pages (like `generated.md`) were manually written and need to be adjusted or added back after new documentation is generated._
