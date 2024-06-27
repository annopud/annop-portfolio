export default function Pillar({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex justify-center bg-purple-900 px-4 py-2 rounded-full`}>
      {children}
    </div>
  );
}
