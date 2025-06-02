import { gql } from '@apollo/client';
import client from '@/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';

const QUERY = gql`
  query NewQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        blocks(postTemplate: false)
      }
    }
  }
`;

export default async function Page({ params }) {
  const slug = params?.slug || '';
  const uri = `/${slug}`;

  try {
    const { data } = await client.query({
      query: QUERY,
      variables: { uri },
    });

    const blocks = data?.nodeByUri?.blocks || null;

    return (
      <div>
        <BlockRenderer blocks={blocks} />
      </div>
    );
  } catch (error) {
    console.error('Apollo error:', error);
    return <div>Error loading page content.</div>;
  }
}
