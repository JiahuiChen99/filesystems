import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TA } from "../data/ta-data";

export function TeacherAssistantCard({ ta }: { ta: TA }) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={ta.avatar} alt={ta.name} />
        <AvatarFallback>{ta.acronym}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-bold">{ta.name}</div>
        <div>{ta.email}</div>
      </div>
    </div>
  );
}
