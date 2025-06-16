import { spacing } from "@/theme";
import { getPaddingStyle } from "@/utils/textStyle";

export default function Column({ children, width, textColor, backgroundColor, verticalAlignment, padding, }) {
 
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? {backgroundColor} : {};
  const widthStyle = width ? { minWidth: width, flex: 1 } : { flex: 1 };
  const paddingStyle = getPaddingStyle(padding, spacing);

  return (
    <div
      className="px-2 py-5"
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
        ...widthStyle,
        alignSelf: verticalAlignment,
        ...paddingStyle,
      }}
    >
      {children}
    </div>
  );
}
