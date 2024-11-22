import prisma from "@/lib/prisma";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SnippetCard } from "./components/snippet-card";

export default async function SnippetsPage() {
  const snippets = await prisma.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return <SnippetCard key={snippet.id} snippet={snippet} />;
  });

  return (
    <div className="h-full px-4 py-2 lg:py-4 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Snippets</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircle />
            Share Snippet
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {renderedSnippets}
      </div>
    </div>
  );
}
