import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowLeft, Sparkles, Zap } from "lucide-react";

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/solstice-logo.png"
                alt="Solstice Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Solstice
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-gray-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free and upgrade when you need more powerful features for your solar journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Solstice Free</h2>
                  <p className="text-gray-500">Get started with basics</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Free</span>
                <span className="text-gray-500">/forever</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Limited Demo Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Basic Solar Calculator</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Educational Resources</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X className="h-5 w-5 flex-shrink-0" />
                  <span>Unlimited ROI Reports</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X className="h-5 w-5 flex-shrink-0" />
                  <span>Full Compliance Auditing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X className="h-5 w-5 flex-shrink-0" />
                  <span>Presentation Export</span>
                </li>
              </ul>
              <Link href="/app/chat/demo">
                <Button className="w-full" variant="outline">
                  Try Free Demo
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#3498DB] to-[#2980B9] rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Solstice Pro</h2>
                  <p className="text-white/80">Full power unlocked</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹999</span>
                <span className="text-white/80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span><strong>Unlimited ROI Reports</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span><strong>Full Compliance Auditing</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span><strong>Presentation Export</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <Link href="/auth/login">
                <Button className="w-full bg-white text-[#3498DB] hover:bg-gray-100">
                  Upgrade to Solstice Pro
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Have questions about our plans?
            </p>
            <Link href="/contact">
              <Button variant="link" className="text-[#3498DB]">
                Contact our team
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
