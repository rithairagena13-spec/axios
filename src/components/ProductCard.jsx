
export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5EAE6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-52 items-center justify-center bg-[#F5F7F4] p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#668477]">
          {product.category}
        </p>

        <h3 className="line-clamp-1 text-lg font-semibold text-[#263D35]">
          {product.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-[#E5EAE6] pt-4">
          <span className="text-xl font-bold text-[#315C4C]">
            ${product.price}
          </span>

          <span className="rounded-full bg-[#EAF1EC] px-3 py-1 text-xs font-medium text-[#315C4C]">
            ⭐ {product.rating}
          </span>
        </div>

        <button
          onClick={() => onViewDetails(product.id)}
          className="w-full rounded-xl bg-[#315C4C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#263D35]"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
