"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, CreditCard, Dumbbell, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubscriptionPage() {
  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = {
    monthly: [
      {
        id: "basic",
        name: "Basic",
        price: "$49",
        description: "Perfect for beginners",
        features: ["Personalized workout plan", "Basic nutrition guide", "Weekly check-ins", "Email support"],
      },
      {
        id: "premium",
        name: "Premium",
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
        id: "elite",
        name: "Elite",
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
    ],
    yearly: [
      {
        id: "basic",
        name: "Basic",
        price: "$39",
        description: "Perfect for beginners",
        features: ["Personalized workout plan", "Basic nutrition guide", "Weekly check-ins", "Email support"],
      },
      {
        id: "premium",
        name: "Premium",
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
        id: "elite",
        name: "Elite",
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
    ],
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const getSelectedPlanDetails = () => {
    return plans[billingCycle].find((plan) => plan.id === selectedPlan)
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold text-white">
              ELITE<span className="text-red-600">FIT</span>
            </span>
          </div>
          <Link href="/" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-10">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= i ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                    }`}
                  >
                    {i}
                  </div>
                  <span className={`mt-2 text-sm ${step >= i ? "text-white" : "text-zinc-400"}`}>
                    {i === 1 ? "Choose Plan" : i === 2 ? "Your Details" : "Payment"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className={`h-1 ${step >= 2 ? "bg-red-600" : "bg-zinc-800"}`}></div>
              <div className={`h-1 ${step >= 3 ? "bg-red-600" : "bg-zinc-800"}`}></div>
            </div>
          </div>

          {/* Step 1: Choose Plan */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">Choose Your Plan</h1>
                <p className="mt-2 text-zinc-400">Select the membership plan that best fits your fitness goals</p>
              </div>

              <Tabs defaultValue="monthly" value={billingCycle} onValueChange={setBillingCycle} className="w-full">
                <div className="flex justify-center mb-6">
                  <TabsList className="grid w-full max-w-md grid-cols-2 bg-zinc-800">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="monthly" className="space-y-6">
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                    <div className="grid gap-6 md:grid-cols-3">
                      {plans.monthly.map((plan) => (
                        <div key={plan.id} className="relative">
                          <RadioGroupItem value={plan.id} id={`plan-monthly-${plan.id}`} className="sr-only" />
                          <Label htmlFor={`plan-monthly-${plan.id}`} className="cursor-pointer">
                            <Card
                              className={`h-full transition-all ${
                                selectedPlan === plan.id ? "border-red-600 ring-2 ring-red-600" : "border-zinc-800"
                              } ${plan.highlighted ? "bg-black" : "bg-zinc-900"}`}
                            >
                              {plan.highlighted && (
                                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                                  <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    Most Popular
                                  </span>
                                </div>
                              )}
                              <CardHeader>
                                <CardTitle className="text-white">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="mb-4">
                                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                                  <span className="text-zinc-400"> / month</span>
                                </div>
                                <ul className="space-y-2">
                                  {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2">
                                      <CheckCircle className="h-5 w-5 text-red-600" />
                                      <span className="text-zinc-300">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </TabsContent>

                <TabsContent value="yearly" className="space-y-6">
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                    <div className="grid gap-6 md:grid-cols-3">
                      {plans.yearly.map((plan) => (
                        <div key={plan.id} className="relative">
                          <RadioGroupItem value={plan.id} id={`plan-yearly-${plan.id}`} className="sr-only" />
                          <Label htmlFor={`plan-yearly-${plan.id}`} className="cursor-pointer">
                            <Card
                              className={`h-full transition-all ${
                                selectedPlan === plan.id ? "border-red-600 ring-2 ring-red-600" : "border-zinc-800"
                              } ${plan.highlighted ? "bg-black" : "bg-zinc-900"}`}
                            >
                              {plan.highlighted && (
                                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                                  <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    Most Popular
                                  </span>
                                </div>
                              )}
                              <CardHeader>
                                <CardTitle className="text-white">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="mb-4">
                                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                                  <span className="text-zinc-400"> / month</span>
                                  <div className="text-sm text-red-500 mt-1">Save 20% with annual billing</div>
                                </div>
                                <ul className="space-y-2">
                                  {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2">
                                      <CheckCircle className="h-5 w-5 text-red-600" />
                                      <span className="text-zinc-300">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-white">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">Your Details</h1>
                <p className="mt-2 text-zinc-400">Tell us a bit about yourself to personalize your experience</p>
              </div>

              <Card className="bg-black border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="bg-zinc-900 border-zinc-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="bg-zinc-900 border-zinc-800 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-zinc-900 border-zinc-800 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-zinc-900 border-zinc-800 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Fitness Profile</CardTitle>
                  <CardDescription>This helps us customize your training program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-white">
                        Age
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        className="bg-zinc-900 border-zinc-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-white">
                        Gender
                      </Label>
                      <select
                        id="gender"
                        className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-white">
                        Height (cm)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="Enter your height"
                        className="bg-zinc-900 border-zinc-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-white">
                        Weight (kg)
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Enter your weight"
                        className="bg-zinc-900 border-zinc-800 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fitness-goal" className="text-white">
                      Primary Fitness Goal
                    </Label>
                    <select
                      id="fitness-goal"
                      className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                    >
                      <option value="">Select your primary goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="strength">Strength Improvement</option>
                      <option value="endurance">Endurance Building</option>
                      <option value="overall-fitness">Overall Fitness</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-white">
                      Fitness Experience Level
                    </Label>
                    <select
                      id="experience"
                      className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-6 months)</option>
                      <option value="intermediate">Intermediate (6 months - 2 years)</option>
                      <option value="advanced">Advanced (2+ years)</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button onClick={prevStep} variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-white">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">Payment Details</h1>
                <p className="mt-2 text-zinc-400">Complete your subscription with secure payment</p>
              </div>

              <div className="grid gap-6 md:grid-cols-5">
                <div className="md:col-span-3 space-y-6">
                  <Card className="bg-black border-zinc-800">
                    <CardHeader>
                      <CardTitle className="text-white">Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="text-white">
                          Card Number
                        </Label>
                        <div className="relative">
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            className="bg-zinc-900 border-zinc-800 text-white pl-10"
                          />
                          <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-zinc-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-white">
                            Expiry Date
                          </Label>
                          <Input id="expiry" placeholder="MM/YY" className="bg-zinc-900 border-zinc-800 text-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc" className="text-white">
                            CVC
                          </Label>
                          <Input id="cvc" placeholder="123" className="bg-zinc-900 border-zinc-800 text-white" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name-on-card" className="text-white">
                          Name on Card
                        </Label>
                        <Input
                          id="name-on-card"
                          placeholder="Enter the name on your card"
                          className="bg-zinc-900 border-zinc-800 text-white"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black border-zinc-800">
                    <CardHeader>
                      <CardTitle className="text-white">Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-white">
                          Street Address
                        </Label>
                        <Input
                          id="address"
                          placeholder="Enter your street address"
                          className="bg-zinc-900 border-zinc-800 text-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-white">
                            City
                          </Label>
                          <Input
                            id="city"
                            placeholder="Enter your city"
                            className="bg-zinc-900 border-zinc-800 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state" className="text-white">
                            State/Province
                          </Label>
                          <Input
                            id="state"
                            placeholder="Enter your state"
                            className="bg-zinc-900 border-zinc-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="zip" className="text-white">
                            ZIP/Postal Code
                          </Label>
                          <Input
                            id="zip"
                            placeholder="Enter your ZIP code"
                            className="bg-zinc-900 border-zinc-800 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country" className="text-white">
                            Country
                          </Label>
                          <select
                            id="country"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                          >
                            <option value="">Select your country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <div className="sticky top-6">
                    <Card className="bg-black border-zinc-800">
                      <CardHeader>
                        <CardTitle className="text-white">Order Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg bg-zinc-900 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-lg font-bold text-white">{getSelectedPlanDetails()?.name} Plan</div>
                              <div className="text-sm text-zinc-400">
                                {billingCycle === "yearly" ? "Annual" : "Monthly"} billing
                              </div>
                            </div>
                            <div className="text-lg font-bold text-white">
                              {getSelectedPlanDetails()?.price}
                              <span className="text-sm text-zinc-400">{billingCycle === "yearly" ? "/mo" : ""}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Subtotal</span>
                            <span className="text-white">{getSelectedPlanDetails()?.price}</span>
                          </div>
                          {billingCycle === "yearly" && (
                            <div className="flex justify-between text-sm">
                              <span className="text-zinc-400">Yearly discount</span>
                              <span className="text-green-500">-20%</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Tax</span>
                            <span className="text-white">Calculated at checkout</span>
                          </div>
                          <div className="border-t border-zinc-800 my-2"></div>
                          <div className="flex justify-between font-medium">
                            <span className="text-white">Total</span>
                            <span className="text-white">
                              {getSelectedPlanDetails()?.price}
                              {billingCycle === "yearly" ? " × 12" : "/month"}
                            </span>
                          </div>
                          {billingCycle === "yearly" && (
                            <div className="text-right text-sm text-zinc-400">Billed annually</div>
                          )}
                        </div>

                        <div className="rounded-lg bg-zinc-900 p-4 text-sm text-zinc-400">
                          <div className="flex items-start gap-2">
                            <Lock className="h-4 w-4 mt-0.5 text-red-600" />
                            <div>
                              <p className="text-white font-medium mb-1">Secure Checkout</p>
                              <p>
                                Your payment information is encrypted and secure. We never store your full credit card
                                details.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-4">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Complete Subscription</Button>
                        <p className="text-xs text-zinc-400 text-center">
                          By completing your subscription, you agree to our{" "}
                          <Link href="#" className="text-red-500 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-red-500 hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button onClick={prevStep} variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-red-600" />
              <span className="text-lg font-bold text-white">
                ELITE<span className="text-red-600">FIT</span>
              </span>
            </div>
            <div className="text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} ELITEFIT. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-zinc-400 hover:text-red-500">
                Terms
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-red-500">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-red-500">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
