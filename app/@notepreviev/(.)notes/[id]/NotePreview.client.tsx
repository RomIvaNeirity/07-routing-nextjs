"use client";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function NotePreviewClient() {
  const router = useRouter();
  const close = () => router.back();

  return (
    <>
      <Modal onClose={close}>
        <NoteDetailsClient />
        <button onClick={close}>Close</button>
      </Modal>
    </>
  );
}
