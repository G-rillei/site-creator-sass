import { ThemeToggle } from "@/components";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ConsoleSidebar } from "./console-sidebar";
import { ConsoleHistory } from "./console-history";

type ConsoleLayoutProps = {
  children: React.ReactNode;
};

export default function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <SidebarProvider className="d-flex bg-sidebar h-dvh">
      <ConsoleSidebar />
      <div className="flex flex-col flex-1 bg-background rounded-xl border">
        <header className="flex justify-between items-center h-14 border-b px-4">
          <div>
            <ConsoleHistory />
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
