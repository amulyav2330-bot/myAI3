import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-orange-100">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Solstice AI Assistant</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Terms of Use / Disclaimer</h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The following terms of use govern access to and use of the <strong>Solstice AI Assistant</strong> ("AI Chatbot"), 
              an artificial intelligence tool provided by <strong>Solstice</strong> ("we", "us", or "our company"). 
              By engaging with the AI Chatbot, you agree to these terms. If you do not agree, you may not use the AI Chatbot.
            </p>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">General Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Provider and Purpose:</span> The AI Chatbot is a tool developed and maintained 
                      by <strong>Solstice</strong>. It is intended solely to provide users with <strong>personalized solar installation guidance, 
                      including regulatory compliance, financial modeling, and technical feasibility, specifically for the Indian market, 
                      beginning with Maharashtra.</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Third-Party Involvement:</span> The AI Chatbot utilizes multiple third-party 
                      platforms and vendors, some of which operate outside the United States. Your inputs may be transmitted, processed, 
                      and stored by these third-party systems. As such, confidentiality, security, and privacy cannot be guaranteed, 
                      and data transmission may be inherently insecure and subject to interception.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">No Guarantee of Accuracy:</span> The AI Chatbot is designed to provide helpful 
                      and relevant responses but may deliver inaccurate, incomplete, or outdated information. Users are strongly 
                      encouraged to independently verify any information before relying on it for decisions or actions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Liability</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Use at Your Own Risk:</span> The AI Chatbot is provided on an "as-is" and 
                      "as-available" basis. To the fullest extent permitted by law: <strong>Solstice</strong> disclaims all warranties, 
                      express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, 
                      and non-infringement.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Solstice</strong> is not liable for any errors, inaccuracies, or omissions in the information provided 
                      by the AI Chatbot.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">No Responsibility for Damages:</span> Under no circumstances shall <strong>Solstice</strong>, 
                      its collaborators, partners, affiliated entities, or representatives be liable for any direct, indirect, incidental, 
                      consequential, special, or punitive damages arising out of or in connection with the use of the AI Chatbot.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Modification or Discontinuation:</span> We reserve the right to modify, suspend, 
                      or discontinue the AI Chatbot's functionalities at any time without notice.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Future Fees:</span> While the AI Chatbot is currently provided free of charge, 
                      we reserve the right to implement a fee for its use at any time.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">User Responsibilities</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Eligibility:</span> Use of the AI Chatbot is restricted to individuals aged 18 or older.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Prohibited Conduct:</span> By using the AI Chatbot, you agree not to:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Post or transmit content that is defamatory, offensive, intimidating, illegal, racist, discriminatory, obscene, or otherwise inappropriate.</li>
                      <li>Use the AI Chatbot to engage in unlawful or unethical activities.</li>
                      <li>Attempt to compromise the security or functionality of the AI Chatbot.</li>
                      <li>Copy, distribute, modify, reverse engineer, decompile, or extract the source code of the AI Chatbot without explicit written consent.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Data Privacy and Security</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">No Privacy Guarantee:</span> The AI Chatbot does not guarantee privacy, 
                      confidentiality, or security of the information you provide. Conversations may be reviewed by <strong>Solstice</strong>, 
                      its collaborators, partners, or affiliated entities for purposes such as improving the AI Chatbot, enhancing 
                      product development, market research, and content creation.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Public Information:</span> Any information you provide through the AI Chatbot 
                      is treated as public.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Data Transmission:</span> Inputs may be transmitted to and processed by 
                      third-party services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Ownership of Content and Commercial Use</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Surrender of Rights:</span> By using the AI Chatbot, you irrevocably assign 
                      and surrender all rights, title, interest, and intellectual property rights in any content, inputs you provide, 
                      and outputs generated by the AI Chatbot to <strong>Solstice</strong>. This includes, but is not limited to, 
                      text, questions, and conversations.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Commercial and Research Use:</span> <strong>Solstice</strong> reserves the right 
                      to use any input provided by users and any output generated by the AI Chatbot for commercial purposes, research, 
                      or other activities without compensation or notification to users.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">No Claim to Gains or Profits:</span> Users agree that they have no rights, claims, 
                      or entitlement to any gains, profits, or benefits derived from the use or exploitation of the content provided 
                      to the AI Chatbot.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Indemnification</h3>
                <p className="text-gray-700">
                  By using the AI Chatbot, you agree to indemnify and hold harmless <strong>Solstice</strong>, its collaborators, 
                  partners, affiliated entities, and representatives from any claims, damages, losses, or liabilities arising out 
                  of your use of the AI Chatbot or violation of these terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Governing Law and Jurisdiction</h3>
                <p className="text-gray-700">
                  These terms are governed by the laws of the State of North Carolina, United States. Additional jurisdictions may 
                  apply for users outside the United States, subject to applicable local laws. In case of conflicts, the laws of 
                  North Carolina shall prevail to the extent permissible. Any disputes arising under or in connection with these 
                  terms shall be subject to the exclusive jurisdiction of the courts located in North Carolina.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-orange-200 pb-2">Acceptance of Terms</h3>
                <p className="text-gray-700">
                  By using the AI Chatbot, you confirm that you have read, understood, and agreed to these Terms of Use and Disclaimer. 
                  If you do not agree with any part of these terms, you may not use the AI Chatbot.
                </p>
              </section>

              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> November 27, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
