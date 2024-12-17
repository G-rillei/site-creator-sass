"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ConsoleHistory() {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname.split("/").map((path, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              <Link
                href={pathname
                  .split("/")
                  .slice(0, index + 1)
                  .join("/")}
              >
                {path}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
