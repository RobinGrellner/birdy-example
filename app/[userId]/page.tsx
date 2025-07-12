import { getUserById } from "@/lib/calls";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserDetailInfoTab, {
  UserInfoDetail,
} from "../ui/userDetail/user-detail-info-tab";
import UserDetailPostsTab from "../ui/userDetail/user-detail-posts-tab";
import UserDetailCartTab from "../ui/userDetail/user-detail-cart-tab";
import UserDetailLarge from "../ui/userDetail/user-detail-large";
import { capitalizeFirstLetter } from "@/lib/utils";
import { userInfo } from "os";

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);

  const userInfoDetail = user as UserInfoDetail;
  return (
    <main className="p-6">
      <Link href="/">
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </Link>
      <div className="flex flex-row">
        <img
          src={user.image}
          alt={user.firstName}
          width={120}
          height={120}
          className="rounded-full mb-4 mr-5"
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
      <Tabs defaultValue="info" className="w-[400px] md:hidden">
        <TabsList>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="posts">Recent Posts</TabsTrigger>
          <TabsTrigger value="carts">Current Carts</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <UserDetailInfoTab info={user} />
        </TabsContent>
        <TabsContent value="posts">
          <UserDetailPostsTab userId={user.id}/>
        </TabsContent>
        <TabsContent value="carts">
          <UserDetailCartTab userId={user.id} />
        </TabsContent>
      </Tabs>
      <UserDetailLarge
        className="hidden md:flex"
        info={userInfoDetail}
      ></UserDetailLarge>
    </main>
  );
}
