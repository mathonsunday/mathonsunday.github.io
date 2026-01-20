import React from "react";

interface CardProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  glow = false,
  className = "",
  onClick,
}: CardProps) {
  return (
    <div
      className={`
        bg-[rgba(13,13,18,0.7)]
        backdrop-blur-md
        border border-[rgba(77,208,225,0.2)]
        rounded-lg
        p-6
        transition-all
        duration-800
        ${glow ? "card-glow" : "hover:border-[rgba(77,208,225,0.5)]"}
        ${className}
      `}
      onClick={onClick}
      style={{
        transitionTimingFunction: "ease-out",
      }}
    >
      {children}
    </div>
  );
}
