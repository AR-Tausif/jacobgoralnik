import Image from "next/image";
import { Ban, Eye, Info, MoreVertical, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const users = [
  {
    id: 1,
    name: "Tausif Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 2,
    name: "Towkir Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 3,
    name: "Samir Sadaf",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 4,
    name: "Saffat Hossain",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 5,
    name: "Foyzan Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 6,
    name: "Nasif Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 7,
    name: "Sundarban Tikana",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 8,
    name: "Sundarban Tikana",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 9,
    name: "Sundarban Tikana",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 10,
    name: "Sundarban Tikana",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
  {
    id: 11,
    name: "Sundarban Sajuty",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    email: "tausif.ritu1@gmail.com",
    date: "11 oct 24, 11.10PM",
  },
];

export default function UsersTable() {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Archived":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-primary-200 border-b border-gray-200">
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-950 -tracking-wide">
              Serial
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-950 -tracking-wide">
              Full Name
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-950 -tracking-wide">
              Email
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-950 -tracking-wide">
              Date
            </th>
            <th className="py-4 px-6 text-right text-sm font-semibold text-gray-950 -tracking-wide">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary-50/30 divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-4 px-6j text-sm text-gray-500">#{user.id}</td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={user.image || "/placeholder.svg"}
                      width={500}
                      height={500}
                      alt={user.name}
                      className="w-80 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{user.email}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{user.date}</td>
              <td className="py-4 px-6 text-sm text-right">
                <div className="flex justify-end items-center space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Info className="h-5 w-5 text-[#138487]" />
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="space-y-4">
                        <DialogTitle className="text-center text-gray-700">
                          User Details
                        </DialogTitle>

                        <div className="w-20 h-20 mx-auto">
                          <img
                            src="https://avatars.githubusercontent.com/u/120933222?v=4"
                            alt="profile photo"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="space-y-2 text-sm text-gray-700">
                          <UserDetailsContent label="Date" value={user.date} />
                          <UserDetailsContent
                            label="First Name"
                            value={"Tausif"}
                          />
                          <UserDetailsContent
                            label="Last Name"
                            value={"Ahmed"}
                          />
                          <UserDetailsContent
                            label="Email"
                            value={user.email}
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {/* user blocking button and dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Ban className="h-5 w-5 text-green-600" />
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle className="text-red-600 text-center">
                        Are you sure!
                      </DialogTitle>

                      <div className="flex flex-col justify-center items-center gap-4 mt-4">
                        <p className="text-sm text-gray-700 text-center">
                          Do you want to Block your Users profile?
                        </p>
                        <Button>Confirm</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {/* <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const UserDetailsContent = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="spacy-y-2">
      <div className="flex justify-between">
        <p>{label} :</p>
        <p>{value}</p>
      </div>
      <hr className="border-gray-200 mt-2 mb-3" />
    </div>
  );
};
