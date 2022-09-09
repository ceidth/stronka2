/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export default async function topics(req, res) {
  const {name, email, slug, topicName, content} = req.body;
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation MyMutation($content: String = "content", $email: String = "email", $name: String = "name", $slug: String = "slug", $topicName: String = "topicName") {
        createForumTopic(
        data: {topicName: $topicName, slug: $slug, name: $name, email: $email, content: $content}
        ) {
            id
        }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
  

}