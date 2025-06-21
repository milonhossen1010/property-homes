export default function Pagination({ totalPages, pageClick }) {
  return (
    <div className="container mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div onClick={() => pageClick()} key={i} className="btn">
          {i + 1}
        </div>
      ))}
    </div>
  );
}