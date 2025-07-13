import { getUserById } from "@/lib/calls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserDetailInfoTab, {
  UserInfoDetail,
} from "../ui/userDetail/user-detail-info-tab";
import UserDetailPostsWrapper from "../ui/userDetail/user-detail-posts-wrapper";
import UserDetailCartWrapper from "../ui/userDetail/user-detail-cart-wrapper";
import UserDetailLarge from "../ui/userDetail/user-detail-large";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { PostCartCardsSkeleton } from "../ui/skeletons";
import { Suspense } from "react";

export default async function UserDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;

  const user = await getUserById(userId);

  const userInfoDetail = user as UserInfoDetail;
  return (
    <main className="px-6">
      <div className="w-fit flex flex-row">
        <img
          src={user.image}
          alt={user.firstName}
          width={120}
          height={120}
          className="rounded-full mr-5"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500 mb-1">
            Gender: {capitalizeFirstLetter(user.gender)}
          </p>
          <p className="text-gray-500 mb-1">Age: {user.age}</p>
        </div>
      </div>
      <Separator className={"hidden md:flex my-3"} />
      <Tabs defaultValue="info" className="w-full mt-3 md:hidden">
        <TabsList>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="posts">Recent Posts</TabsTrigger>
          <TabsTrigger value="carts">Current Carts</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <UserDetailInfoTab info={user} />
        </TabsContent>
        <TabsContent value="posts">
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserDetailPostsWrapper userId={user.id} />
          </Suspense>
        </TabsContent>
        <TabsContent value="carts">
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserDetailCartWrapper userId={user.id} />
          </Suspense>
        </TabsContent>
      </Tabs>
      <UserDetailLarge
        className="hidden md:flex"
        info={userInfoDetail}
      ></UserDetailLarge>
    </main>
  );
}
