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
import { SnippetShowForm } from "./snippet-show-form";

const languageIcons = {
  c: { icon: COriginal },
  cpp: { icon: CplusplusOriginal },
  java: { icon: JavaOriginal },
  python: { icon: PythonOriginal },
  javascript: { icon: JavascriptOriginal },
  csharp: { icon: CsharpOriginal },
  go: { icon: GoOriginal },
  ruby: { icon: RubyOriginal },
  swift: { icon: SwiftOriginal },
  kotlin: { icon: KotlinOriginal },
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
      variant="secondary"
      className="rounded-xl flex items-center justify-between whitespace-nowrap h-6 px-0"
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
    <Card className={cn("flex flex-col h-72 w-auto", className)} {...props}>
      <CardHeader className="flex flex-none p-0">
        <CardTitle className="h-8 px-4 py-2 flex items-center justify-between bg-muted rounded-t-xl">
          <span className="truncate">{snippet.title}</span>
          {renderLanguageBadge()}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <SnippetShowForm snippet={snippet} />
      </CardContent>
      <CardFooter className="flex-none h-6 p-2 pl-4 mb-0 bg-muted rounded-b-xl">
        {renderTimestamp()}
      </CardFooter>
    </Card>
  );
}
