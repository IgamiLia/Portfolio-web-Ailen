import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${import.meta.env.DATOCMS_API_TOKEN}`,
  },
});

export async function queryDatoCMS(query: string, variables = {}) {
  return await client.request(query, variables);
}
