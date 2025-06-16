import { themeColor } from '@/theme';
import { getTextAlign } from '@/utils/textStyle';
import { stripBaseUrlFromHtml } from '@/utils/stripBaseUrlFromHtml';

export default function Paragraph({ attributes }) {
  let { textAlign, content } = attributes;
  const color =
    themeColor[attributes.textColor] || attributes.style?.color?.text;

  return (
    <p
      className={`${getTextAlign(textAlign)} text-xl  mb-6`}
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: stripBaseUrlFromHtml(content) }}
    />
  );
}
