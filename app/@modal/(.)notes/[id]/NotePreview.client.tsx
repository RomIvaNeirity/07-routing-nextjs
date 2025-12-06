// NotePreview.client.tsx

"use client";
import css from "../../NotePreview.module.css";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useParams } from "next/navigation";

export default function NotePreviewClient() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
    refetchOnMount: false,
  });
  const router = useRouter();
  const close = () => router.back();

  if (!data) return null;

  return (
    <>
      <Modal onClose={close}>
        <div className={css.container}>
          <div className={css.item}>
            <h2>{data.title}</h2>
            <p className={css.content}>{data.content}</p>
            <p className={css.date}>Created date: {data.createdAt}</p>
            <p className={css.tag}>{data.tag}</p>
          </div>

          <button onClick={close}>Close</button>
        </div>
      </Modal>
    </>
  );
}
