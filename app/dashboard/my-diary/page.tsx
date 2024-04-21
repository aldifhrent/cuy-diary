import Wrapper from "@/components/global/wrapper";
import React from "react";
import { supabase } from "@/utils/supabase";
import CardDiaries from "@/components/global/(diary)/card-diaries";
import PostContent from "@/components/global/(diary)/post-content";
import { getUserData } from "@/utils/clerk";
const MyDiary = async () => {
  const { email } = await getUserData();
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);

  if (error) return <p>Please reload the page...</p>;
  return (
    <Wrapper title="My Diary">
      <div className="grid md:grid-cols-3 gap-4">
        {data?.map((diary) => {
          return (
            <PostContent
              key={diary.id}
              diary_id={diary.id}
              avatar={diary.avatar}
              email={diary.email}
              content={diary.content}
              username={diary.username}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default MyDiary;
