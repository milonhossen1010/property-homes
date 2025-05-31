export default function BlockRenderer({blocks}) {
  return blocks?.map((block, index) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={index}>Core Cover</div>
      }
      default:
        return null;
    }
  });
}