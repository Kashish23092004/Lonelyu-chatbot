import React, { useRef, useEffect, useState } from 'react'
import { Plus, Mic, SendHorizontal } from 'lucide-react'
import { URL } from '../config/geminiapi'

const Chatbotcentre = () => {
  const [questions, setquestions] = useState('')
  const [messages, setMessages] = useState([]) // Conversation history
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  // Scroll to bottom when new message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading])

  const sendq = async () => {
    if (!questions.trim()) return

    setMessages(prev => [...prev, { role: 'user', text: questions }])
    setLoading(true)

    const payload = {
      contents: [
        { parts: [{ text: questions }] }
      ]
    }

    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json()
        setMessages(prev => [
          ...prev,
          { role: 'error', text: 'API Error: ' + (errorData?.error?.message || 'Unknown error') }
        ])
        setLoading(false)
        return
      }

      const data = await response.json()
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.'

      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: aiText }
      ])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'error', text: 'Fetch error: ' + error.message }
      ])
    }
    setquestions('')
    setLoading(false)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !loading) sendq()
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-green-950 to-black flex flex-col items-center justify-between">
      <div className="max-w-2xl w-full flex flex-col flex-1 justify-between px-2 py-4">
        {/* Header */}
        <div className="text-xl sm:text-2xl text-center text-white font-bold py-2 select-none">Hello there! What you want to talk about…</div>
        
        {/* Scrollable chat area */}
        <div className="flex-1 overflow-y-auto bg-black/60 rounded-md p-4 mt-2 mb-3 space-y-2 flex flex-col">
          {messages.length === 0 && (
            <div className="text-center text-green-400 mt-10 font-semibold">Start the conversation!</div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`
                whitespace-pre-line max-w-[80%] px-4 py-3 rounded-2xl shadow-sm
                ${msg.role === 'user'
                  ? 'ml-auto bg-gradient-to-tr from-green-600 to-black text-white text-right'
                  : msg.role === 'assistant'
                  ? 'mr-auto bg-gradient-to-tr from-white to-green-100 text-green-900'
                  : 'mr-auto bg-red-100 text-red-700'
                }
              `}
              style={{ wordBreak: 'break-word' }}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="mr-auto max-w-[70%] px-4 py-3 rounded-2xl bg-gradient-to-tr from-gray-700 to-green-900 text-green-200 animate-pulse">
              Thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 rounded-2xl px-3 py-2 w-full bg-black/70">
          <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="text-green-300 hover:text-green-500 p-2 rounded-full">
              <Plus size={20} />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-black text-green-200 rounded-box z-10 w-52 p-2 shadow-sm">
              <li><a>Upload a file</a></li>
              <li><a>Upload videos</a></li>
              <li><a>Connect your Github</a></li>
            </ul>
          </div>
          <input
            type='text'
            value={questions}
            onChange={e => setquestions(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholder='Type your message here!'
            className="bg-transparent flex-1 mx-2 outline-none text-green-200 placeholder:text-green-400 rounded-2xl w-full border-none"
          />
          <button className="text-green-300 hover:text-green-500 mr-1" disabled={loading}><Mic size={20} /></button>
          <button
            onClick={sendq}
            disabled={loading || !questions.trim()}
            className='text-green-300 hover:text-green-500'
          >
            <SendHorizontal size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbotcentre
