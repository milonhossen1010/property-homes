import { getFontSizeForHeading, getTextAlign } from '@/utils/fonts';
import React from 'react';

export default function Heading({ content, textAlign, level="2" }) {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className:`max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
  });
  return  tag ;
}
