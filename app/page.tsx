import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Shield, TrendingUp, Leaf, BookOpen, ArrowRight, Mail, Users, ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Solstice and how does it work?",
    answer: "Solstice is an AI-powered solar energy analysis platform that helps homeowners in Maharashtra understand solar panel installations, calculate ROI, and navigate regulatory requirements including MSEDCL tariffs, MNRE subsidies, and net metering regulations. Simply chat with our AI assistant to get personalized guidance."
  },
  {
    question: "How accurate are the savings estimates?",
    answer: "Our estimates are based on real-time MSEDCL tariff data, current MNRE subsidy rates, and your specific consumption patterns. While we strive for accuracy, actual savings may vary based on installation quality, weather patterns, and future tariff changes. We recommend using our estimates as a starting point for your solar journey."
  },
  {
    question: "What subsidies are available for rooftop solar in Maharashtra?",
    answer: "Under the PM Surya Ghar scheme, residential consumers can receive subsidies of up to 40% for systems up to 3kW, and 20% for systems between 3-10kW. Solstice helps you understand exactly how much subsidy you qualify for based on your system size and location."
  },
  {
    question: "What is net metering and how does it benefit me?",
    answer: "Net metering allows you to sell excess solar power back to MSEDCL at a predetermined rate. When your solar panels produce more electricity than you consume, the surplus is exported to the grid and credited to your account. This can significantly reduce or even eliminate your electricity bills."
  },
  {
    question: "How long does it take to recover the investment in solar panels?",
    answer: "For most residential installations in Maharashtra, the payback period ranges from 4-6 years, depending on your system size, electricity consumption, and current tariff slab. After the payback period, you enjoy essentially free electricity for the remaining 20+ years of panel life."
  },
  {
    question: "What size solar system do I need for my home?",
    answer: "The ideal system size depends on your monthly electricity consumption, available roof space, and budget. As a rule of thumb, a 1kW system generates approximately 4-5 units per day. Our AI assistant can help you calculate the optimal system size based on your electricity bills and requirements."
  },
  {
    question: "Do I need battery storage with my solar system?",
    answer: "For grid-connected systems with net metering in Maharashtra, battery storage is optional. The grid acts as your virtual battery - you export excess power during the day and draw from the grid at night. However, batteries can provide backup during power outages if that's a concern in your area."
  },
  {
    question: "What maintenance do solar panels require?",
    answer: "Solar panels require minimal maintenance. Regular cleaning (every 2-3 weeks) to remove dust and debris, periodic inspection of connections, and annual professional check-ups are typically sufficient. Most quality panels come with 25-year performance warranties."
  },
  {
    question: "What approvals are needed for rooftop solar installation?",
    answer: "You'll need approval from MSEDCL for grid connectivity and net metering. Depending on your location, you may also need NOC from your housing society or local authorities. Solstice guides you through the entire approval process and documentation requirements."
  },
  {
    question: "Can Solstice help me find solar installers?",
    answer: "Currently, Solstice focuses on providing comprehensive solar feasibility analysis, ROI calculations, and regulatory guidance. While we don't directly connect you with installers, our detailed reports help you make informed decisions and ask the right questions when engaging with solar vendors."
  }
];

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
                We demystify solar—from tariff slabs to subsidies—with AI-driven clarity. Get the precise budget, roadmap, and knowledge you need to start generating your own power today.
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

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <HelpCircle className="h-7 w-7 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about solar energy and how Solstice can help you
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-orange-100 last:border-0">
                    <AccordionTrigger className="px-6 py-4 hover:bg-amber-50/50 text-left font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
