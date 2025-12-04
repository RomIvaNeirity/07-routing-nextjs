// app/notes/layout.tsx

import NotesSidebar from "./filter/@sidebar/default";
import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
    <section className={css.container}>
      <aside>
        <div className={css.sidebar}>
          <NotesSidebar />
        </div>
      </aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
};

export default NotesLayout;
