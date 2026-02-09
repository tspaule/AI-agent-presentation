import { motion } from 'framer-motion'

export default function ChatbotVsAgentDiagram() {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
      {/* Chatbot side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold text-white/40 mb-6 text-center uppercase tracking-wider text-sm">Before: Chatbot</h3>
        <div className="space-y-3">
          {[
            { icon: '\u{1F464}', text: 'You ask a question', type: 'human' },
            { icon: '\u{1F916}', text: 'AI answers', type: 'ai' },
            { icon: '\u{1F464}', text: 'You copy the output', type: 'human' },
            { icon: '\u{1F464}', text: 'You paste it somewhere', type: 'human' },
            { icon: '\u{1F464}', text: 'You come back with another question', type: 'human' },
            { icon: '\u{1F916}', text: 'AI answers again', type: 'ai' },
            { icon: '\u{1F464}', text: 'You repeat...', type: 'human' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                step.type === 'human' ? 'bg-white/5 text-white/50' : 'bg-white/[0.02] text-white/30'
              }`}
            >
              <span>{step.icon}</span>
              <span>{step.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-center text-white/20 text-xs uppercase tracking-wider"
        >
          You are the glue
        </motion.div>
      </motion.div>

      {/* Agent side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="rounded-2xl p-6 border border-brand/20"
        style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.06), rgba(219,39,119,0.02))' }}
      >
        <h3 className="text-xl font-bold text-brand mb-6 text-center uppercase tracking-wider text-sm">Now: Agent</h3>
        <div className="space-y-3">
          {[
            { icon: '\u{1F464}', text: 'You set a goal', type: 'human' },
            { icon: '\u{1F9E0}', text: 'Agent plans the approach', type: 'agent' },
            { icon: '\u26A1', text: 'Agent applies expertise', type: 'agent' },
            { icon: '\u{1F527}', text: 'Agent gathers information', type: 'agent' },
            { icon: '\u{1F4E5}', text: 'Agent works with data', type: 'agent' },
            { icon: '\u{1F504}', text: 'Agent iterates & verifies', type: 'agent' },
            { icon: '\u2705', text: 'Agent delivers completed work', type: 'agent' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                step.type === 'human' ? 'bg-white/5 text-white/50' : 'bg-brand/5 text-white/70 border border-brand/10'
              }`}
            >
              <span>{step.icon}</span>
              <span>{step.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 text-center text-brand text-xs uppercase tracking-wider font-semibold"
        >
          The agent is the engine
        </motion.div>
      </motion.div>
    </div>
  )
}
