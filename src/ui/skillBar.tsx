"use client";

export const SkillBar = ({
  percentage,
  bgClass,
  borderClass,
}: {
  percentage: number;
  bgClass?: string;
  borderClass?: string;
}) => {
  return (
    <div
      className={`w-full h-3 border ${borderClass ?? "border-secondary"} rounded-full`}
    >
      <div
        className={`h-full ${bgClass ?? "bg-secondary"} rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
