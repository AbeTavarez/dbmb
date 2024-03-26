"use client";
import { Member } from "@/types";
import { ChangeEvent, useState } from "react";
import { editMemberAction } from "@/actions";

interface MemberEditFormProps {
  member: Member;
}

export default function MemberEditForm(props: MemberEditFormProps) {
  const [member, setMember] = useState(props.member);

  //   HANDLE CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <form action={editMemberAction.bind(null, member)}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-300 p-5 rounded">
        <h3 className="font-bold m-3">Edit Member</h3>

        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded p-2 w-full"
            defaultValue={member.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            className="border rounded p-2 w-full"
            defaultValue={member.avatar}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-green-500 p-2 w-full text-white font-bold"
        >
          Update
        </button>
      </div>
    </form>
  );
}
