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
- Implemented V2.1 SaaS platform architecture
- Created multi-page marketing website
- Moved chat from `/` to `/app/chat/demo`
- Added landing page with hero, value props, testimonials
- Created Plans page with Free/Pro tiers
- Added Team page with founder profiles
- Built Solar Basics educational page with SLD diagram
- Implemented Contact and Login pages
- Updated branding with Solstice logo and solar gradient theme

## User Preferences
- Prefer asking clarifying questions before providing detailed information
- Avoid information overload - reveal information progressively

## Development Notes
- Dev server binds to 0.0.0.0:5000 for Replit proxy compatibility
- Cross-origin requests configured via allowedDevOrigins
- RAG/Pinecone backend functionality preserved and untouched
- Hydration warnings in dev mode are from dynamic Date() usage (not critical)
