import { themeColor } from "@/theme";
import { getTextAlign } from "@/utils/fonts";
import { stripBaseUrlFromHtml } from "@/utils/stripBaseUrlFromHtml";


export default function Paragraph({ attributes }) {
  const {textAlign} = attributes;
  const { content } = attributes;
  const color = themeColor[attributes.textColor] || attributes.style?.color?.text
 
  
  return (
    <p
      className={`${getTextAlign(textAlign)} text-xl   `}
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: stripBaseUrlFromHtml(content) }}
    />
  );
}