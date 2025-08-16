# AI-Powered Meeting Notes Summarizer - Documentation

## Project Overview
A full-stack web application that allows users to upload meeting transcripts, generate AI-powered summaries with custom instructions, and share them via email.

## Submission & Repo
- __Repository Name__: `muqsit-lumio`
- __GitHub URL__: [https://github.com/mmrcode/muqsit-lumio]
- __Deployed Link__: Add the Vercel URL after deployment

## Approach & Process

### 1. Requirements Analysis
- Analyzed the need for transcript upload functionality
- Identified requirement for custom AI prompts
- Planned editable summary feature
- Designed email sharing capability

### 2. Architecture Design
- Chose Next.js 14 with App Router for full-stack capabilities
- Implemented serverless API routes for backend logic
- Used TypeScript for type safety
- Designed component-based frontend architecture

### 3. Development Process
- Started with basic transcript upload and AI summarization
- Implemented custom instruction functionality
- Added editable summary feature
- Integrated email sharing via Resend API
- Enhanced with multi-transcript support and AI summary modes

## Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **React**: Component-based UI library
- **CSS-in-JS**: Inline styles for basic UI (as per requirements)

### Backend
- **Next.js API Routes**: Serverless backend functions
- **Node.js**: JavaScript runtime environment

### AI Integration
- **Groq API**: AI service for text summarization
- **Llama3-8b-8192**: Large language model for generating summaries

### Email Service
- **Resend API**: Email delivery service for sharing summaries

### Deployment
- **Vercel**: Hosting platform optimized for Next.js
- **GitHub**: Version control and repository hosting

## Key Features

### Core Functionality (Per Requirements)
1. **Text Transcript Upload**: Upload .txt files or paste content directly
2. **Custom Instructions**: Input custom prompts for AI summarization
3. **AI Summary Generation**: Generate structured summaries using Groq API
4. **Editable Summaries**: Modify generated summaries before sharing
5. **Email Sharing**: Send summaries to multiple recipients

### Enhanced Features (Beyond Requirements)
1. **Multi-Transcript Support**: Manage multiple meeting transcripts simultaneously
2. **Categorization System**: Tag transcripts (Client Call, Team Sync, etc.)
3. **AI Summary Modes**: Predefined prompts for different analysis types:
   - Executive Summary
   - Action Items Only
   - Sentiment Analysis
   - Timeline of Events
4. **Tab-based Interface**: Easy switching between transcripts

## API Endpoints

### `/api/summarize`
- **Method**: POST
- **Purpose**: Generate AI summary from transcript
- **Input**: `{ transcript: string, instruction: string }`
- **Output**: `{ summary: string }`

### `/api/send-email`
- **Method**: POST
- **Purpose**: Send summary via email
- **Input**: `{ summary: string, emails: string[] }`
- **Output**: Success/error response

## Environment Variables
```
GROQ_API_KEY=your_groq_api_key
RESEND_API_KEY=your_resend_api_key
```

## Installation & Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`
4. Run development server: `npm run dev`
5. Access application at `http://localhost:3000`

## Deployment Process

1. **GitHub Repository**: Code hosted on GitHub for version control
2. **Vercel Deployment**: Connected GitHub repo to Vercel for automatic deployments
3. **Environment Configuration**: Set up API keys in Vercel dashboard
4. **Domain**: Accessible via Vercel-provided URL

## Design Decisions

### Why Next.js?
- Full-stack capabilities in one framework
- Excellent TypeScript support
- Built-in API routes for serverless functions
- Optimized for deployment on Vercel

### Why Groq API?
- Fast inference times
- Good documentation (as provided)
- Reliable service for text summarization
- Cost-effective for development

### Why Basic UI?
- Focused on functionality over design (as per requirements)
- Faster development time
- Better performance with minimal CSS
- Easier maintenance

## Future Enhancements
- User authentication and session management
- Database integration for persistent storage
- Advanced AI models for better summarization
- Export summaries to PDF/Word formats
- Integration with calendar applications

## Testing
- Manual testing of all core features
- API endpoint validation
- Cross-browser compatibility testing
- Email delivery verification

---

**Developer**: mmrcode  
**Project**: Lumio Technical Round 1  
**Date**: August 2025
