import Link from 'next/link';

import styles from './previewButton.module.scss';

export default function Header(): JSX.Element {
  return (
    <aside className={styles.containerButton}>
      <Link href="/api/exit-preview">
        <a>Sair do modo Preview</a>
      </Link>
    </aside>
  );
}
