//Text align function
export const getTextAlign = (textAlign) => {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center"
  }

  return `${textAlignMap[textAlign] || ""}`
}


//Font size function
export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "my-4 text-4xl md:text-6xl font-bold",
    2: "my-4 text-3xl md:text-5xl font-bold",
    3: "text-2xl md:text-4xl",
    4: "text-xl md:text-3xl",
    5: "text-md md:text-2xl",
    6: "text-md md:text-xl"
  }

  return `${fontSizeMap[level] || ""}`
}


// margin style
export const getMarginStyle = (margin = {}, spacing = {}) => {
  return {
    marginTop: spacing[margin.top] || margin.top,
    marginRight: spacing[margin.right] || margin.right,
    marginBottom: spacing[margin.bottom] || margin.bottom,
    marginLeft: spacing[margin.left] || margin.left,
  };
};

// Padding style
export const getPaddingStyle = (padding={}, spacing={})=>{
  return {
    paddingTop: spacing[padding.top] || padding.top,
    paddingRight: spacing[padding.right] || padding.right,
    paddingBottom: spacing[padding.bottom] || padding.bottom,
    paddingLeft: spacing[padding.left] || padding.left,
  };
}

