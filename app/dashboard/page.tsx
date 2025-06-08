"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Activity,
  Calendar,
  ChevronRight,
  Dumbbell,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function MemberDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    plan: {
      name: "Premium",
      price: "$99/month",
      nextBilling: "June 15, 2025",
      features: ["Personalized workout plan", "Nutrition guidance", "Weekly check-ins", "Priority support"],
    },
    bodyMetrics: {
      weight: {
        current: 145,
        goal: 135,
        unit: "lbs",
        history: [152, 150, 148, 147, 146, 145],
      },
      bodyFat: {
        current: 24,
        goal: 20,
        unit: "%",
        history: [28, 27, 26, 25, 24.5, 24],
      },
      measurements: {
        chest: 36,
        waist: 28,
        hips: 38,
        arms: 12,
        thighs: 22,
        unit: "inches",
      },
    },
    goals: [
      { name: "Weight Loss", progress: 70 },
      { name: "Strength Gain", progress: 45 },
      { name: "Cardio Endurance", progress: 60 },
    ],
    upcomingWorkouts: [
      { day: "Monday", focus: "Upper Body", time: "6:00 PM", completed: false },
      { day: "Wednesday", focus: "Lower Body", time: "6:30 PM", completed: false },
      { day: "Friday", focus: "Full Body HIIT", time: "7:00 PM", completed: false },
    ],
    recentActivity: [
      { type: "Workout", name: "Full Body Circuit", date: "May 12, 2025", duration: "45 min" },
      { type: "Nutrition", name: "Meal Plan Updated", date: "May 10, 2025", action: "View" },
      { type: "Check-in", name: "Weekly Progress Review", date: "May 8, 2025", action: "View" },
    ],
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-zinc-900">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden md:flex">
          <SidebarHeader className="border-b border-zinc-800 px-6 py-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-white">
                ELITE<span className="text-red-600">FIT</span>
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/workouts">
                    <Dumbbell className="h-5 w-5" />
                    <span>Workouts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/nutrition">
                    <FileText className="h-5 w-5" />
                    <span>Nutrition</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/progress">
                    <Activity className="h-5 w-5" />
                    <span>Progress</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/calendar">
                    <Calendar className="h-5 w-5" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/messages">
                    <MessageSquare className="h-5 w-5" />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-zinc-800 p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-50 bg-black/80 ${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-zinc-900 p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold text-white">
                  ELITE<span className="text-red-600">FIT</span>
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-md bg-zinc-800 px-3 py-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/workouts"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Dumbbell className="h-5 w-5" />
                <span>Workouts</span>
              </Link>
              <Link
                href="/dashboard/nutrition"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText className="h-5 w-5" />
                <span>Nutrition</span>
              </Link>
              <Link
                href="/dashboard/progress"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Activity className="h-5 w-5" />
                <span>Progress</span>
              </Link>
              <Link
                href="/dashboard/calendar"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
              <Link
                href="/dashboard/messages"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
            <div className="mt-auto pt-8 border-t border-zinc-800">
              <Link
                href="/logout"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Navigation */}
          <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6 text-white" />
                </Button>
                <SidebarTrigger className="hidden md:flex" />
                <h1 className="text-xl font-bold text-white">Member Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                  </div>
                  <span className="hidden md:inline text-white">{user.name}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 md:p-6">
            <div className="grid gap-6">
              {/* Welcome Section */}
              <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-full bg-black border-zinc-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">Welcome back, {user.name.split(" ")[0]}!</CardTitle>
                    <CardDescription>Here's an overview of your fitness journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-zinc-400">Current Weight</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white">{user.bodyMetrics.weight.current}</span>
                          <span className="text-zinc-400">{user.bodyMetrics.weight.unit}</span>
                        </div>
                        <span className="text-xs text-green-500">-7 lbs since start</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-zinc-400">Body Fat</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white">{user.bodyMetrics.bodyFat.current}</span>
                          <span className="text-zinc-400">{user.bodyMetrics.bodyFat.unit}</span>
                        </div>
                        <span className="text-xs text-green-500">-4% since start</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-zinc-400">Next Workout</span>
                        <div className="text-lg font-medium text-white">{user.upcomingWorkouts[0].day}</div>
                        <div className="text-sm text-zinc-400">
                          {user.upcomingWorkouts[0].focus} at {user.upcomingWorkouts[0].time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Subscription Plan */}
                <Card className="bg-black border-zinc-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">Your Plan</CardTitle>
                    <CardDescription>Current subscription details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="rounded-lg bg-red-600/10 p-4 border border-red-600/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-white">{user.plan.name}</div>
                            <div className="text-sm text-zinc-400">{user.plan.price}</div>
                          </div>
                          <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center">
                            <Dumbbell className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                        <div className="mt-4 text-sm text-zinc-400">Next billing: {user.plan.nextBilling}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Plan Features</div>
                        <ul className="space-y-1">
                          {user.plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-zinc-400">
                              <CheckCircle className="h-4 w-4 text-red-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="mt-2 border-red-600 text-red-600 hover:bg-red-600/10">
                        Manage Subscription
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Body Metrics */}
                <Card className="bg-black border-zinc-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">Body Metrics</CardTitle>
                    <CardDescription>Your current measurements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-zinc-400">Chest</div>
                          <div className="text-lg font-medium text-white">
                            {user.bodyMetrics.measurements.chest} {user.bodyMetrics.measurements.unit}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-zinc-400">Waist</div>
                          <div className="text-lg font-medium text-white">
                            {user.bodyMetrics.measurements.waist} {user.bodyMetrics.measurements.unit}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-zinc-400">Hips</div>
                          <div className="text-lg font-medium text-white">
                            {user.bodyMetrics.measurements.hips} {user.bodyMetrics.measurements.unit}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-zinc-400">Arms</div>
                          <div className="text-lg font-medium text-white">
                            {user.bodyMetrics.measurements.arms} {user.bodyMetrics.measurements.unit}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Update Measurements</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Goals Progress */}
                <Card className="bg-black border-zinc-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">Goals Progress</CardTitle>
                    <CardDescription>Track your fitness goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.goals.map((goal, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">{goal.name}</span>
                            <span className="text-sm text-zinc-400">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2 bg-zinc-800">
                            <div className="h-full bg-red-600 transition-all" style={{ width: `${goal.progress}%` }} />
                          </Progress>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full border-zinc-800 text-white hover:bg-zinc-800">
                        Adjust Goals
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Weight & Body Fat Progress */}
              <section>
                <Card className="bg-black border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">Progress Tracking</CardTitle>
                    <CardDescription>Your weight and body fat percentage over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="weight">
                      <TabsList className="grid w-full grid-cols-2 mb-6 bg-zinc-900">
                        <TabsTrigger value="weight">Weight</TabsTrigger>
                        <TabsTrigger value="bodyfat">Body Fat</TabsTrigger>
                      </TabsList>
                      <TabsContent value="weight" className="space-y-4">
                        <div className="h-[250px] w-full bg-zinc-900 rounded-lg p-4 flex items-end justify-between">
                          {user.bodyMetrics.weight.history.map((weight, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                              <div
                                className="w-8 bg-red-600 rounded-t-sm"
                                style={{
                                  height: `${(weight / Math.max(...user.bodyMetrics.weight.history)) * 180}px`,
                                }}
                              ></div>
                              <span className="text-xs text-zinc-400">Week {index + 1}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-zinc-400">Starting Weight</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.weight.history[0]} {user.bodyMetrics.weight.unit}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-zinc-400">Current Weight</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.weight.current} {user.bodyMetrics.weight.unit}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-zinc-400">Goal Weight</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.weight.goal} {user.bodyMetrics.weight.unit}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="bodyfat" className="space-y-4">
                        <div className="h-[250px] w-full bg-zinc-900 rounded-lg p-4 flex items-end justify-between">
                          {user.bodyMetrics.bodyFat.history.map((bf, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                              <div
                                className="w-8 bg-red-600 rounded-t-sm"
                                style={{
                                  height: `${(bf / Math.max(...user.bodyMetrics.bodyFat.history)) * 180}px`,
                                }}
                              ></div>
                              <span className="text-xs text-zinc-400">Week {index + 1}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-zinc-400">Starting Body Fat</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.bodyFat.history[0]}
                              {user.bodyMetrics.bodyFat.unit}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-zinc-400">Current Body Fat</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.bodyFat.current}
                              {user.bodyMetrics.bodyFat.unit}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-zinc-400">Goal Body Fat</div>
                            <div className="text-lg font-medium text-white">
                              {user.bodyMetrics.bodyFat.goal}
                              {user.bodyMetrics.bodyFat.unit}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              {/* Upcoming Workouts & Recent Activity */}
              <section className="grid gap-6 md:grid-cols-2">
                <Card className="bg-black border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Workouts</CardTitle>
                    <CardDescription>Your scheduled training sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.upcomingWorkouts.map((workout, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-red-600/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-red-600/10 flex items-center justify-center">
                              <Dumbbell className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {workout.day}: {workout.focus}
                              </div>
                              <div className="text-sm text-zinc-400">{workout.time}</div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-800 hover:border-red-600 hover:bg-red-600/10"
                          >
                            View
                          </Button>
                        </div>
                      ))}
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Full Schedule</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription>Your latest fitness activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.recentActivity.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg border border-zinc-800"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-red-600/10 flex items-center justify-center">
                              {activity.type === "Workout" ? (
                                <Dumbbell className="h-5 w-5 text-red-600" />
                              ) : activity.type === "Nutrition" ? (
                                <FileText className="h-5 w-5 text-red-600" />
                              ) : (
                                <Activity className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-white">{activity.name}</div>
                              <div className="text-sm text-zinc-400">
                                {activity.date}
                                {activity.duration && ` • ${activity.duration}`}
                              </div>
                            </div>
                          </div>
                          {activity.action && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-500 hover:bg-transparent"
                            >
                              {activity.action} <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" className="w-full border-zinc-800 text-white hover:bg-zinc-800">
                        View All Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function CheckCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
