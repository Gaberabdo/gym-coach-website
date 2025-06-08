import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Dumbbell, Facebook, Instagram, Play, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-black">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold text-white">
              ELITE<span className="text-red-600">FIT</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Programs
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#blog" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-red-500 hover:bg-transparent">
              Login
            </Button>
            <Button className="bg-red-600 text-white hover:bg-red-700">Join Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Gym background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  TRANSFORM YOUR <span className="text-red-600">BODY</span> <br />
                  TRANSFORM YOUR <span className="text-red-600">LIFE</span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Expert online coaching tailored to your goals. Get in the best shape of your life with personalized
                  training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Start Your Journey
                  </Button>
                  <Button size="lg" variant="outline" className="border-red-600 text-white hover:bg-red-600/20">
                    <Play className="mr-2 h-4 w-4" /> Watch Intro
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden transform rotate-2 border-4 border-red-600 shadow-lg shadow-red-600/20">
                <Image src="/placeholder.svg?height=500&width=400" alt="Fitness coach" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-zinc-900">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden transform -rotate-2 border-4 border-red-600 shadow-lg shadow-red-600/20">
                <Image src="/placeholder.svg?height=400&width=600" alt="Coach profile" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-600">
                  About Your Coach
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  10+ Years of Experience in Fitness Training
                </h2>
                <p className="text-zinc-400">
                  Certified personal trainer with expertise in strength training, weight loss, and athletic performance.
                  I've helped hundreds of clients achieve their fitness goals through personalized training programs.
                </p>
                <ul className="space-y-2">
                  {[
                    "Certified Personal Trainer (CPT)",
                    "Nutrition Specialist",
                    "Strength & Conditioning Coach",
                    "Online Training Expert",
                  ].map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Learn More About Me</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Training <span className="text-red-600">Programs</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Choose from a variety of specialized programs designed to help you reach your specific fitness goals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Weight Loss",
                  description: "Burn fat and build lean muscle with our comprehensive weight loss program.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Muscle Building",
                  description: "Gain strength and size with our hypertrophy-focused training program.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Athletic Performance",
                  description: "Enhance your speed, power, and agility for improved sports performance.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((program, i) => (
                <Card key={i} className="bg-zinc-900 border-zinc-800 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{program.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why Choose <span className="text-red-600">ELITEFIT</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Our online coaching platform offers everything you need to succeed in your fitness journey.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Personalized Programs",
                  description: "Custom workout plans designed specifically for your goals and fitness level.",
                },
                {
                  title: "Nutrition Guidance",
                  description: "Expert advice on meal planning and nutrition to complement your training.",
                },
                {
                  title: "Progress Tracking",
                  description: "Monitor your improvements with our advanced tracking dashboard.",
                },
                {
                  title: "Video Tutorials",
                  description: "Access to a library of exercise demonstrations and technique guides.",
                },
                {
                  title: "Community Support",
                  description: "Join our community of like-minded individuals on the same journey.",
                },
                {
                  title: "24/7 Coach Access",
                  description: "Get answers to your questions whenever you need them.",
                },
              ].map((feature, i) => (
                <Card key={i} className="bg-black border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Membership <span className="text-red-600">Plans</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Choose the plan that fits your needs and start your transformation today.
              </p>
            </div>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-zinc-900">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      title: "Basic",
                      price: "$49",
                      description: "Perfect for beginners",
                      features: [
                        "Personalized workout plan",
                        "Basic nutrition guide",
                        "Weekly check-ins",
                        "Email support",
                      ],
                    },
                    {
                      title: "Premium",
                      price: "$99",
                      description: "Most popular choice",
                      features: [
                        "Advanced training program",
                        "Detailed nutrition plan",
                        "Bi-weekly video calls",
                        "Priority support",
                        "Progress tracking app",
                      ],
                      highlighted: true,
                    },
                    {
                      title: "Elite",
                      price: "$199",
                      description: "For serious athletes",
                      features: [
                        "Custom training program",
                        "Personalized meal plans",
                        "Weekly 1-on-1 coaching",
                        "24/7 support",
                        "Advanced analytics",
                        "Supplement guidance",
                      ],
                    },
                  ].map((plan, i) => (
                    <Card
                      key={i}
                      className={`${plan.highlighted ? "bg-red-600 border-red-700" : "bg-zinc-900 border-zinc-800"}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-white">{plan.title}</CardTitle>
                        <CardDescription className={plan.highlighted ? "text-white/80" : "text-zinc-400"}>
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                          <span className={plan.highlighted ? "text-white/80" : "text-zinc-400"}> / month</span>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle className={`h-5 w-5 ${plan.highlighted ? "text-white" : "text-red-600"}`} />
                              <span className={plan.highlighted ? "text-white" : "text-zinc-300"}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={`w-full ${plan.highlighted ? "bg-white text-red-600 hover:bg-zinc-100" : "bg-red-600 text-white hover:bg-red-700"}`}
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      title: "Basic",
                      price: "$39",
                      description: "Perfect for beginners",
                      features: [
                        "Personalized workout plan",
                        "Basic nutrition guide",
                        "Weekly check-ins",
                        "Email support",
                      ],
                    },
                    {
                      title: "Premium",
                      price: "$79",
                      description: "Most popular choice",
                      features: [
                        "Advanced training program",
                        "Detailed nutrition plan",
                        "Bi-weekly video calls",
                        "Priority support",
                        "Progress tracking app",
                      ],
                      highlighted: true,
                    },
                    {
                      title: "Elite",
                      price: "$159",
                      description: "For serious athletes",
                      features: [
                        "Custom training program",
                        "Personalized meal plans",
                        "Weekly 1-on-1 coaching",
                        "24/7 support",
                        "Advanced analytics",
                        "Supplement guidance",
                      ],
                    },
                  ].map((plan, i) => (
                    <Card
                      key={i}
                      className={`${plan.highlighted ? "bg-red-600 border-red-700" : "bg-zinc-900 border-zinc-800"}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-white">{plan.title}</CardTitle>
                        <CardDescription className={plan.highlighted ? "text-white/80" : "text-zinc-400"}>
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                          <span className={plan.highlighted ? "text-white/80" : "text-zinc-400"}> / month</span>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle className={`h-5 w-5 ${plan.highlighted ? "text-white" : "text-red-600"}`} />
                              <span className={plan.highlighted ? "text-white" : "text-zinc-300"}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={`w-full ${plan.highlighted ? "bg-white text-red-600 hover:bg-zinc-100" : "bg-red-600 text-white hover:bg-red-700"}`}
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Success <span className="text-red-600">Stories</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Hear from our clients who have transformed their bodies and lives with our programs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah J.",
                  image: "/placeholder.svg?height=200&width=200",
                  quote:
                    "Lost 30 pounds in 3 months with the weight loss program. The personalized approach made all the difference.",
                  program: "Weight Loss Program",
                },
                {
                  name: "Mike T.",
                  image: "/placeholder.svg?height=200&width=200",
                  quote:
                    "Gained 15 pounds of muscle and dramatically improved my strength. The coaching was top-notch.",
                  program: "Muscle Building Program",
                },
                {
                  name: "Jessica R.",
                  image: "/placeholder.svg?height=200&width=200",
                  quote:
                    "As a competitive runner, the athletic performance program helped me shave 5 minutes off my half marathon time.",
                  program: "Athletic Performance Program",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-black border-zinc-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{testimonial.program}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">View All Success Stories</Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Fitness <span className="text-red-600">Blog</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Latest tips, workouts, and nutrition advice to help you on your fitness journey.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "5 Essential Exercises for Building Strength",
                  image: "/placeholder.svg?height=200&width=400",
                  date: "May 10, 2025",
                  excerpt: "Discover the fundamental movements that should be in every strength training program.",
                },
                {
                  title: "Nutrition Myths Debunked",
                  image: "/placeholder.svg?height=200&width=400",
                  date: "May 5, 2025",
                  excerpt: "Separating fact from fiction when it comes to diet and nutrition for fitness goals.",
                },
                {
                  title: "Recovery Strategies for Optimal Performance",
                  image: "/placeholder.svg?height=200&width=400",
                  date: "April 28, 2025",
                  excerpt: "Learn how proper recovery can enhance your results and prevent injuries.",
                },
              ].map((post, i) => (
                <Card key={i} className="bg-zinc-900 border-zinc-800 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-zinc-400 mb-2">{post.date}</div>
                    <CardTitle className="text-white">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0 text-red-600 hover:text-red-500">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">View All Articles</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Body?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join thousands of successful clients who have achieved their fitness goals with our expert coaching.
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-zinc-100">
                Start Your Fitness Journey Today
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-zinc-900">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get in <span className="text-red-600">Touch</span>
                </h2>
                <p className="text-zinc-400">
                  Have questions about our programs or need personalized advice? Reach out to us and we'll get back to
                  you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400">Email</div>
                      <div className="text-white">coach@elitefit.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400">Phone</div>
                      <div className="text-white">(123) 456-7890</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-white placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-white placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-white placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-white placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold text-white">
                  ELITE<span className="text-red-600">FIT</span>
                </span>
              </div>
              <p className="text-zinc-400 mb-4">
                Professional online fitness coaching to help you achieve your health and fitness goals.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-zinc-400 hover:text-red-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-red-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-red-600">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-red-600">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-zinc-400 hover:text-red-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-zinc-400 hover:text-red-600">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-zinc-400 hover:text-red-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-zinc-400 hover:text-red-600">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-zinc-400 hover:text-red-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-zinc-400 hover:text-red-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Weight Loss
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Muscle Building
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Athletic Performance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Nutrition Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    Online Group Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-600">
                    1-on-1 Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Newsletter</h3>
              <p className="text-zinc-400 mb-4">
                Subscribe to our newsletter for fitness tips, workout ideas, and exclusive offers.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-white placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  placeholder="Your email"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ELITEFIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
