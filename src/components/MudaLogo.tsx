export default function MudaLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-black flex items-center justify-center flex-shrink-0"
    >
      <span
        style={{ fontSize: size * 0.32, letterSpacing: '-0.02em' }}
        className="text-white font-body font-light select-none"
      >
        mud<span style={{ fontWeight: 400 }}>A</span>
      </span>
    </div>
  )
}
