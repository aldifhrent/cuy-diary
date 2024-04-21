'use server' 
import { getUserData } from "@/utils/clerk";
import { redirect } from "next/navigation";
import { Diary, supabase } from "@/utils/supabase";

export const createDiaryAction = async (formData: FormData): Promise<void> => {
  const content = formData.get("content") as string;
  const { avatar, email, username } = await getUserData();

  // const data: Diary = { content, email, username, avatar }
  // await supabase.from("diary").insert(data);
  return redirect("/dashboard/my-diary")
};
