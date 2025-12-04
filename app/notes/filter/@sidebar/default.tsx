// app/notes/filter/@sidebar/default.tsx

import css from "./SidebarNotes.module.css";

const NotesSidebar = async () => {
  return (
    <div>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuItem}>
          <a href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </a>
        </li>
        <li className={css.menuItem}>
          <a
            href={`url до сторінки за відповідним тегом`}
            className={css.menuLink}
          >
            Назва тегу
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NotesSidebar;
