import Button from '@/components/Button/Buton';
import { getTextAlign } from '@/utils/textStyle';
 

export default function CallToActionButton({ attributes }) {
  let { label, link, align } = attributes;
  const textAlign = getTextAlign(align);
  return (
    <div className={`my-4 ${textAlign}`}>
       <Button label={label} link={link} />
    </div>
  );
}
