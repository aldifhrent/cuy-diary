import { Comments, supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  diary_id: number;
};
const CommentList = async ({ diary_id }: ParamsProps) => {
  const { data } = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  if(!data?.comments?.length) return null;
  return (
    <div className="flex flex-col gap-4">
        <div className="divider"></div>
      {data?.comments.map((comment: Comments) => {
        return (
          <div className="card card-body card-bordered p-4 bg-base-700">
            <div className="flex items-center ">
              <Image
                src={comment.avatar as string}
                alt={comment.avatar as string}
                height={50}
                width={50}
                className="rounded-full bg-primary"
              />
              <p>{comment.username || comment.email}</p>
            </div>

            <p>{comment.content}</p>
          </div>
        );
      })}
      <div className="divider"></div>
    </div>
  );
};

export default CommentList;
