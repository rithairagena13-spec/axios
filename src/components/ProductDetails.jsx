
export default function ProductDetails({ product, onBack }) {
  const isAvailable = product.stock > 0

  return (
    <div className="mx-auto max-w-6xl">
      <button
        onClick={onBack}
        className="mb-8 rounded-lg border border-[#DCE5E0] px-5 py-2.5 text-sm font-semibold text-[#315C4C] transition hover:bg-[#EAF1EC]"
      >
        ← Back to Products
      </button>

      <div className="grid gap-10 rounded-3xl border border-[#E5EAE6] bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="flex min-h-80 items-center justify-center rounded-2xl bg-[#F5F7F4] p-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-80 w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#668477]">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold text-[#263D35]">
            {product.title}
          </h1>

          <p className="leading-7 text-gray-500">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-[#315C4C]">
            ${product.price}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-[#EAF1EC] px-4 py-2 text-sm font-medium text-[#315C4C]">
              ⭐ {product.rating} Rating
            </span>

            <span className="rounded-full bg-[#F5F7F4] px-4 py-2 text-sm font-medium text-[#315C4C]">
              {product.brand || 'Brand not specified'}
            </span>
          </div>

          <div className={`rounded-xl p-4 ${
            isAvailable
              ? 'bg-[#EAF1EC] text-[#315C4C]'
              : 'bg-red-50 text-red-700'
          }`}>
            <p className="font-semibold">
              {isAvailable ? 'Available in Store' : 'Out of Stock'}
            </p>

            <p className="mt-1 text-sm">
              {isAvailable
                ? `${product.stock} items available`
                : 'This product is currently unavailable.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
