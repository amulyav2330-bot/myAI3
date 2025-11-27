# Solstice - Solar Energy SaaS Platform

## Overview
Solstice is an AI-powered solar energy analysis platform built with Next.js 16. It helps homeowners understand solar panel installations, calculate ROI, and navigate regulatory requirements including MSEDCL tariffs, MNRE subsidies, and net metering regulations.

## Project Type
- **Framework**: Next.js 16.0.0 with Turbopack
- **Language**: TypeScript
- **Package Manager**: npm
- **Deployment**: Configured for Replit Autoscale

## Current State (v2.1)
- Full SaaS marketing platform with multi-page routing
- AI-powered chat demo at `/app/chat/demo`
- RAG functionality with Pinecone integration
- Responsive design with solar theme branding

## Architecture

### Route Structure
| Route | Description |
|-------|-------------|
| `/` | Marketing landing page with hero, value props, testimonials |
| `/app/chat/demo` | AI chat interface (original functionality) |
| `/plans` | Pricing page (Free vs Pro tiers) |
| `/team` | Team page (founders: Dr. Amulya Guduri, Kruthika Kanduri) |
| `/contact` | Contact form and business info |
| `/info/solar-basics` | Educational content (kW, Net Metering, Inverters) |
| `/auth/login` | Authentication page |
| `/terms` | Terms of use |

### Core Components
1. **Frontend**: Next.js with React 19.2.0
2. **AI Integration**: Multiple AI SDK providers (OpenAI, Fireworks, Groq, xAI, DeepSeek)
3. **Vector Database**: Pinecone for knowledge base search
4. **Web Search**: Exa API for real-time web search
5. **Moderation**: OpenAI moderation API for content safety

### Branding
- **Primary Color**: `#3498DB` (blue) - for CTAs and buttons
- **Solar Gradient**: `#FFD700` → `#FFA500` → `#FF8C00` (gold to deep orange)
- **Logo**: `/public/solstice-logo.png`

## Environment Setup

### Required API Keys (Secrets)
- `OPENAI_API_KEY` - **Required** for AI model and moderation
- `EXA_API_KEY` - Optional, for web search functionality
- `PINECONE_API_KEY` - Optional, for vector database search
- `FIREWORKS_API_KEY` - Optional, for Fireworks AI models

## Replit Configuration

### Workflow
- **Name**: Next.js Dev Server
- **Command**: `next dev -p 5000 -H 0.0.0.0`
- **Port**: 5000 (frontend webview)

### Deployment
- **Type**: Autoscale (stateless)
- **Build**: `npm run build`
- **Run**: `npm start`

## Key Files

### Configuration
- `config.ts` - AI name, model selection, moderation messages
- `prompts.ts` - AI behavior and system prompts
- `next.config.ts` - Next.js configuration with allowedDevOrigins

### Pages
- `app/page.tsx` - Marketing landing page
- `app/app/chat/demo/page.tsx` - Chat interface
- `app/plans/page.tsx` - Pricing tiers
- `app/team/page.tsx` - Team profiles
- `app/contact/page.tsx` - Contact form
- `app/info/solar-basics/page.tsx` - Educational content
- `app/auth/login/page.tsx` - Authentication

## Recent Changes (November 27, 2025)

### V3.4 - Fixed Chat Widget Positioning
- Fixed chatbot button positioning with `position: fixed; bottom: 20px; right: 20px; z-index: 9999`
- Removed auto-open popup functionality - chat only opens when user clicks
- Chat window is fixed to the right side, slides in above main content
- Mobile responsive: shorter text on small screens ("Chat" instead of "Chat with Solstice AI")
- Chat window has max-height to prevent overlapping footer on smaller screens

### V3.3 - Chat Layout & Solar Mascot
- Updated chat text alignment to left-aligned for better readability
- Added animated solar mascot (cute sun character) on right side of chat area in fullscreen mode:
  - Floating animation with gentle bounce
  - Rotating sun rays with pulsing glow
  - Animated face with smile and blinking eyes
  - "Solstice AI" label underneath
- Consistent solar theme applied across entire website:
  - Primary Background: #FFF8E1 (warm light yellow)
  - Accent Color 1: #FFC107 (gold for highlights)
  - Accent Color 2: #FF9800 (orange for buttons/accents)
- 5% opacity solar panel background pattern on:
  - Home Page (/)
  - Solar Basics page (/info/solar-basics)
  - Chat widget
- Solar Basics page now uses TryDemoButton to open chat widget

### V3.2 - Chart Generation & UI Improvements
- Added generateChart tool for rendering actual visual charts (bar, line, comparison)
- AI now creates real Recharts-based graphs instead of text descriptions for:
  - ROI comparisons (bar chart with kW sizes vs 10-year savings)
  - 10-year savings projections (line charts)
  - Before/after bill comparisons (comparison bar charts)
- Fixed "Try Free Demo" button on login page to open chat widget
- New chat now shows greeting: "Hello! I'm SOLSTICE, an AI assistant helping you to understand the landscape of solar installation. Let's start with your location and consumption."

### V3.1 - Comprehensive Chatbot Prompt Overhaul & UI Updates
- Replaced entire chatbot system prompt with new comprehensive SOLSTICE prompt:
  - Internal state model (userContext) for tracking user data
  - Master control flow with priority order
  - Interview mode for structured solar eligibility assessment
  - Simulation mode for current bill calculation
  - Scenario ROI mode for multi-kW comparison with tables AND graphs
  - Smart subsidy optimizer with threshold explanations
  - Visual output mode (ROI curves, slab shift charts)
  - Policy QA mode with official source citations (MERC, MNRE, DISCOM)
  - Installer assist mode (vendor discovery without direct connections)
  - 10-year analysis mode with escalation assumptions
  - Society fairness mode for housing societies
  - Solar Simplified mode for educational content
  - UI-aware widget behavior (close/maximize handling)
  - Comprehensive safety, legal, and privacy rules
  - Ethical sales nudges based on payback period
- UI Updates:
  - Removed center logo above home page heading
  - Updated Kruthika's team photo with new uploaded image
  - Updated LinkedIn URLs:
    - Amulya: https://www.linkedin.com/in/amulyaguduri23/
    - Kruthika: https://www.linkedin.com/in/kruthika-kanduri-b59826160/
  - Replaced "Get Analysis Report" with "Solar Simplified" quick-start button

### V3.0 - Floating Chat Widget
- Added floating chat widget (ChatLauncher) on all pages:
  - Bottom-right floating "Chat with Solstice AI" button
  - Expandable pop-up with minimize/maximize/close buttons
  - Full-screen mode for detailed interactions
  - Quick-start buttons: Estimate Savings, Subsidies, Net Metering, Solar Simplified
  - Auto-greeting after 4 seconds for new visitors
  - Session persistence across page navigation
- Updated landing page navigation:
  - Removed redundant blue "Try Demo" button from header
  - Connected hero "Try Free Demo" button to open chat widget
  - Connected bottom "Try Free Demo Now" button to open chat widget
  - TryDemoButton component dispatches custom event to open ChatLauncher

### V2.9 - Enhanced AI Guardrails & Solar Basics Content
- Updated Kruthika Kanduri's team photo with new uploaded image
- Added comprehensive ethical sales nudges to AI chatbot:
  - Payback-based messaging (≤6 years, 6-9 years, >9 years scenarios)
  - User empowerment phrases reinforcing decision autonomy
  - Prohibited behaviors (no pressure tactics, guilt-tripping, fake urgency)
- Added geographic scope guardrails to chatbot:
  - Maharashtra users: Full precision with local tariffs, net metering, subsidies
  - Other Indian states: Web-validated data with disclaimers
  - International users: High-level education only, no financial claims
- Enhanced Solar Basics page with "Why Solar Energy?" comparison section:
  - Solar vs Coal/Fossil Fuels vs Wind vs Hydropower comparison cards
  - Highlights solar's unique accessibility for homeowners

### V2.8 - Production Build with Full T&C Integration
- Added real team photos (Dr. Amulya Guduri, Kruthika Kanduri)
- Updated pricing to ₹999/month for Indian market
- Comprehensive Terms and Conditions page with Solstice-specific legal content
- Added 10-point FAQ section to landing page (solar subsidies, net metering, system sizing, maintenance, approvals)
- Updated hero subhead with new USP copy

### V2.2 - Chat UI Branding Update
- Updated logo across all pages with new Solstice logo (sun with solar panels)
- Redesigned chat demo with warm solar-themed background (#FFF8E1)
- Added subtle faded solar panel pattern in chat background
- Updated welcome message: "Hello! I'm SOLSTICE, an AI assistant helping you to understand the landscape of solar installation."
- Applied vibrant orange/amber color scheme (#FF9800, #FFC107) to chat UI
- Updated footer: "© 2025 Solstice Terms of Use Powered by Solstice AI"

### V2.1 - SaaS Platform Architecture
- Created multi-page marketing website
- Moved chat from `/` to `/app/chat/demo`
- Added landing page with hero, value props, testimonials
- Created Plans page with Free/Pro tiers
- Added Team page with founder profiles
- Built Solar Basics educational page with SLD diagram
- Implemented Contact and Login pages

## User Preferences
- Prefer asking clarifying questions before providing detailed information
- Avoid information overload - reveal information progressively

## Development Notes
- Dev server binds to 0.0.0.0:5000 for Replit proxy compatibility
- Cross-origin requests configured via allowedDevOrigins
- RAG/Pinecone backend functionality preserved and untouched
- Hydration warnings in dev mode are from dynamic Date() usage (not critical)
