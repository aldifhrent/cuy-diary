import React from 'react'
import PostContent from './post-content'
import { supabase } from '@/utils/supabase'
const CardDiaries = async() => {
  const { data, error } = await supabase.from("diary").select().order("created_at", { ascending: false});

  if(error) return;
  console.log(data);
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data?.map((diary) => {
        return <PostContent key={diary.id} diary_id={diary.id}
        avatar={diary.avatar} email={diary.email} content={diary.content} username={diary.username}/>
      })}
    </div>
  )
}

export default CardDiaries
