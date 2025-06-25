export default function Pagination({ totalPages, onPageClick, currentPage }) {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={i}
            className={`btn rounded-none ${
              isActive ? 'bg-primary text-white' : 'bg-black'
            }`}
            onClick={() => {
              onPageClick(i + 1);
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}