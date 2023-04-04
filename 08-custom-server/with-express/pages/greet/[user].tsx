import { GetServerSideProps, NextPage } from "next";

interface P {
  user: any;
}

const GreetUser: NextPage<P> = ({ user }) => {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  );
};

export default GreetUser;

export const getServerSideProps: GetServerSideProps = async(req) => {
  return {
    props: {
      user: req.params?.user,
    },
  };
};
