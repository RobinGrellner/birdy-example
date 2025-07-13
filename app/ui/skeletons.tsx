// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex-col justify-center align-center truncate rounded-xl bg-white px-4 py-8">
        <div className="justify-self-center h-24 w-24 rounded-md bg-gray-200" />
        <div className="justify-self-center mt-3 h-7 w-24 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: 20 }, (_, i) => (
        <CardSkeleton key={"skeleton_card_" + i} />
      ))}
    </div>
  );
}

export function PostCartCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex-col justify-start align-start truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-full rounded-md bg-gray-200" />
        <div className="mt-3 min-h-20 min-w-full rounded-md bg-gray-200" />
        <div className="mt-3 h-7 w-1/2 rounded-md bg-gray-200" />
        <div className="mt-3 flex flex-row">
          <div className="mr-5 h-7 w-20 rounded-md bg-gray-200" />
          <div className="mr-5 h-7 w-20 rounded-md bg-gray-200" />
          <div className="mr-5 h-7 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function PostCartCardsSkeleton() {
  return (
    <div className="">
      {Array.from({ length: 2 }, (_, i) => (
        <PostCartCardSkeleton key={"skeleton_card_" + i} />
      ))}
    </div>
  );
}
