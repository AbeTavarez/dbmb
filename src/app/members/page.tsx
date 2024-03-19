import MemberItem from "@/components/member-item";
// import { members } from "@/db";

// later
import dbClient from "@/db/mongodb";
import { ObjectId } from "mongodb";
import { Member } from "@/types";

export default async function MembersPage() {

  const members = await dbClient
    .db("next-members")
    .collection<Member>("members")
    .find()
    .toArray();

    console.log(members);
    


  return (
    <div className="container mx-auto">
      <h1 className="text-2xl mb-5">Members Page</h1>

      <div className="flex flex-wrap gap-5">
        {members.map((member) => (
          <MemberItem member={member} key={`${new ObjectId(member._id)}`} />
        ))}
      </div>
    </div>
  );
}
