import { cn } from "@/lib/utils";

export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "w-full px-5 sm:px-8 md:px-12 lg:px-24",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
