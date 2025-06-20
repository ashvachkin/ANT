import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ArchiveIcon } from '~/assets/icons/ArchiveIcon';
import { CalendarIcon } from '~/assets/icons/CalendarIcon';
import { LayoutSidebarLeftCollapseIcon } from '~/assets/icons/LayoutSidebarLeftCollapseIcon';
import { ProfileIcon } from '~/assets/icons/ProfileIcon';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const menuItems = [
    { path: '/profile', icon: <ProfileIcon />, textKey: 'sidebar.profile' },
    { path: '/schedule', icon: <CalendarIcon />, textKey: 'sidebar.schedule' },
    { path: '/homework', icon: <ArchiveIcon />, textKey: 'sidebar.homework' },
  ];

  return (
    <div className={clsx(styles.sidebar, !isOpen && styles.closed)}>
      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles.menuItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) => clsx(styles.menuLink, isActive && styles.active)}
              >
                <span className={styles.iconWrapper}>{item.icon}</span>
                <span className={styles.menuText}>{t(item.textKey)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type='button'
        className={clsx(styles.sidebarIcon, !isOpen && styles.rotated)}
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Свернуть меню' : 'Развернуть меню'}
      >
        <LayoutSidebarLeftCollapseIcon />
      </button>
    </div>
  );
};

export { Sidebar };