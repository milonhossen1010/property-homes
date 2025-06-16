import { spacing } from "@/theme";
import { getPaddingStyle } from "@/utils/textStyle";


export default  function Columns({
  isStackedOnMobile,
  textColor,
  children,
  backgroundColor,
  gap,
  padding,
}) {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const paddingStyle = getPaddingStyle(padding, spacing)



  return (
    <div className="" style={{ ...textColorStyle, ...backgroundColorStyle }}>
      <div
        className={` container mx-auto  ${
          isStackedOnMobile ? `block md:flex ` : `flex`
        } `}
        style={{gap, ...paddingStyle }}
      >
        {children}
      </div>
    </div>
  );
}
