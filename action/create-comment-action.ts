'use server'

import { getUserData } from "@/utils/clerk";
import { Comments, supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";
import { Redirect } from "next";
import { redirect } from "next/navigation"

export const createCommentAction = async(formData: FormData): Promise<Redirect> => {
    const content = formData.get("content") as string;
    const diary_id = formData.get("diary_id");
    const comment_id = randomUUID();

    const { avatar, email, username } = await getUserData();

    const data: Comments = { comment_id, avatar, email, username, content }

    // Checking comment from post 
    const getComment = await supabase.from("diary").select("comments").eq("id", diary_id).single();

    const existingComment = getComment.data?.comments || []

    const newComment = [...existingComment, data]
    await supabase.from("diary").update({comments: newComment}).eq("id", diary_id)

    return redirect(`/diary/${diary_id}`)
}