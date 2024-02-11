import { UserButton } from "@clerk/nextjs";
import SearchInput from "./search-input";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
