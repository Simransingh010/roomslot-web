"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  UserCheck,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  FolderLock,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  subItems?: { title: string; href: string }[];
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const menuItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/demo",
      icon: LayoutDashboard,
    },
    {
      title: "My Bookings",
      href: "#bookings",
      icon: CalendarDays,
      badge: "3 New",
      subItems: [
        { title: "Upcoming Slots", href: "#upcoming" },
        { title: "Booking History", href: "#history" },
      ],
    },
    {
      title: "Verification",
      href: "#verification",
      icon: UserCheck,
    },
    {
      title: "Payments",
      href: "#payments",
      icon: CreditCard,
    },
    {
      title: "Admin Lockers",
      href: "#lockers",
      icon: FolderLock,
    },
  ];

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r bg-card text-card-foreground transition-all duration-300 relative h-[calc(100vh-4rem)] sticky top-16",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Collapse Trigger Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md hover:bg-accent text-foreground hover:scale-105 active:scale-95 cursor-pointer focus:outline-none z-10"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3.5 w-3.5" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5" />
        )}
      </button>

      {/* Main Menu Items */}
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1.5 scrollbar-thin">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href));
          const hasSubItems = !!item.subItems;
          const isSubOpen = openSubMenus[item.title];

          return (
            <div key={item.title} className="w-full">
              {hasSubItems ? (
                // Collapsible Toggle Header
                <button
                  onClick={() => {
                    if (isCollapsed) {
                      setIsCollapsed(false);
                      setOpenSubMenus({ [item.title]: true });
                    } else {
                      toggleSubMenu(item.title);
                    }
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground group focus:outline-none cursor-pointer",
                    isActive ? "text-primary font-semibold bg-primary/5" : "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform group-hover:scale-105",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    {!isCollapsed && <span>{item.title}</span>}
                  </div>
                  {!isCollapsed && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform duration-200",
                        isSubOpen && "transform rotate-180"
                      )}
                    />
                  )}
                </button>
              ) : (
                // Simple Link
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground group relative",
                    isActive ? "text-primary font-semibold bg-primary/5" : "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform group-hover:scale-105",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    {!isCollapsed && <span>{item.title}</span>}
                  </div>

                  {/* Dynamic Hover / Active vertical accent bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-primary rounded-r-md" />
                  )}

                  {!isCollapsed && item.badge && (
                    <span className="flex h-5 items-center justify-center rounded-full bg-primary/10 px-2.5 text-[10px] font-semibold text-primary">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}

              {/* Sub-menu panel */}
              {hasSubItems && isSubOpen && !isCollapsed && (
                <div className="pl-11 pr-2 py-1 space-y-1 animate-fade-in">
                  {item.subItems.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className={cn(
                          "block py-1.5 px-3 rounded-md text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          isSubActive ? "text-primary font-semibold bg-primary/5" : "text-muted-foreground"
                        )}
                      >
                        {sub.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Profile/Quick Settings Slot */}
      <div className="border-t p-4 flex flex-col gap-2">
        <Link
          href="#settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
          )}
        >
          <Settings className="h-5 w-5 shrink-0 group-hover:rotate-45 transition-transform duration-300" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <Link
          href="#help"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
          )}
        >
          <HelpCircle className="h-5 w-5 shrink-0 group-hover:scale-105 transition-transform" />
          {!isCollapsed && <span>Help Center</span>}
        </Link>
      </div>
    </aside>
  );
}
