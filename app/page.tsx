import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Shield, TrendingUp, Leaf, BookOpen, ArrowRight, Mail, Users, FileText, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
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
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/plans" className="text-gray-600 hover:text-orange-600 transition-colors">
                Plans
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-orange-600 transition-colors">
                Team
              </Link>
              <Link href="/info/solar-basics" className="text-gray-600 hover:text-orange-600 transition-colors">
                Solar Basics
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="outline" className="border-[#3498DB] text-[#3498DB] hover:bg-[#3498DB] hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/app/chat/demo">
                <Button className="bg-[#3498DB] hover:bg-[#2980B9] text-white">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full solar-gradient-radial opacity-20 absolute -inset-4 blur-2xl"></div>
                  <Image
                    src="/solstice-logo.png"
                    alt="Solstice"
                    width={120}
                    height={120}
                    className="relative z-10"
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Solstice: Your Peak Solar
                <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Performance Begins Here
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Unlock maximum savings and power your future with regulatory-backed AI analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/login">
                  <Button size="lg" className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-8 py-6 text-lg">
                    Sign In / Sign Up
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/plans">
                  <Button size="lg" variant="outline" className="border-[#3498DB] text-[#3498DB] hover:bg-[#3498DB] hover:text-white px-8 py-6 text-lg">
                    View Plans
                  </Button>
                </Link>
                <Link href="/app/chat/demo">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg">
                    Try Free Demo
                    <Sun className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Solstice?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Do</h3>
                <p className="text-gray-600">
                  We unify MSEDCL tariffs, MNRE subsidies, and VNM regulations into a single, personalized financial report.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Who We Cater To</h3>
                <p className="text-gray-600">
                  Citizens and residents exploring solar panel installation options and aiming for energy independence.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our USP</h3>
                <p className="text-gray-600">
                  Guaranteed Compliance. Real-time ROI. <strong>A Better Tomorrow, Starting Today.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Real stories from people who transformed their energy future with Solstice
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Financial Savings</span>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Solstice helped me understand exactly how much I'd save. Within 3 months, I saw a 40% reduction in my electricity bills. The ROI calculator was spot-on!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold">
                    R
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-6 w-6 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600">Environmental Impact</span>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Beyond the savings, I feel proud knowing my home now runs on clean energy. Solstice showed me my carbon offset - it's like planting 50 trees every year!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white font-semibold">
                    P
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">Education & Knowledge</span>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "I knew nothing about solar before Solstice. Their AI explained everything - from net metering to subsidies. Now I confidently advise my neighbors!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Amit Patel</p>
                    <p className="text-sm text-gray-500">Nashik, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join thousands of homeowners who are saving money and the planet with Solstice.
            </p>
            <Link href="/app/chat/demo">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Try Free Demo Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/solstice-logo.png"
                  alt="Solstice Logo"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Solstice</span>
              </div>
              <p className="text-gray-400 text-sm">
                The sun's highest point - powering your peak solar performance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/plans" className="hover:text-white transition-colors">Plans</Link></li>
                <li><Link href="/app/chat/demo" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/info/solar-basics" className="hover:text-white transition-colors">Solar Basics</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contact@solstice.com" className="hover:text-white transition-colors">
                    contact@solstice.com
                  </a>
                </li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Solstice. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <span>|</span>
              <span className="text-amber-400">Powered by Solstice AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
