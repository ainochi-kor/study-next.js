import { User } from "@/types/type";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ListParam {
  users: User[];
}
const List: React.FC<ListParam> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Users: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/api/04/users");
      const users = await req.json();

      setLoading(false);
      setData(users);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  );
};

export default Users;
