import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const menuList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    title: "crafter",
    link: "/crafter",
  },
  {
    id: 4,
    title: "Community",
    link: "/community",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
];

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menuList.map((menu) => {
        return (
          <Link key={menu.id} to={menu.link} className={styles.menu_item}>
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
