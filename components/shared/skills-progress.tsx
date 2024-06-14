"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type SkillsProgressProps = {
  skillValue: number;
    skillTitle: string;
};

export default function SkillsProgress({ skillValue,skillTitle }: SkillsProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skillValue), 300);
    return () => clearTimeout(timer);
  }, [skillValue]);

  return (
    <div>
      <span className="text-clamp-xs font-semibold">
        {skillTitle}
      </span>
      <div className="relative mt-3 w-full text-start">
        <span
          className={`text-clamp-xs absolute -top-7 left-4 block w-full text-black transition-all
            duration-1000
             ${progress > 0 ? "opacity-100" : "opacity-0"}
             `}
          style={{
            transform: `translateX(calc(${progress}% - 40px))`,
          }}
        >
          {progress}%
        </span>
        <Progress value={progress} className="w-full bg-white" />
      </div>
    </div>
  );
}
