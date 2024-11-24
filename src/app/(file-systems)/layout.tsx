import { AppSidebar } from "@/components/common/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function FileSystemsLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
