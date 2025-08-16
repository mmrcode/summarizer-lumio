# AI-Powered Meeting Notes Summarizer

A full-stack web application that allows users to upload meeting transcripts, generate AI-powered summaries with custom instructions, edit the summaries, and share them via email.

## Features

- **Transcript Upload**: Upload `.txt` files or paste text directly
- **Custom Instructions**: Specify how you want the summary formatted (e.g., "Summarize in bullet points for executives")
- **AI Summarization**: Uses Groq's Llama 3.1 70B model for fast, high-quality summaries
- **Editable Summaries**: Edit the generated summary before sharing
- **Email Sharing**: Send summaries to multiple recipients via email

## Tech Stack

### Frontend
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Client-side state management** (no database needed)

### Backend
- **Next.js API Routes** (serverless)
- **Groq SDK** for AI summarization
- **Resend** for email delivery

### Deployment
- **Vercel** (recommended) or Netlify
- Serverless architecture with environment variables

## Architecture

The application follows a simple, stateless architecture:

1. **UI Layer** (`/src/app/page.tsx`):
   - File upload and text input for transcripts
   - Custom instruction input
   - Summary generation and editing
   - Email recipient management

2. **API Layer**:
   - `POST /api/summarize`: Processes transcript + instruction via Groq API
   - `POST /api/send-email`: Sends formatted emails via Resend API

3. **No Database**: All state is client-side, APIs are stateless

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Groq API Key - Get from https://console.groq.com/keys
GROQ_API_KEY=your_groq_api_key_here

# Resend API Key - Get from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# From Email - Must be verified in Resend
FROM_EMAIL=your_verified_email@yourdomain.com
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to use the application.

## API Keys Setup

### Groq API Key
1. Visit [Groq Console](https://console.groq.com/keys)
2. Create an account and generate an API key
3. Add to `.env.local` as `GROQ_API_KEY`

### Resend API Key
1. Visit [Resend](https://resend.com/api-keys)
2. Create an account and generate an API key
3. Verify your sending domain/email
4. Add to `.env.local` as `RESEND_API_KEY` and `FROM_EMAIL`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

## Usage

1. **Upload/Paste Transcript**: Either upload a `.txt` file or paste meeting notes directly
2. **Set Custom Instruction**: Specify how you want the summary formatted
3. **Generate Summary**: Click "Generate Summary" to process with AI
4. **Edit Summary**: Modify the generated summary as needed
5. **Share via Email**: Enter recipient emails (comma-separated) and send

## Design Decisions

### Why This Tech Stack?
- **Next.js**: Full-stack framework with excellent TypeScript support and easy deployment
- **Groq**: Fast, cost-effective AI inference with Llama models
- **Resend**: Simple, reliable email API designed for developers
- **Serverless**: No infrastructure management, scales automatically

### Why No Database?
- Keeps architecture simple and stateless
- Reduces deployment complexity
- No sensitive data storage concerns
- Perfect for this use case where sessions are temporary

### Why Basic UI?
- Focus on functionality over design (as requested)
- Faster development and deployment
- Easier maintenance and testing
- Better accessibility with semantic HTML

## Error Handling

- API key validation with helpful error messages
- File upload validation (text files only)
- Email format validation
- Graceful error handling with user-friendly alerts
- Loading states for better UX

## Security Considerations

- API keys stored as environment variables
- No sensitive data persistence
- Input validation on all API endpoints
- CORS handled by Next.js defaults
