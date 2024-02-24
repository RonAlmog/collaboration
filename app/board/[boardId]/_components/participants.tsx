"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const MAX_SHAWN_USERS = 2;
  const hasMoreUsers = users.length > MAX_SHAWN_USERS;
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md px-3 h-12 flex items-center shadow-md">
      {users.slice(0, MAX_SHAWN_USERS).map(({ connectionId, info }) => {
        return (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "T"}
          />
        );
      })}
      {currentUser && (
        <UserAvatar
          src={currentUser.info?.picture}
          name={`${currentUser.info?.name} (You)`}
          fallback={currentUser.info?.name?.[0]}
        />
      )}
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md w-[100px]" />
  );
};
