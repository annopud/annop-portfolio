export default function Pillar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center rounded-full bg-purple-900 px-2 py-1">
      {children}
    </div>
  );
}
