# Changelog

All notable changes to the Solstice platform will be documented in this file.

## [2.1.0] - 2025-11-27

### Architecture
- Implemented V2.1 SaaS platform architecture and multi-page routing
- Transformed simple chat app into full marketing platform

### Routing
- Moved chat from `/` to `/app/chat/demo`
- Added routes: `/plans`, `/auth/login`, `/contact`, `/team`, `/info/solar-basics`
- Root route (`/`) now displays marketing landing page

### Branding
- Integrated Solstice logo with solar panel design
- Set primary accent color to `#3498DB` across the platform
- Added solar gradient theme using colors: `#FFD700`, `#FFA500`, `#FF8C00`
- Updated AI name from "SOLSTICE" to "Solstice" for consistency

### Landing Page (Feature)
- Implemented new Hero section with headline: "Solstice: Your Peak Solar Performance Begins Here"
- Added Value Proposition section (What We Do, Who We Cater To, Our USP)
- Implemented testimonial section with three categories:
  - Financial Savings testimonial
  - Environmental Impact testimonial
  - Education/Knowledge testimonial
- Added CTA buttons for Sign In, View Plans, and Try Demo
- Implemented responsive footer with navigation links

### Plans Page
- Created two-tier pricing structure:
  - Solstice Free (Limited Demo functionality)
  - Solstice Pro ($29/month with full features)
- Added feature comparison with Unlimited ROI Reports, Full Compliance Auditing, and Presentation Export

### Team Page
- Added founder profiles:
  - Dr. Amulya Guduri (CEO, AI & Compliance Strategist) - Focus on AI, financial modeling, and public policy
  - Kruthika Kanduri (CTO, Engineering Lead) - Focus on platform development, data architecture, and solar technology
- Included placeholder avatars and LinkedIn profile links

### Solar Basics Page
- Integrated educational content defining key concepts:
  - kW (Capacity) explanation
  - Net Metering explanation
  - Inverter Function explanation
- Created visual Single-Line Diagram (SLD) showing system flow: Sunlight → DC → Inverter → AC → Home/Grid

### Contact Page
- Implemented contact form with name, email, subject, and message fields
- Added business contact email: `contact@solstice.com`
- Included location and support hours information

### Authentication
- Created login/signup page at `/auth/login`
- Implemented toggle between sign in and sign up modes
- Added "Try Free Demo" option for non-authenticated users

### Technical
- Updated global CSS with Solstice theme colors
- Ensured full responsive design across all pages
- Maintained existing RAG/Pinecone/Vercel backend functionality
- Chat functionality preserved and accessible via `/app/chat/demo`
