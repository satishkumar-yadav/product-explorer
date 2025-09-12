
const InfiniteScrollToggle = ({ useInfinite, setUseInfinite }) => (

    <button
    className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 m-2 flex items-center gap-2"
    title={useInfinite ? "Switch to Pagination" : "Switch to Infinite Scroll"}
    onClick={() => setUseInfinite(val => !val)}
  >
    {useInfinite ? (
      <>
        {/* "Switch to Pagination" */}
        {/* Pagination: ☰ symbol */}
        <span className="text-lg">☰</span>
      </> 
    ) : (
      <>
        {/* Infinity scroll: ∞ symbol */}
        {/* "Switch to Infinite Scroll" */}
        <span className="text-lg">∞</span>
      </>
    )}
  </button>

);

export default InfiniteScrollToggle;



// Symbols: ∞ (infinity) for infinite scroll, ☰ for pagination/pages (alternatively 🗂 or 📄)




