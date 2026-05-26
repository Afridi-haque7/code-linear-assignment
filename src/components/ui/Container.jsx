import { cn } from "@/lib/utils";

export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "w-full px-24",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
