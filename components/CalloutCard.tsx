import React from "react";

type CalloutType = "risk" | "control" | "cost" | "default";

interface CalloutCardProps {
  type: CalloutType;
  title: string;
  children: React.ReactNode;
  showLabel?: boolean;
}

const typeStyles: Record<CalloutType, { border: string; bg: string; badge: string }> = {
  risk: { 
    border: "border-l-amber-500", 
    bg: "bg-amber-50/50",
    badge: "bg-amber-100 text-amber-800"
  },
  control: { 
    border: "border-l-accentBlue", 
    bg: "bg-blue-50/50",
    badge: "bg-blue-100 text-blue-800"
  },
  cost: { 
    border: "border-l-darkGreen", 
    bg: "bg-green-50/50",
    badge: "bg-green-100 text-green-800"
  },
  default: {
    border: "transparent",
    bg: "transparent",
    badge: "transparent"
  },
};

const typeLabels: Record<CalloutType, string> = {
  risk: "Risk",
  control: "Control",
  cost: "Cost",
  default: "",
};

export default function CalloutCard({ type = "default", showLabel = true,  title, children }: CalloutCardProps) {
  const styles = typeStyles[type];
  return (
    <div className={`border-l-2 ${styles.border} ${styles.bg} border border-gray-200/60 p-4 sm:p-5 rounded-xl`}>
      {showLabel && (
        <div className={`inline-block text-xs uppercase tracking-wider font-semibold mb-2 px-2.5 py-1 rounded-md ${styles.badge}`}>
          {typeLabels[type]}
        </div>
      )}
      <h4 className="text-base sm:text-lg font-semibold text-textPrimary mb-1 sm:mb-2">{title}</h4>
      <div className="text-textPrimary space-y-1 text-sm sm:text-base">{children}</div>
    </div>
  );
}
