import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";

const UserCard: React.FC<User> = ({
  username,
  avatar,
  first_name,
  last_name,
  job_title,
}) => {
  return (
    <Link href={`/user/${username}`} passHref>
      <div className="dark:bg-gray-800 bg-gray-100 cursor-pointer dark:text-white p-4 rounded-md text-center shadow-xl">
        <Image
          width={350}
          height={350}
          src={avatar}
          alt={username}
          className="w-16 bg-gray-400 rounded-full m-auto"
        />
        <div className="mt-2 font-bold">
          {first_name} {last_name}
        </div>
        <div className="font-light">{job_title}</div>
      </div>
    </Link>
  );
};

export default UserCard;
