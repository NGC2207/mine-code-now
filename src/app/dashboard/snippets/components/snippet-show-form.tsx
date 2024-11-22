"use client";

import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";

interface SnippetShowFormProps {
  snippet: Snippet;
}

export function SnippetShowForm({ snippet }: SnippetShowFormProps) {
  return (
    <div className="flex-grow">
      <Editor
        height="100vh"
        theme="vs-light"
        language={snippet.language}
        defaultValue={snippet.code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
            verticalScrollbarSize: 0,
            horizontalScrollbarSize: 0,
          },
          scrollBeyondLastLine: false,
          guides: {
            bracketPairs: true,
            indentation: true,
          },
          showFoldingControls: "always",
          fontSize: 14,
        }}
      />
    </div>
  );
}
