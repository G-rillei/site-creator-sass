import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  LayoutPanelLeft,
  NotepadText,
  Users,
  Users2,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Website",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        url: "/console",
      },
      {
        title: "Posts",
        icon: NotepadText,
        url: "/console/posts",
      },
      {
        title: "Pages",
        icon: LayoutPanelLeft,
        url: "/console/pages",
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "Users",
        icon: Users,
        url: "/console/users",
      },
      {
        title: "Clients",
        icon: Users2,
        url: "/console/clients",
      },
    ],
  },
];

export function ConsoleSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Input placeholder="Search for anything" />
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {item.items.map((subItem) => (
                <SidebarMenuItem key={subItem.title}>
                  <SidebarMenuButton asChild>
                    <Link href={subItem.url}>
                      <subItem.icon />
                      {subItem.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
