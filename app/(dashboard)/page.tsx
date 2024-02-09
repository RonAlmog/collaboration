import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-6 p-24">
      <div>this is for Authenticated users only</div>
      <div>
        <UserButton />
      </div>
    </main>
  );
}
