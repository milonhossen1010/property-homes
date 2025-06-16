import { getFontSizeForHeading, getTextAlign } from '@/utils/textStyle';
import React from 'react';

export default function Heading({ content, textAlign, level = '2', className = "", color }) {
 
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    style: {color:color},
    className: ` ${className==='is-style-text-subtitle' ? className :    getFontSizeForHeading(level)} ${getTextAlign(
      textAlign
    )}`,
  });
  return tag;
}
