// app/notes/filter/[...slug]/page.tsx

import { fetchNotes, getNotesByTags } from "@/lib/api";
import NotesClient from "./Notes.client";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByTags({ params }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1, ""),
  });

  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotesByTags(category);
  console.log("QUERY:", category);
  console.log("Filtered NOTES:", response);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient
          initialNotes={response.notes}
          initialTotalPages={response.totalPages}
          initialTag={category}
        />
      </HydrationBoundary>
    </>
  );
}
