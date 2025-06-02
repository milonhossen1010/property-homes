'use client';

import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '@/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';
import { useParams } from 'next/navigation';

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

export default function Page() {
  const params = useParams();
  const slug = params?.slug || '';
  const [blocks, setBlocks] = useState(null);

  useEffect(() => {
    const uri = `/${slug}`;

    client
      .query({
        query: QUERY,
        variables: { uri },
      })
      .then(({ data }) => {
        setBlocks(data?.nodeByUri?.blocks);
      })
      .catch(err => {
        console.error('Apollo error:', err);
      });
  }, [slug]);

 

  return (
    <div> 
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
