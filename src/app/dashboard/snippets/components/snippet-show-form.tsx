"use client";

import "@fontsource-variable/fira-code";
import { Snippet } from "@prisma/client";
import { createHighlighter } from "shiki";
import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor-core";
import { shikiToMonaco } from "@shikijs/monaco";

interface SnippetShowFormProps {
  snippet: Snippet;
}

export function SnippetShowForm({ snippet }: SnippetShowFormProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    async function initializeEditor() {
      const highlighter = await createHighlighter({
        themes: ["one-dark-pro"],
        langs: [snippet.language],
      });

      monaco.languages.register({ id: snippet.language });

      shikiToMonaco(highlighter, monaco);

      const editorContainer = editorContainerRef.current;
      if (!editorContainer) {
        throw new Error("Editor container not found");
      }

      if (!editorRef.current) {
        editorRef.current = monaco.editor.create(editorContainer, {
          value: snippet.code,
          language: snippet.language,
          theme: "vitesse-light",
          readOnly: true,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
            // verticalScrollbarSize: 0,
            // horizontalScrollbarSize: 0,
          },
          // scrollBeyondLastLine: false,
          guides: {
            bracketPairs: true,
            indentation: true,
          },
          showFoldingControls: "always",
          fontSize: 14,
          fontFamily: "Fira Code Variable, monospace",
          fontLigatures: true,
          automaticLayout: true,
        });
      }
    }

    initializeEditor();

    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
        editorRef.current = null;
      }
    };
  }, [snippet]);

  return (
    <div
      ref={editorContainerRef}
      style={{ height: "100vh" }}
    ></div>
  );
}
