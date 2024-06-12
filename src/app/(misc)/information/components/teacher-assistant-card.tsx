"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TA } from "../data/ta-data";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import React from "react";

export function TeacherAssistantCard({ ta }: { ta: TA }) {
  const copyPostURLToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={ta.avatar} alt={ta.name} />
        <AvatarFallback>{ta.acronym}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-bold">{ta.name}</div>
        {ta.email.map((mail) => (
          <div className="flex" key={mail}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-5 h-5 group"
                  onClick={() => copyPostURLToClipboard(mail)}
                >
                  <Copy
                    size={14}
                    color="gray"
                    className="group-hover:stroke-black"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy address</p>
              </TooltipContent>
            </Tooltip>
            <a className="ml-2 text-gray-500" href={`mailto:${mail}`}>
              {mail}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
