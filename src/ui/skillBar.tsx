'use client';

export const SkillBar = ({ percentage }: { percentage: number }) => {
    return (
        <div className="w-full h-6 border rounded-sm">
            <div className="h-full bg-black" style={{ width: `${percentage}%` }} ></div>
        </div >
    )
}