"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface DashboardProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
export default function Dashboard({ searchParams }: DashboardProps) {
  const { organization } = useOrganization();
  return (
    <main className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </main>
  );
}
