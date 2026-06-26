export default function PageOverlay() {
  return (
    <>
      {/* Subtle Paper Noise Texture */}
      <div className="fixed inset-0 z-[-2] paper-noise mix-blend-multiply opacity-50" />
      
      {/* Soft Vignette Edge Dimming */}
      <div className="fixed inset-0 z-[-1] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.03)]" />
    </>
  );
}
