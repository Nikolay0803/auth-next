import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  // const session = await getServerSession(authOptions);
  return (
    <>
      {/* <div className="grid-cols-4 border-r shadow h-screen p-2">
        <Link
          className="p-3 rounded hover:bg-emerald-600 hover:text-white hover:shadow transition "
          href={`/dashboard/user/${session?.user.id}`}
        >
          User Profile
        </Link>
      </div> */}
      <div>{props.children}</div>
    </>
  );
};

export default DashBoardLayout;
