import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-200">
      <div className="hidden lg:flex lg:flex-1">search</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
