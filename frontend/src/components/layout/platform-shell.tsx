import { AmbientBackground } from "@/components/layout/ambient-background";
import { Sidebar } from "@/components/layout/sidebar";

export function PlatformShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden px-4 pb-8 pt-16 lg:px-8 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
