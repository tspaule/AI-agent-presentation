import { motion } from 'framer-motion'

export default function ContentSlide({ title, subtitle, bullets, footnote, accentWord }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="flex flex-col justify-center px-20 py-16 w-full max-w-5xl mx-auto">
        {/* Subtitle tag */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-sm text-brand font-semibold tracking-widest uppercase">
              {subtitle}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-5xl font-normal text-white tracking-tight leading-tight mb-10"
        >
          {accentWord ? (
            <>
              {title.split(accentWord)[0]}
              <span className="gradient-text">{accentWord}</span>
              {title.split(accentWord)[1]}
            </>
          ) : title}
        </motion.h2>

        {/* Bullets */}
        <div className="space-y-5">
          {bullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              {bullet.icon ? (
                <span className="text-2xl mt-0.5 shrink-0">{bullet.icon}</span>
              ) : (
                <div className="mt-2.5 w-2 h-2 rounded-full bg-brand shrink-0" />
              )}
              <div>
                {bullet.heading && (
                  <span className="text-white font-semibold text-lg">{bullet.heading} </span>
                )}
                <span className="text-white/60 text-lg leading-relaxed">{bullet.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        {footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 text-sm text-white/30 italic"
          >
            {footnote}
          </motion.p>
        )}
      </div>
    </div>
  )
}
