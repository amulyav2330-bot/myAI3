# MyAI3 - Replit Project

## Overview
MyAI3 is a customizable AI chatbot assistant built with Next.js 16, featuring web search capabilities, vector database integration (Pinecone), and content moderation. This is a GitHub import successfully configured for the Replit environment.

## Project Type
- **Framework**: Next.js 16.0.0 with Turbopack
- **Language**: TypeScript
- **Package Manager**: npm
- **Deployment**: Configured for Replit Autoscale

## Current State
✅ Project fully configured and running
- Dependencies installed (816 packages)
- Next.js dev server running on port 5000
- HMR (Hot Module Replacement) and Fast Refresh working
- Deployment configuration set up for production

## Architecture

### Core Components
1. **Frontend**: Next.js application with React 19.2.0
2. **AI Integration**: Multiple AI SDK providers (OpenAI, Fireworks, Groq, xAI, DeepSeek)
3. **Vector Database**: Pinecone integration for knowledge base search
4. **Web Search**: Exa API for real-time web search
5. **Moderation**: OpenAI moderation API for content safety

### Key Configuration Files
- `config.ts` - Main configuration (AI name, owner, model selection, moderation messages)
- `prompts.ts` - AI behavior and system prompts
- `next.config.ts` - Next.js configuration
- `env.template` - Template for required API keys

## Environment Setup

### Required API Keys (Secrets)
The following secrets need to be configured in Replit:
- `OPENAI_API_KEY` - **Required** for AI model and moderation
- `EXA_API_KEY` - Optional, for web search functionality
- `PINECONE_API_KEY` - Optional, for vector database search
- `FIREWORKS_API_KEY` - Optional, for Fireworks AI models

Note: Only `OPENAI_API_KEY` is strictly required for basic functionality.

## Replit Configuration

### Workflow
- **Name**: Next.js Dev Server
- **Command**: `next dev -p 5000 -H 0.0.0.0`
- **Port**: 5000 (frontend webview)
- **Output**: webview
- **Status**: Running with HMR enabled

### Deployment
- **Type**: Autoscale (stateless)
- **Build**: `npm run build`
- **Run**: `npm start`

## Customization Guide

### Quick Customizations (No Technical Knowledge Required)
Most changes can be made in two files:

#### 1. `config.ts` - Application Configuration
- `AI_NAME`: Name of your AI assistant
- `OWNER_NAME`: Your name or organization
- `WELCOME_MESSAGE`: Greeting shown to users
- `MODEL`: AI model to use (default: gpt-4.1)
- Moderation messages for different content types

#### 2. `prompts.ts` - AI Behavior
- System prompts and personality
- Tool calling instructions
- Tone and style guidelines
- Citation rules

### Project Structure
```
myAI3/
├── app/                    # Next.js app directory
│   ├── api/chat/          # Chat API endpoint and tools
│   ├── page.tsx           # Main chat interface
│   └── parts/             # UI component parts
├── components/            # React components
│   ├── ai-elements/       # AI-specific UI
│   ├── messages/          # Message display
│   └── ui/                # Reusable UI components
├── lib/                   # Utility libraries
│   ├── moderation.ts      # Content moderation
│   ├── pinecone.ts        # Vector database
│   └── sources.ts         # Citation handling
├── config.ts              # ⭐ Main configuration
└── prompts.ts             # ⭐ AI behavior

```

## Recent Changes (November 27, 2025)
- Initial GitHub import to Replit
- Installed all dependencies (816 npm packages)
- Configured Next.js dev server for Replit environment
- Set up workflow with proper port (5000) and hostname (0.0.0.0)
- Configured deployment for Replit Autoscale
- Verified HMR and Fast Refresh functionality

## Development Notes
- The dev server binds to 0.0.0.0:5000 to work with Replit's proxy
- Next.js 16 uses Turbopack for faster builds
- Hot Module Replacement is active for rapid development
- No backend port conflicts (this is frontend-only)

## User Preferences
None documented yet.

## Next Steps
1. Configure required API keys in Replit Secrets
2. Customize `config.ts` with your AI name and identity
3. Adjust `prompts.ts` to match your use case
4. Test the chat interface
5. Deploy to production when ready
