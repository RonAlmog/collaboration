"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NewButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </div>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default NewButton;
