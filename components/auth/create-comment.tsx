'use client'

import { createCommentAction } from "@/action/create-comment-action";
import React, { useRef, RefObject } from "react";

type ParamsProps = {
    diary_id: number;
}
const CreateCommentForm = ({diary_id}: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)
  const resetForm = ():void => {
    setTimeout(() => {
      formRef.current?.reset()
    }, 1000)
  }
  return (
    <div>
      <form action={createCommentAction}className="flex flex-col gap-4 mx-auto" ref={formRef} onSubmit={resetForm}>
        <textarea
          placeholder="Tuliskan komentarmu disini"
          name="content"
          className="h-32 rounded rounded-xl p-4 text-lg border border-primary"
        />
        <input type="hidden" value={diary_id} name="diary_id"/>
        <button className="btn btn-primary max-w-sm mx-auto w-full" type="submit">
          Comment Now
        </button>
      </form>
    </div>
  );
};

export default CreateCommentForm;
