import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarDays } from "lucide-react";
import { TeacherAssistantCard } from "./components/teacher-assistant-card";
import { TAs } from "./data/ta-data";

export default function Information() {
  return (
    <>
      <h1 className="font-extrabold text-xl">General Information</h1>

      <h2 className="font-bold text-lg mt-6">Collaboration policy</h2>

      <p>
        Please do not publish your code, or make it available to current/future
        students. Please, do not put your code in GitHub or any other git
        versioning system - like Atlassian, Gitlab. You may find it convenient
        to use La Salle URL Atlassian, but be sure to create a private
        repository.
      </p>

      <h2 className="font-bold text-lg mt-6">Staff</h2>

      <Alert className="w-fit">
        <CalendarDays className="h-6 w-6" />
        <AlertTitle>Office hour appointment</AlertTitle>
        <AlertDescription>
          Appointments with staff outside of hours can be scheduled via email.
        </AlertDescription>
      </Alert>

      <h3 className="font-bold my-2">Teaching Assistant</h3>

      {Object.entries(TAs).map(([year, tas]) => (
        <>
          <h4 className="font-bold mb-1.5">{year}</h4>
          {tas === null ? (
            <p>TBA</p>
          ) : (
            <>
              {tas.map((ta) => (
                <TeacherAssistantCard key={ta.name} ta={ta} />
              ))}
            </>
          )}
        </>
      ))}
    </>
  );
}
