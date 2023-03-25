import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import GET_LATEST_SIGNS from "@/lib/apollo/queries/getLatestSigns";
import Loading from "@/components/Loading";
import Link from "next/link";
import Sign from "@/components/Sign";
import { ILatestSign, ISign } from "@/types/type";

const HomePage: NextPage = () => {
  const {
    loading,
    data,
  }: { loading: boolean; data: { sign: ILatestSign[] } | undefined } = useQuery(
    GET_LATEST_SIGNS,
    {
      fetchPolicy: "no-cache",
    }
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-5">Real-World Next.js signbook</h1>
      <Link href="/new-sign">
        <button className="mb-8 border-2 border-purple-800 text-purple-900 p-2 rounded-lg text-gray-50 m-auto mt-4">
          Add new sign
        </button>
      </Link>
      <div>
        {data && data.sign.map((sign) => <Sign key={sign.uuid} {...sign} />)}
      </div>
    </div>
  );
};

export default HomePage;
