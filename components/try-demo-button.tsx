"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

interface TryDemoButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export function TryDemoButton({ size = "lg", className = "", children, showIcon = true }: TryDemoButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("openSolsticeChat"));
  };

  return (
    <Button 
      size={size} 
      className={`bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white ${className}`}
      onClick={handleClick}
    >
      {children || "Try Free Demo"}
      {showIcon && <Sun className="ml-2 h-5 w-5" />}
    </Button>
  );
}
