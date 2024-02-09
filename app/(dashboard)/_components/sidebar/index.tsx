import NewButton from "./new-button";
import OrgList from "./org-list";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] p-3 flex flex-col gap-y-4 text-white">
      <OrgList />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
