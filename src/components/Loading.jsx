
export default function Loading() {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#DCE5E0] border-t-[#315C4C]"></div>
        <p className="text-sm font-medium text-[#315C4C]">
          Loading products...
        </p>
      </div>
    </div>
  )
}
