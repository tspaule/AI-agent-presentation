import { motion } from 'framer-motion'

export default function ImageSlide({ title, subtitle, imageSrc, imageAlt, caption, overlay }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-contain bg-black/50"
        />
        {/* Overlay gradient */}
        <div className={`absolute inset-0 ${overlay || 'bg-gradient-to-t from-surface via-surface/60 to-surface/30'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end w-full px-20 pb-20">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="text-sm text-brand font-semibold tracking-widest uppercase">
              {subtitle}
            </span>
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-5xl font-normal text-white tracking-tight leading-tight mb-4"
        >
          {title}
        </motion.h2>

        {caption && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-white/50 max-w-2xl"
          >
            {caption}
          </motion.p>
        )}
      </div>
    </div>
  )
}
