import { User } from "@/types/type";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

interface P {
  users: User[];
}

const HomePage: NextPage<P> = ({ users }) => {
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

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/api/04/users`);

  return {
    props: {
      users: data,
    },
  };
};
