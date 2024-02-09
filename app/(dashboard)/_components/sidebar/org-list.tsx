"use client";

import { useOrganizationList } from "@clerk/nextjs";
import OrgItem from "./org-item";

const OrgList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <OrgItem
          id={mem.organization.id}
          key={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default OrgList;
