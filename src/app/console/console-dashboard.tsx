import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutPanelLeft, NotepadText, Text, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Active Users",
    value: 0,
    icon: Users,
    quickActions: [
      {
        title: "View all users",
        href: "/console/users",
      },
      {
        title: "Add new user",
        href: "/console/users/new",
      },
    ],
  },
  {
    title: "Pages",
    value: 0,
    icon: LayoutPanelLeft,
    quickActions: [
      {
        title: "View all pages",
        href: "/console/pages",
      },
      {
        title: "Add new page",
        href: "/console/pages/new",
      },
    ],
  },
  {
    title: "Posts",
    value: 0,
    icon: NotepadText,
    quickActions: [
      {
        title: "View all posts",
        href: "/console/posts",
      },
      {
        title: "Add new post",
        href: "/console/posts/new",
      },
    ],
  },
  {
    title: "Comments",
    value: 0,
    icon: Text,
    quickActions: [
      {
        title: "View all comments",
        href: "/console/comments",
      },
    ],
  },
];

export function ConsoleDashboard() {
  return (
    <div className={`grid gap-4 grid-cols-4`}>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <CardTitle className="text-lg">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2 px-6 py-2">
            <stat.icon className="w-5 h-5" />
            {stat.value}
          </CardContent>
          <CardFooter className="p-2">
            {stat.quickActions.map((action) => (
              <Button asChild variant="ghost" key={action.href}>
                <Link href={action.href}>{action.title}</Link>
              </Button>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
