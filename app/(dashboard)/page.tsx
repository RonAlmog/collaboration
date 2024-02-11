import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";

export default function Dashboard() {
  return (
    <main className="flex-1 h-[calc(100%-80px)] p-6">
      <EmptyOrg />
    </main>
  );
}
