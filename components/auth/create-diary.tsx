import { createDiaryAction } from "@/action/create-diary-action";
import React from "react";

const CreateDiaryForm = (): React.ReactElement => {
  return (
    <div>
      <form action={createDiaryAction} className="flex flex-col gap-4 max-w-xl mx-auto">
        <textarea
          placeholder="isi diary kamu disini..."
            name="content"
          className="h-32 rounded rounded-xl p-4 text-lg border border-primary"
        />
        <button className="btn btn-primary" type="submit">
          Create Now
        </button>
      </form>
    </div>
  );
};

export default CreateDiaryForm;
