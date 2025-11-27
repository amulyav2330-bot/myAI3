"use client";

import { useState, useEffect, useRef } from "react";
import { useChat, type UIMessage } from "@ai-sdk/react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { MessageCircle, X, Maximize2, Minimize2, ArrowUp, Square, Plus, Sun, FileText, HelpCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { MessageWall } from "@/components/messages/message-wall";
import { AI_NAME, WELCOME_MESSAGE, CLEAR_CHAT_TEXT } from "@/config";
import { toast } from "sonner";

const STORAGE_KEY = "solstice-chat-v1";

interface StorageData {
  messages: UIMessage[];
  durations: Record<string, number>;
}

const formSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty.")
    .max(2000, "Message must be at most 2000 characters."),
});

const loadMessagesFromStorage = (): StorageData => {
  if (typeof window === "undefined") return { messages: [], durations: {} };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { messages: [], durations: {} };
    const parsed = JSON.parse(stored);
    return {
      messages: parsed.messages || [],
      durations: parsed.durations || {},
    };
  } catch {
    return { messages: [], durations: {} };
  }
};

const saveMessagesToStorage = (messages: UIMessage[], durations: Record<string, number>) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, durations }));
  } catch {}
};

const quickStartOptions = [
  { label: "Estimate Solar Savings", icon: Calculator, message: "I want to estimate my solar savings. Can you help me calculate based on my electricity bill?" },
  { label: "Tell me About Subsidies", icon: Sun, message: "What subsidies are available for rooftop solar in Maharashtra?" },
  { label: "What is Net Metering?", icon: HelpCircle, message: "Can you explain how net metering works?" },
  { label: "Solar Simplified", icon: FileText, message: "I want to learn about solar energy basics. What is solar energy and why is rooftop solar useful?" },
];

export function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [hasAutoGreeted, setHasAutoGreeted] = useState(false);
  const welcomeMessageShownRef = useRef<boolean>(false);

  const stored = typeof window !== "undefined" ? loadMessagesFromStorage() : { messages: [], durations: {} };
  const [initialMessages] = useState<UIMessage[]>(stored.messages);

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    messages: initialMessages,
  });

  useEffect(() => {
    setIsClient(true);
    setDurations(stored.durations);
    setMessages(stored.messages);
    
    const hasGreeted = localStorage.getItem("solstice-auto-greeted");
    if (hasGreeted) setHasAutoGreeted(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      saveMessagesToStorage(messages, durations);
    }
  }, [durations, messages, isClient]);

  useEffect(() => {
    if (isClient && !hasAutoGreeted) {
      const timer = setTimeout(() => {
        if (!isOpen) {
          setIsOpen(true);
          localStorage.setItem("solstice-auto-greeted", "true");
          setHasAutoGreeted(true);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClient, hasAutoGreeted, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener("openSolsticeChat", handleOpenChat);
    return () => window.removeEventListener("openSolsticeChat", handleOpenChat);
  }, []);

  useEffect(() => {
    if (isOpen && isClient && initialMessages.length === 0 && !welcomeMessageShownRef.current) {
      const welcomeMessage: UIMessage = {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        parts: [{ type: "text", text: WELCOME_MESSAGE }],
      };
      setMessages([welcomeMessage]);
      saveMessagesToStorage([welcomeMessage], {});
      welcomeMessageShownRef.current = true;
    }
  }, [isOpen, isClient, initialMessages.length, setMessages]);

  const handleDurationChange = (key: string, duration: number) => {
    setDurations((prev) => ({ ...prev, [key]: duration }));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    sendMessage({ text: data.message });
    form.reset();
  }

  function handleQuickStart(message: string) {
    sendMessage({ text: message });
  }

  function clearChat() {
    const welcomeMessage: UIMessage = {
      id: `welcome-${Date.now()}`,
      role: "assistant",
      parts: [{ type: "text", text: WELCOME_MESSAGE }],
    };
    setMessages([welcomeMessage]);
    setDurations({});
    saveMessagesToStorage([welcomeMessage], {});
    welcomeMessageShownRef.current = true;
    toast.success("New chat started");
  }

  if (!isClient) return null;

  const widgetSize = isFullScreen
    ? "fixed inset-4 md:inset-8 z-[9999]"
    : "fixed bottom-4 right-4 w-[380px] h-[550px] z-[9999]";

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ backgroundColor: "#FF9800" }}
        >
          <MessageCircle className="h-5 w-5 text-white" />
          <span className="text-white font-medium">Chat with Solstice AI</span>
        </button>
      )}

      {isOpen && (
        <div className={`${widgetSize} flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-orange-200 relative`} style={{ backgroundColor: "#FFF8E1" }}>
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23FF9800' x='10' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='27' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='44' y='10' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='10' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='27' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='44' y='22' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='65' y='40' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='82' y='40' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='65' y='52' width='15' height='10' rx='1'/%3E%3Crect fill='%23FFC107' x='82' y='52' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='20' y='70' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='37' y='70' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='20' y='82' width='15' height='10' rx='1'/%3E%3Crect fill='%23FF9800' x='37' y='82' width='15' height='10' rx='1'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
          <div className="flex items-center justify-between px-4 py-3 border-b border-orange-100 relative z-10" style={{ backgroundColor: "#FFF3E0" }}>
            <div className="flex items-center gap-2">
              <Image
                src="/solstice-logo.png"
                alt="Solstice"
                width={32}
                height={32}
                className="rounded-full"
                style={{ width: "auto", height: "auto", maxWidth: "32px", maxHeight: "32px" }}
              />
              <span className="font-semibold" style={{ color: "#E65100" }}>Chat with Solstice AI</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="h-8 w-8 hover:bg-orange-100"
              >
                {isFullScreen ? (
                  <Minimize2 className="h-4 w-4" style={{ color: "#E65100" }} />
                ) : (
                  <Maximize2 className="h-4 w-4" style={{ color: "#E65100" }} />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-orange-100"
              >
                <X className="h-4 w-4" style={{ color: "#E65100" }} />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 relative z-10">
            {messages.length === 0 || (messages.length === 1 && messages[0].role === "assistant") ? (
              <div className="flex flex-col gap-4">
                <MessageWall messages={messages} status={status} durations={durations} onDurationChange={handleDurationChange} />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {quickStartOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleQuickStart(option.message)}
                      className="flex items-center gap-2 p-3 rounded-xl border border-orange-200 hover:bg-orange-50 transition-colors text-left"
                      style={{ backgroundColor: "#FFFBF0" }}
                    >
                      <option.icon className="h-5 w-5 flex-shrink-0" style={{ color: "#FF9800" }} />
                      <span className="text-sm font-medium text-gray-700">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <MessageWall messages={messages} status={status} durations={durations} onDurationChange={handleDurationChange} />
            )}
          </div>

          <div className="p-4 border-t border-orange-100 relative z-10" style={{ backgroundColor: "#FFF3E0" }}>
            <div className="flex items-center gap-2 mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-xs hover:bg-orange-100"
              >
                <Plus className="h-3 w-3 mr-1" style={{ color: "#FF9800" }} />
                <span style={{ color: "#E65100" }}>{CLEAR_CHAT_TEXT}</span>
              </Button>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="chat-widget-message" className="sr-only">Message</FieldLabel>
                      <div className="relative">
                        <Input
                          {...field}
                          id="chat-widget-message"
                          className="h-12 pr-12 pl-4 rounded-full border-orange-200 focus:border-orange-400"
                          style={{ backgroundColor: "#FFFBF0" }}
                          placeholder="Type your message..."
                          disabled={status === "streaming"}
                          autoComplete="off"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              form.handleSubmit(onSubmit)();
                            }
                          }}
                        />
                        {(status === "ready" || status === "error") && (
                          <Button
                            className="absolute right-2 top-2 rounded-full"
                            style={{ backgroundColor: "#FF9800" }}
                            type="submit"
                            disabled={!field.value.trim()}
                            size="icon"
                          >
                            <ArrowUp className="h-4 w-4 text-white" />
                          </Button>
                        )}
                        {(status === "streaming" || status === "submitted") && (
                          <Button
                            className="absolute right-2 top-2 rounded-full"
                            style={{ backgroundColor: "#FF9800" }}
                            size="icon"
                            onClick={() => stop()}
                          >
                            <Square className="h-4 w-4 text-white" />
                          </Button>
                        )}
                      </div>
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
