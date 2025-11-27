import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sun, Zap, RotateCcw, Home, ArrowRight, Battery, Plug } from "lucide-react";

export default function SolarBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative">
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23FF9800' x='10' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='27' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='44' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='10' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='27' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='44' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='65' y='40' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='82' y='40' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='65' y='52' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='82' y='52' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='20' y='70' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='37' y='70' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='20' y='82' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='37' y='82' width='15' height='10' rx='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
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
              Solar Energy Basics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the fundamentals of solar power systems and how they work for your home.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">kW (Kilowatt) - System Capacity</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>kW (kilowatt)</strong> measures the capacity or size of your solar system. It represents 
                the maximum power output your panels can generate under ideal conditions. For example, a 5 kW 
                system can produce 5,000 watts of power at peak sunlight. A typical Indian household requires 
                between 3-5 kW depending on their electricity consumption. The higher the kW rating, the more 
                electricity your system can generate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <RotateCcw className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Net Metering</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Net Metering</strong> is a billing mechanism that credits solar energy system owners 
                for the electricity they add to the grid. When your solar panels produce more electricity than 
                you use, the excess is exported to the grid and your meter literally runs backwards. At the end 
                of the billing period, you only pay for your "net" energy use - the difference between what you 
                consumed from the grid and what you exported. This makes solar significantly more economical.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3498DB] to-[#2980B9] flex items-center justify-center">
                  <Battery className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Inverter Function</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                The <strong>inverter</strong> is the heart of your solar system. Solar panels generate DC 
                (Direct Current) electricity, but your home appliances run on AC (Alternating Current). 
                The inverter converts DC to AC, making the solar electricity usable in your home. Modern 
                inverters also monitor system performance, optimize power output, and ensure safe operation. 
                There are different types: string inverters, microinverters, and hybrid inverters (which 
                also manage battery storage).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How a Grid-Tied Solar System Works
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Single-Line Diagram (SLD) showing the flow of energy from sunlight to your home
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center mb-2">
                  <Sun className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Sunlight</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
              <span className="text-gray-400 md:hidden">↓</span>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">DC</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Solar Panels</span>
                <span className="text-xs text-gray-500">(DC Power)</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
              <span className="text-gray-400 md:hidden">↓</span>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Inverter</span>
                <span className="text-xs text-gray-500">(DC → AC)</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
              <span className="text-gray-400 md:hidden">↓</span>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <span className="text-sm font-medium text-gray-700">AC Power</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
              <span className="text-gray-400 md:hidden">↓</span>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-2">
                  <Home className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Your Home</span>
              </div>
              
              <div className="hidden md:flex items-center">
                <RotateCcw className="h-6 w-6 text-gray-400" />
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-2">
                  <Plug className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Grid</span>
                <span className="text-xs text-gray-500">(Net Metering)</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-sm text-gray-700 text-center">
                <strong>Flow Summary:</strong> Sunlight hits solar panels → Panels generate DC electricity → 
                Inverter converts DC to AC → AC powers your home → Excess goes to grid (Net Metering)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-8 shadow-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Solar Savings?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our AI-powered assistant can help you understand how much you could save with solar, 
              including subsidies and net metering benefits specific to your location.
            </p>
            <Link href="/app/chat/demo">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
