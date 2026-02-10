import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ImageSlide({ title, subtitle, imageSrc, imageAlt, caption, overlay }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Full viewport image background with object-contain */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full"
          style={{
            objectFit: 'contain',
            background: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(245,245,245,0.5)',
          }}
        />
        {/* Gradient overlay from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: overlay || (isDark
              ? 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.2) 100%)'
              : 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 100%)'),
          }}
        />
      </div>

      {/* Title and caption at bottom - centered */}
      <div
        className="relative z-10 flex flex-col justify-end items-center w-full text-center"
        style={{ padding: '4vh 4vw' }}
      >
        {/* Subtitle label */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span
              style={{
                fontSize: '0.875rem',
                color: colors.brand,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {subtitle}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="tracking-tight text-center leading-tight mb-4"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '4rem',
            fontWeight: 'normal',
            color: colors.text,
          }}
        >
          {title}
        </motion.h2>

        {/* Caption */}
        {caption && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontSize: '1.5rem',
              color: colors.textSecondary,
              maxWidth: '700px',
              lineHeight: 1.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {caption}
          </motion.p>
        )}
      </div>
    </div>
  )
}
