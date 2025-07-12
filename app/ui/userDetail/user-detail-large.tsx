import { Separator } from "@/components/ui/separator";
import { UserInfoDetail } from "./user-detail-info-tab";
import { getCartsByUser, getPostsByUser } from "@/lib/calls";
import UserPostCard from "./user-post-card";
import UserCartCard from "./user-cart-card";

export default async function UserDetailLarge({
  className,
  info,
}: {
  className?: string;
  info: UserInfoDetail;
}) {
  const posts = await getPostsByUser(info.id);
  const carts = await getCartsByUser(info.id);
  return (
    <>
      <div className={className + " justify-evenly"}>
        <div className="mx-5">
          <h1 className="text-lg font-bold">Account Information</h1>
          <p>Username: {info.username}</p>
          <p>E-Mail: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <h1 className="text-md font-bold">Personal Address</h1>
          <p>Country: {info.address.country}</p>
          <p>City: {info.address.city}</p>
          <p>Postal Code: {info.address.postalCode}</p>
          <p>Address: {info.address.address}</p>
        </div>
        <div className="mx-5">
          <h1 className="text-lg font-bold">Banking Information</h1>
          <p>Type of Card: {info.bank.cardType}</p>
          <p>Currency: {info.bank.currency}</p>
          <p>IBAN: {info.bank.iban}</p>
          <p>Card Number: {info.bank.cardNumber}</p>
          <p>Expiration Date: {info.bank.cardExpire}</p>
        </div>
        <div className="mx-5">
          <h1 className="text-lg font-bold">Company Information</h1>
          <p>Company: {info.company.name}</p>
          <p>Department: {info.company.department}</p>
          <p>Title: {info.company.title}</p>
          <h1 className="text-md font-bold">Company Address</h1>
          <p>Country: {info.company.address.country}</p>
          <p>City: {info.company.address.city}</p>
          <p>Postal Code: {info.company.address.postalCode}</p>
          <p>Address: {info.company.address.address}</p>
        </div>
      </div>
      <Separator className={className + " my-3"} />
      <div className={className + " md:grid md:grid-cols-2"}>
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
        <div>
          <h1 className="text-lg font-bold ml-5">Current Carts</h1>
          {carts.length == 0 ? (
            <p>No Carts found</p>
          ) : (
            carts.map((cart: any) => (
              <UserCartCard key={"cart_" + cart.id} cart={cart} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
