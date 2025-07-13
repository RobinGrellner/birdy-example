import { Suspense } from "react";
import { CardsSkeleton } from "./ui/skeletons";
import UserOverviewWrapper from "./ui/userOverview/user-overview-wrapper";

export default async function HomePage() {
  return (
    <main className="px-6">
      <Suspense fallback={<CardsSkeleton />}>
        <UserOverviewWrapper></UserOverviewWrapper>
      </Suspense>
    </main>
  );
}
