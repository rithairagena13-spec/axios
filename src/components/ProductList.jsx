
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-xl font-semibold text-[#263D35]">
          No products found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Try searching for another product.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
