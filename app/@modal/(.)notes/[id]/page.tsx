// app/@modal/(.)notes/[id]/page.tsx

import NotePreviewClient from "./NotePreview.client";
import { fetchNotes } from "@/lib/api";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ id: string }>;
};

async function NotePreview({ params }: Props) {
  const queryClient = new QueryClient();

  const { id } = await params;
  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNotes(1, "", id),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreviewClient />
      </HydrationBoundary>
    </>
  );
}

export default NotePreview;
