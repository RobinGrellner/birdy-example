import { Separator } from "@/components/ui/separator";
import { UserInfoDetail } from "./user-detail-info-tab";
import UserDetailPostsWrapper from "./user-detail-posts-wrapper";
import UserDetailCartWrapper from "./user-detail-cart-wrapper";
import { Suspense } from "react";
import { PostCartCardsSkeleton } from "../skeletons";

export default function UserDetailLarge({
  className,
  info,
}: {
  className?: string;
  info: UserInfoDetail;
}) {
  return (
    <>
      <div className={className + " justify-between"}>
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
        <div className="ml-5">
          <h1 className="text-lg font-bold">Recent Posts</h1>
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserDetailPostsWrapper userId={info.id} />
          </Suspense>
        </div>
        <div className="ml-5">
          <h1 className="text-lg font-bold">Current Carts</h1>
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserDetailCartWrapper userId={info.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
