import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

export default function TeamPage() {
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
              Meet the Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The minds behind Solstice, dedicated to making solar energy accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-amber-200">
                  <Image
                    src="/amulya-guduri.jpeg"
                    alt="Dr. Amulya Guduri"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Dr. Amulya Guduri</h2>
                <p className="text-[#3498DB] font-medium">CEO, AI & Compliance Strategist</p>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Dr. Guduri brings extensive expertise in artificial intelligence, financial modeling, 
                and public policy. With a PhD in Machine Learning and years of experience in the 
                renewable energy sector, she leads Solstice's mission to democratize solar energy 
                through intelligent automation and regulatory compliance.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/amulyaguduri23/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3498DB] hover:text-[#2980B9] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-blue-200">
                  <Image
                    src="/kruthika-kanduri.png"
                    alt="Kruthika Kanduri"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kruthika Kanduri</h2>
                <p className="text-[#3498DB] font-medium">CTO, Engineering Lead</p>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Kruthika spearheads Solstice's technical vision with her deep expertise in 
                platform development, data architecture, and solar technology integration. 
                Her background in full-stack development and IoT systems enables the seamless 
                integration of complex regulatory data with user-friendly interfaces.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/kruthika-kanduri-b59826160/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3498DB] hover:text-[#2980B9] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              At Solstice, we believe that transitioning to solar energy should be simple, 
              transparent, and accessible to everyone. Our AI-powered platform combines 
              cutting-edge technology with deep regulatory expertise to help homeowners 
              make informed decisions about their energy future.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Want to join our mission?
            </p>
            <Link href="/contact">
              <Button className="bg-[#3498DB] hover:bg-[#2980B9]">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
