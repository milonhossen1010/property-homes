import Cover from '../Cover/Cover';
import Heading from '../Heading/Heading';

export default function BlockRenderer({ blocks }) {
  return blocks?.map((block, index) => {
    console.log(block);
    switch (block.name) {
      case 'core/heading': {
        return <Heading key={index} level={block.attributes.level} textAlign={block.attributes.textAlign} content={block.attributes.content} />;
      }
      case 'core/cover': {
        return (
          <Cover key={index} background={block.attributes.url}>
            <BlockRenderer  blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default:
        return null;
    }
  });
}
