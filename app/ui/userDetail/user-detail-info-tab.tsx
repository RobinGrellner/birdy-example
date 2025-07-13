import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface UserInfoDetail {
  id: string;
  email: string;
  phone: string;
  birthdate: string;
  username: string;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    };
  };
}

export default function UserDetailInfoTab({ info }: { info: UserInfoDetail }) {
  return (
    <Card className="mt-3 w-full shadow-sm transition duration-300">
      <CardContent>
        <h1 className="text-lg font-bold">Account Information</h1>
        <p>Username: {info.username}</p>
        <p>E-Mail: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <h1 className="text-md font-bold">Personal Address</h1>
        <p>Country: {info.address.country}</p>
        <p>City: {info.address.city}</p>
        <p>Postal Code: {info.address.postalCode}</p>
        <p>Address: {info.address.address}</p>
        <Separator className="my-3" />
        <h1 className="text-lg font-bold">Banking Information</h1>
        <p>Type of Card: {info.bank.cardType}</p>
        <p>Currency: {info.bank.currency}</p>
        <p>IBAN: {info.bank.iban}</p>
        <p>Card Number: {info.bank.cardNumber}</p>
        <p>Expiration Date: {info.bank.cardExpire}</p>
        <Separator className="my-3" />
        <h1 className="text-lg font-bold">Company Information</h1>
        <p>Company: {info.company.name}</p>
        <p>Department: {info.company.department}</p>
        <p>Title: {info.company.title}</p>
        <h1 className="text-md font-bold">Company Address</h1>
        <p>Country: {info.company.address.country}</p>
        <p>City: {info.company.address.city}</p>
        <p>Postal Code: {info.company.address.postalCode}</p>
        <p>Address: {info.company.address.address}</p>
      </CardContent>
    </Card>
  );
}
