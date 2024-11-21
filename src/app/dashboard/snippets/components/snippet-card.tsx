import {
  CsharpOriginal,
  JavaOriginal,
  PythonOriginal,
  JavascriptOriginal,
  KotlinOriginal,
  COriginal,
  GoOriginal,
  RubyOriginal,
  SwiftOriginal,
  CplusplusOriginal,
} from "devicons-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Snippet } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const colors = {
  green: "bg-green-50",
  gray: "bg-gray-50",
  red: "bg-red-50",
  yellow: "bg-yellow-50",
  purple: "bg-purple-50",
  blue: "bg-blue-50",
  orange: "bg-orange-50",
} as const;

const languageIcons = {
  c: { icon: COriginal, color: colors.green },
  cpp: { icon: CplusplusOriginal, color: colors.gray },
  java: { icon: JavaOriginal, color: colors.red },
  python: { icon: PythonOriginal, color: colors.yellow },
  javascript: { icon: JavascriptOriginal, color: colors.yellow },
  csharp: { icon: CsharpOriginal, color: colors.purple },
  go: { icon: GoOriginal, color: colors.blue },
  ruby: { icon: RubyOriginal, color: colors.red },
  swift: { icon: SwiftOriginal, color: colors.orange },
  kotlin: { icon: KotlinOriginal, color: colors.blue },
} as const;

type Language = keyof typeof languageIcons;

interface SnippetCardProps extends React.ComponentProps<typeof Card> {
  snippet: Snippet;
}

export function SnippetCard({
  snippet,
  className,
  ...props
}: SnippetCardProps) {
  const languageInfo = languageIcons[snippet.language as Language];
  const createdAt = new Date(snippet.createdAt);
  const updatedAt = new Date(snippet.updatedAt);
  const isUpdated = createdAt.getTime() !== updatedAt.getTime();

  const renderLanguageBadge = () => (
    <Badge
      variant="outline"
      className={cn(
        languageInfo?.color,
        "rounded-xl flex items-center justify-between whitespace-nowrap h-6"
      )}
    >
      <div className="flex items-center gap-1">
        {languageInfo?.icon && <languageInfo.icon />}
        <span>{snippet.language}</span>
      </div>
    </Badge>
  );

  const renderTimestamp = () => (
    <span className="text-sm text-muted-foreground">
      {isUpdated ? "updatedAt: " : "createdAt: "}
      {isUpdated ? updatedAt.toLocaleString() : createdAt.toLocaleString()}
    </span>
  );

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-col flex-none p-0">
        <CardTitle className="h-8 p-2 pl-4 flex items-center justify-between bg-muted rounded-t-xl">
          <span className="truncate">{snippet.title}</span>
          {renderLanguageBadge()}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full border-y">
          <pre className="p-2 rounded-md overflow-auto whitespace-pre">
            <code>{snippet.code}</code>
          </pre>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex-none h-6 p-2 pl-4 mb-0 bg-muted rounded-b-xl">
        {renderTimestamp()}
      </CardFooter>
    </Card>
  );
}
