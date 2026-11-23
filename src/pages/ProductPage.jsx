
import { useState } from 'react'
import useProducts from '../hooks/useProducts'
import useProductDetails from '../hooks/useProductDetails'
import ProductList from '../components/ProductList'
import ProductDetails from '../components/ProductDetails'
import Loading from '../components/Loading'

export default function ProductsPage() {
  const [selectedProductId, setSelectedProductId] = useState(null)

  const { status, data, error } = useProducts({
    limit: 12,
    skip: 0,
  })

  const {
    status: detailsStatus,
    data: productDetails,
    error: detailsError,
  } = useProductDetails(selectedProductId)

  return (
    <main className="min-h-screen bg-[#F5F7F4] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#668477]">
            Discover our collection
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#263D35] sm:text-4xl">
            Product Explorer
          </h1>

          <p className="mt-3 max-w-xl text-gray-500">
            Explore products, discover details and find what you need.
          </p>
        </div>

        {selectedProductId !== null ? (
          <>
            {detailsStatus === 'loading' && <Loading />}

            {detailsStatus === 'error' && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                <p className="font-semibold text-red-700">
                  Failed to load product details.
                </p>

                <p className="mt-2 text-sm text-red-600">
                  {detailsError.message}
                </p>

                <button
                  onClick={() => setSelectedProductId(null)}
                  className="mt-5 rounded-lg bg-[#315C4C] px-5 py-2 text-sm font-semibold text-white"
                >
                  Back to Products
                </button>
              </div>
            )}

            {detailsStatus === 'success' && (
              <ProductDetails
                product={productDetails}
                onBack={() => setSelectedProductId(null)}
              />
            )}
          </>
        ) : (
          <>
            {status === 'loading' && <Loading />}

            {status === 'error' && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                <p className="font-semibold text-red-700">
                  Failed to load products.
                </p>

                <p className="mt-2 text-sm text-red-600">
                  {error.message}
                </p>
              </div>
            )}

            {status === 'success' && (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#263D35]">
                    Available Products
                  </h2>

                  <span className="text-sm text-gray-500">
                    {data.total} products available
                  </span>
                </div>

                <ProductList
                  products={data.products}
                  onViewDetails={setSelectedProductId}
                />
              </>
            )}
          </>
        )}
      </div>
    </main>
  )
}
