export const stripBaseUrlFromHtml = (htmlString) => {
  if (!htmlString) return '';
  const wpUrl = process.env.NEXT_PUBLIC_WP_URL;
  if (!wpUrl) return htmlString;
  return htmlString.split(wpUrl).join('');
};