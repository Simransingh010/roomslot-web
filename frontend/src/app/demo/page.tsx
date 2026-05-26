"use client";

import * as React from "react";
import {
  Sparkles,
  Info,
  Calendar,
  Layers,
  Send,
  User,
  Mail,
  Lock,
  Plus,
  Trash2,
  MoreVertical,
  ExternalLink,
  Edit2
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DemoPage() {
  const [loadingBtn, setLoadingBtn] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("Active");
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) {
      setInputError("Your username cannot be blank");
    } else {
      setInputError("");
      alert(`Success! Created profile for ${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <div className="flex flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Sidebar */}
        <Sidebar />

        {/* Dashboard Area */}
        <main className="flex-1 py-8 md:pl-8 overflow-hidden space-y-8 animate-fade-in">
          {/* Header Description */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 items-center justify-center rounded-full bg-primary/10 px-2.5 text-xs font-semibold text-primary">
                v1.0.0 Stable
              </span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Shadcn Component System
            </h1>
            <p className="max-w-2xl text-muted-foreground font-light leading-relaxed">
              Explore your reusable library folder, custom configured for Tailwind CSS v4 and React 19. All files are styled with harmonious HSL coordinates, subtle glassmorphic elements, and micro-interactions.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card hoverEffect>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Listings</CardTitle>
                <Badge variant="success">Online</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142 Rooms</div>
                <p className="text-xs text-muted-foreground font-light mt-1">+12% increase from yesterday</p>
              </CardContent>
            </Card>

            <Card hoverEffect>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
                <Badge variant="info">Updated</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,829 Slots</div>
                <p className="text-xs text-muted-foreground font-light mt-1">98.4% success booking rate</p>
              </CardContent>
            </Card>

            <Card hoverEffect>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Verification Ratio</CardTitle>
                <Badge variant="warning">Pending</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.3% Ratio</div>
                <p className="text-xs text-muted-foreground font-light mt-1">8 accounts currently in queue</p>
              </CardContent>
            </Card>
          </div>

          {/* Core Components Playground */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Card 1: Buttons Gallery */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>Interactive Buttons</span>
                </CardTitle>
                <CardDescription className="font-light">
                  A variety of sleek buttons with responsive micro-states and transition delays.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3 flex-1">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline Border</Button>
                <Button variant="ghost">Ghost Option</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="glass">Glassmorphic</Button>
                <Button variant="link">Underlined Link</Button>

                {/* Loading Button Switch */}
                <Button
                  variant="default"
                  isLoading={loadingBtn}
                  onClick={() => {
                    setLoadingBtn(true);
                    setTimeout(() => setLoadingBtn(false), 2500);
                  }}
                >
                  Click to Load
                </Button>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 border-t rounded-b-lg">
                <p className="text-xs text-muted-foreground font-light flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-primary" />
                  Loading state automatically locks keyboard focus and cursor interaction.
                </p>
              </CardFooter>
            </Card>

            {/* Card 2: Interactive Modals & Dropdown Context */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Dialogs & Floating Menus</span>
                </CardTitle>
                <CardDescription className="font-light">
                  Highly accessible Radix UI dialog popups and floating item action skeletons.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-4 flex-1">
                
                {/* Modal dialog trigger */}
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog Modal</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <span>Reserve Room Slot</span>
                      </DialogTitle>
                      <DialogDescription className="font-light">
                        Review your reservation and click complete to secure this workspace immediately.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted border my-2">
                      <Calendar className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Standard Conference Room B</p>
                        <p className="text-xs text-muted-foreground font-light">May 28, 2026 at 2:00 PM - 4:00 PM</p>
                      </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-0 mt-4">
                      <Button variant="ghost" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="default" onClick={() => {
                        alert("Room Reservation Confirmed!");
                        setModalOpen(false);
                      }}>
                        Confirm Booking
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Dropdown Menu Trigger */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="gap-1">
                      <span>Row Actions</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 mt-1">
                    <DropdownMenuLabel>Item Action Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2">
                      <Edit2 className="h-4 w-4 text-muted-foreground" />
                      <span>Edit details</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <span>View live site</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive gap-2">
                      <Trash2 className="h-4 w-4" />
                      <span>Delete booking</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Dynamic Status Dropdown Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-medium">State:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="glass" className="h-8 px-2.5 text-xs">
                        {selectedStatus}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32">
                      <DropdownMenuItem onClick={() => setSelectedStatus("Active")}>Active</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("Muted")}>Muted</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("Paused")}>Paused</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </CardContent>
              <CardFooter className="bg-muted/50 p-4 border-t rounded-b-lg">
                <p className="text-xs text-muted-foreground font-light flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-primary" />
                  Floating items shift seamlessly according to browser boundaries.
                </p>
              </CardFooter>
            </Card>

            {/* Card 3: Interactive Verification Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Validation Forms & Inputs</span>
                </CardTitle>
                <CardDescription className="font-light">
                  Input fields with sleek focus boxes, invalid error feedback loops, and icon slots.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-foreground">User Name</label>
                      <Input
                        type="text"
                        placeholder="Simran Singh"
                        icon={<User className="h-4 w-4" />}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        error={inputError}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="simran@roomslot.com"
                        icon={<Mail className="h-4 w-4" />}
                        defaultValue="simran@roomslot.com"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-foreground">Locker Password</label>
                    <Input
                      type="password"
                      placeholder="••••••••••••"
                      icon={<Lock className="h-4 w-4" />}
                    />
                  </div>

                  <Button type="submit" variant="default" className="gap-2">
                    <Send className="h-4 w-4" />
                    <span>Submit Profile Info</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Card 4: Badges & Status Pills */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>Theme Badges & Pill Indicators</span>
                </CardTitle>
                <CardDescription className="font-light">
                  Used for status tracking, categories, tags, and general metadata indicators.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2.5">
                <Badge variant="default">Default Dark</Badge>
                <Badge variant="secondary">Secondary Slate</Badge>
                <Badge variant="outline">Outline Tag</Badge>
                <Badge variant="success">Completed Success</Badge>
                <Badge variant="warning">Review Required</Badge>
                <Badge variant="destructive">Error Destructive</Badge>
                <Badge variant="info">Informative Blue</Badge>
              </CardContent>
            </Card>

          </div>
        </main>
      </div>

      {/* Structured Multi-Column Footer */}
      <Footer />
    </div>
  );
}
