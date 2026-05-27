"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  activeItem: string | null;
  toggleItem: (value: string) => void;
} | null>(null);

export function Accordion({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const toggleItem = React.useCallback((value: string) => {
    setActiveItem((prev) => (prev === value ? null : value));
  }, []);

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem }}>
      <div className={cn("space-y-1.5", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <div
      className={cn("border-b border-border/40 pb-2", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value?: string }>, { value });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");
  const isOpen = context.activeItem === value;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-bold text-sm tracking-wide text-foreground transition-all hover:text-primary cursor-pointer group",
        className
      )}
      onClick={() => value && context.toggleItem(value)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-foreground",
          isOpen && "rotate-180 text-primary"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value?: string }) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");
  const isOpen = context.activeItem === value;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-300 pb-4 text-muted-foreground font-light leading-relaxed animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
