import Cover from '../Cover/Cover';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

export default function BlockRenderer({ blocks }) {
  return blocks?.map((block, index) => {
   
    switch (block.name) {
      //Heading component
      case 'core/heading': {
        return <Heading key={index} level={block.attributes.level} textAlign={block.attributes.textAlign} content={block.attributes.content} />;
      }
      //Paragraph components
      case 'core/paragraph': {
        return <Paragraph key={index} attributes={block.attributes} />;
        }
        
        //Cover components
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
