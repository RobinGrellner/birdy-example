import { getPostsByUser } from "@/lib/calls";
import UserPostCard from "./user-post-card";

export default async function UserDetailPostsTab({
  userId,
}: {
  userId: string;
}) {
  const posts = await getPostsByUser(userId);
  return (
    <div>
      <h1 className="text-lg font-bold ml-5">Recent Posts</h1>
      {posts.length == 0 ? (
        <p>No Posts found</p>
      ) : (
        posts.map((post: any) => (
          <UserPostCard key={"post_" + post.id} post={post} />
        ))
      )}
    </div>
  );
}
