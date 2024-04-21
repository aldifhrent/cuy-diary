'use client'

import Wrapper from "@/components/global/wrapper";
import { supabase } from "@/utils/supabase";
import React from "react";
import Image from "next/image";
import CreateCommentForm from "@/components/auth/create-comment";
import CommentList from "@/components/global/(diary)/comment-list";
import { useUser } from "@clerk/nextjs";
type ParamsProps = {
  params: {
    id: number;
  };
};
const DiaryPageId = async ({ params }: ParamsProps) => {
  const { isSignedIn} = useUser();
  const { data, error,  } = await supabase
    .from("diary")
    .select()
    .eq("id", params.id)
    .single();

  const posted_at = new Date(data.created_at).toLocaleDateString();

  if (error) return <p>Please reload this page...</p>;
  return (
    <Wrapper title="My Diary">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src={data.avatar} alt={data.avatar} width={300} height={300} />
        </div>

        <p className="text-center">Posted at {posted_at}</p>
        <h3 className="italic">{data.username || data.email}</h3>
        <p>{data.content}</p>
        <CommentList diary_id={data.id} />
        {isSignedIn ? <CreateCommentForm diary_id={data.id} /> : ""}
      </div>
    </Wrapper>
  );
};

export default DiaryPageId;
