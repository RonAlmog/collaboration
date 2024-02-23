import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const Participants = (props: Props) => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md px-3 h-12 flex items-center shadow-md">
      list of users
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
