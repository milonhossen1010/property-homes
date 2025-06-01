// app/[slug]/page.js
import { gql } from '@apollo/client';
import client from '@/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';

export default async function Page({ params }) {
  const {slug} = await params
  const uri = `/${slug ?? ''}`;
  

  const { data } = await client.query({
    query: gql`
      query NewQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
    variables: { uri },
  });
 console.log(data?.nodeByUri?.blocks);
  return (
    <div>
      <BlockRenderer blocks={data?.nodeByUri?.blocks} />
    </div>
  );
}
