import { spacing, themeColor } from '@/theme';
import CallToActionButton from '../Blocks/CallToActionButton/CallToActionButton';
import Columns from '../Blocks/Columns/Columns';
import Cover from '../Blocks/Cover/Cover';
import Heading from '../Blocks/Heading/Heading';
import Paragraph from '../Blocks/Paragraph/Paragraph';
import Column from '../Blocks/column/Column';

import Image from 'next/image';
import { getMarginStyle } from '@/utils/textStyle';
import PropertySearch from '../Blocks/PropertySearch/PropertySearch';

export default function BlockRenderer({ blocks }) {
  return blocks?.map((block, index) => {
    try {
      switch (block.name) {
        case 'core/post-title':
        case 'core/heading':
        
          return (
            <Heading
              key={index}
              level={block?.attributes.level}
              textAlign={block?.attributes.textAlign}
              content={block?.attributes.content}
              className={block?.attributes?.className}
              color={
                themeColor[block?.attributes?.textColor] ||
                block?.attributes?.style?.color?.text
              }
            />
          );

        case 'core/paragraph':
          return <Paragraph key={index} attributes={block?.attributes} />;

        case 'core/cover':
          return (
            <Cover key={index} background={block.attributes.url}>
              <BlockRenderer blocks={block.innerBlocks} />
            </Cover>
          );

        case 'acf/cta-button':
          return (
            <CallToActionButton
              key={index}
              attributes={block.attributes.data}
            />
          );

        // Columns
        case 'core/columns':
          return (
            <Columns
              key={index}
              isStackedOnMobile={block?.attributes.isStackedOnMobile}
              textColor={
                themeColor[block?.attributes.textColor] ||
                block?.attributes.style?.color?.text
              }
              backgroundColor={
                themeColor[block?.attributes.backgroundColor] ||
                block?.attributes.style?.color?.background
              }
              gap={
                spacing[block?.attributes?.style?.spacing?.blockGap?.left] ||
                block?.attributes?.style?.spacing?.blockGap?.left
              }
              padding={block?.attributes?.style?.spacing?.padding}
            >
              <BlockRenderer blocks={block.innerBlocks} />
            </Columns>
          );

        // Column
        case 'core/column':
          return (
            <Column
              key={index}
              textColor={
                themeColor[block?.attributes?.textColor] ||
                block?.attributes?.style?.color?.text
              }
              backgroundColor={
                themeColor[block?.attributes?.backgroundColor] ||
                block?.attributes?.style?.color?.background
              }
              width={block?.attributes?.width}
              verticalAlignment={block?.attributes?.verticalAlignment}
              padding={block?.attributes?.style?.spacing?.padding}
            >
              <BlockRenderer blocks={block.innerBlocks || []} />
            </Column>
          );

        // Group and Block
        case 'core/group':
        case 'core/block': {
          return <BlockRenderer key={index} blocks={block.innerBlocks} />;
        }

        // Image
        case 'core/image':
          const margin = block?.attributes?.style?.spacing?.margin;
          const marginStyle = getMarginStyle(margin, spacing);
       
          return (
            <Image
              key={index}
              src={block?.attributes.url}
              height={block?.attributes?.height}
              width={block?.attributes?.width}
              alt={block?.attributes?.alt || 'Image'}
              style={{
                width: block?.attributes?.displayWidth,
                height: block?.attributes?.displayHeight,
                objectFit: block?.attributes?.scale,
                ...marginStyle,
                borderRadius: block?.attributes?.style?.border?.radius
              }}
            />
          );
        
        //Property Search
        case "acf/property-search": 
         
          return <PropertySearch key={index} />

        default:
          console.log({ "Unknow": block })
          return null;
      }
    } catch (error) {
      console.error('Block rendering error:', error);
      return (
        <div key={index} style={{ color: 'red' }}>
          Error rendering block: {block?.name || 'unknown'}
        </div>
      );
    }
  });
}
