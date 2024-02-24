import React from "react";
import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import CanvasLoading from "./_components/canvas-loading";
// import { useSelf } from "@/liveblocks.config";

interface BoardPageProps {
  params: { boardId: string };
}

const BoardPage = ({ params }: BoardPageProps) => {
  // const { name, picture } = useSelf((me) => me.info);
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardPage;
