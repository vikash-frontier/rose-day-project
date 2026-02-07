export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-rose-50 gap-4">
      <div className="text-4xl animate-bounce">🌹</div>
      <div className="font-display text-rose-800 text-xl animate-pulse">
        Picking the perfect rose for you...
      </div>
    </div>
  );
}
