'use client'

import { useState } from 'react'

interface Transcript {
  id: string
  name: string
  content: string
  category: string
  summary?: string
}

const SUMMARY_MODES = {
  executive: 'Create an executive summary with key decisions, outcomes, and strategic implications.',
  actionItems: 'Extract all action items, deadlines, and assigned responsibilities in a clear list format.',
  sentiment: 'Analyze the sentiment and tone of the meeting, including participant engagement and concerns.',
  timeline: 'Create a chronological timeline of events, decisions, and discussion points from the meeting.'
}

const CATEGORIES = ['Client Call', 'Team Sync', 'Project Review', 'Strategy Meeting', 'One-on-One', 'Other']

export default function Home() {
  const [transcripts, setTranscripts] = useState<Transcript[]>([])
  const [activeTranscriptId, setActiveTranscriptId] = useState<string | null>(null)
  const [instruction, setInstruction] = useState('Summarize the key points and action items from this meeting.')
  const [emails, setEmails] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [selectedMode, setSelectedMode] = useState<string | null>(null)

  // Generate unique ID for new transcripts
  const generateTranscriptId = () => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach(file => {
      if (file.type === 'text/plain') {
        const reader = new FileReader()
        reader.onload = (readerEvent) => {
          const transcriptContent = readerEvent.target?.result as string
          const transcriptName = file.name.replace('.txt', '')
          
          const newTranscript: Transcript = {
            id: generateTranscriptId(),
            name: transcriptName,
            content: transcriptContent,
            category: 'Other'
          }
          
          setTranscripts(currentTranscripts => [...currentTranscripts, newTranscript])
          
          // Set as active if no transcript is currently selected
          if (!activeTranscriptId) {
            setActiveTranscriptId(newTranscript.id)
          }
        }
        reader.readAsText(file)
      }
    })
  }

  const addNewTranscript = () => {
    const meetingNumber = transcripts.length + 1
    const newTranscript: Transcript = {
      id: generateTranscriptId(),
      name: `Meeting ${meetingNumber}`,
      content: '',
      category: 'Other'
    }
    
    setTranscripts(currentTranscripts => [...currentTranscripts, newTranscript])
    setActiveTranscriptId(newTranscript.id)
  }

  const updateTranscript = (transcriptId: string, updates: Partial<Transcript>) => {
    setTranscripts(currentTranscripts => 
      currentTranscripts.map(transcript => 
        transcript.id === transcriptId 
          ? { ...transcript, ...updates } 
          : transcript
      )
    )
  }

  const deleteTranscript = (transcriptId: string) => {
    const remainingTranscripts = transcripts.filter(transcript => transcript.id !== transcriptId)
    setTranscripts(remainingTranscripts)
    
    // If deleting the active transcript, switch to another one or clear selection
    if (activeTranscriptId === transcriptId) {
      const nextActiveId = remainingTranscripts.length > 0 ? remainingTranscripts[0].id : null
      setActiveTranscriptId(nextActiveId)
    }
  }

  const activeTranscript = transcripts.find(transcript => transcript.id === activeTranscriptId)

  const applySummaryMode = (summaryMode: keyof typeof SUMMARY_MODES) => {
    const modeInstruction = SUMMARY_MODES[summaryMode]
    setInstruction(modeInstruction)
    setSelectedMode(summaryMode)
  }

  const generateSummary = async () => {
    if (!activeTranscript?.content.trim()) {
      alert('Please enter or upload a transcript')
      return
    }

    const transcriptContent = activeTranscript.content.trim()
    const summaryInstruction = instruction.trim() || 'Summarize the key points and action items from this meeting.'

    setLoading(true)
    
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcript: transcriptContent,
          instruction: summaryInstruction
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate summary')
      }

      const responseData = await response.json()
      updateTranscript(activeTranscript.id, { summary: responseData.summary })
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error generating summary: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  const sendEmail = async () => {
    if (!activeTranscript?.summary?.trim()) {
      alert('Please generate a summary first')
      return
    }
    
    const emailAddresses = emails.trim()
    if (!emailAddresses) {
      alert('Please enter recipient email addresses')
      return
    }

    // Parse and clean email addresses
    const recipientEmails = emailAddresses
      .split(',')
      .map(email => email.trim())
      .filter(email => email.length > 0)

    // Format email content with meeting details
    const emailContent = `${activeTranscript.name} (${activeTranscript.category})\n\n${activeTranscript.summary.trim()}`

    setEmailLoading(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          summary: emailContent,
          emails: recipientEmails
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      alert('Summary sent successfully!')
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error sending email: ${errorMessage}`)
    } finally {
      setEmailLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Meeting Notes Summarizer</h1>
      
      {/* Transcript Management */}
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3>Transcripts</h3>
          <div>
            <input 
              type="file" 
              accept=".txt" 
              multiple
              onChange={handleFileUpload}
              style={{ marginRight: '10px' }}
            />
            <button 
              onClick={addNewTranscript}
              style={{ 
                padding: '8px 16px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              + New Transcript
            </button>
          </div>
        </div>

        {/* Transcript Tabs */}
        {transcripts.length > 0 && (
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              {transcripts.map(transcript => (
                <div key={transcript.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '8px 12px',
                  backgroundColor: activeTranscriptId === transcript.id ? '#0070f3' : '#f5f5f5',
                  color: activeTranscriptId === transcript.id ? 'white' : 'black',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: '1px solid #ddd'
                }}>
                  <span 
                    onClick={() => setActiveTranscriptId(transcript.id)}
                    style={{ marginRight: '8px' }}
                  >
                    {transcript.name} ({transcript.category})
                  </span>
                  <button 
                    onClick={() => deleteTranscript(transcript.id)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: activeTranscriptId === transcript.id ? 'white' : '#666',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Transcript Editor */}
        {activeTranscript && (
          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input
                type="text"
                value={activeTranscript.name}
                onChange={(e) => updateTranscript(activeTranscript.id, { name: e.target.value })}
                placeholder="Meeting name"
                style={{ flex: 1, padding: '8px', fontSize: '14px' }}
              />
              <select
                value={activeTranscript.category}
                onChange={(e) => updateTranscript(activeTranscript.id, { category: e.target.value })}
                style={{ padding: '8px', fontSize: '14px' }}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <textarea
              value={activeTranscript.content}
              onChange={(e) => updateTranscript(activeTranscript.id, { content: e.target.value })}
              placeholder="Paste your meeting transcript here..."
              style={{ width: '100%', height: '200px', padding: '10px', fontSize: '14px' }}
            />
          </div>
        )}
      </div>

      {/* AI Summary Modes */}
      {activeTranscript && (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
          <h3>AI Summary Modes</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
            {Object.entries(SUMMARY_MODES).map(([key, description]) => (
              <button
                key={key}
                onClick={() => applySummaryMode(key as keyof typeof SUMMARY_MODES)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: selectedMode === key ? '#0070f3' : '#f5f5f5',
                  color: selectedMode === key ? 'white' : 'black',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                title={description}
              >
                {key === 'executive' && '📊 Executive Summary'}
                {key === 'actionItems' && '✅ Action Items Only'}
                {key === 'sentiment' && '😊 Sentiment Analysis'}
                {key === 'timeline' && '⏰ Timeline of Events'}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <h4>Custom Instruction</h4>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="Enter custom summarization instructions..."
              style={{ width: '100%', height: '80px', padding: '10px', fontSize: '14px' }}
            />
          </div>

          <button 
            onClick={generateSummary}
            disabled={loading || !activeTranscript.content.trim()}
            style={{ 
              padding: '12px 24px', 
              fontSize: '16px', 
              backgroundColor: loading ? '#ccc' : '#0070f3', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: loading || !activeTranscript.content.trim() ? 'not-allowed' : 'pointer',
              marginBottom: '20px'
            }}
          >
            {loading ? 'Generating...' : 'Generate Summary'}
          </button>
        </div>
      )}

      {/* Generated Summary */}
      {activeTranscript?.summary && (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
          <h3>Generated Summary (Editable)</h3>
          <textarea
            value={activeTranscript.summary}
            onChange={(e) => updateTranscript(activeTranscript.id, { summary: e.target.value })}
            style={{ width: '100%', height: '300px', padding: '10px', fontSize: '14px' }}
          />
        </div>
      )}

      {/* Email Sharing */}
      {activeTranscript?.summary && (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
          <h3>Share via Email</h3>
          <input
            type="text"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="Enter email addresses separated by commas"
            style={{ width: '100%', padding: '10px', fontSize: '14px', marginBottom: '10px' }}
          />
          <button 
            onClick={sendEmail}
            disabled={emailLoading}
            style={{ 
              padding: '12px 24px', 
              fontSize: '16px', 
              backgroundColor: emailLoading ? '#ccc' : '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: emailLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {emailLoading ? 'Sending...' : 'Send Email'}
          </button>
        </div>
      )}

      {/* Getting Started Message */}
      {transcripts.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '8px',
          color: '#666'
        }}>
          <h3>Welcome to Meeting Notes Summarizer</h3>
          <p>Upload transcript files or create a new transcript to get started.</p>
          <p>Organize multiple meetings and choose from specialized AI analysis modes.</p>
        </div>
      )}
    </div>
  )
}
