// Web3Forms checks `botcheck` — bots fill the field and get rejected.
export default function Honeypot() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
    />
  )
}
