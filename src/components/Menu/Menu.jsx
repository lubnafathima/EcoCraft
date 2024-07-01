import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
import { HiUserGroup, HiOutlineUserGroup } from "react-icons/hi2";
import { RiContactsBook3Line, RiContactsBook3Fill } from "react-icons/ri";
import styles from "./Menu.module.css";

const menuList = [
  {
    id: 1,
    icon: <IoHomeOutline />,
    iconSelected: <IoHomeSharp />,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    icon: <MdOutlineShoppingBag />,
    iconSelected: <MdShoppingBag />,
    link: "/shop",
    title: "Shop",
  },
  {
    id: 3,
    icon: <HiOutlineUserGroup />,
    iconSelected: <HiUserGroup />,
    link: "/community",
    title: "Community",
  },
  {
    id: 5,
    icon: <RiContactsBook3Line />,
    iconSelected: <RiContactsBook3Fill />,
    link: "/crafter",
    title: "crafter",
  },
  {
    id: 6,
    link: "/blog",
    title: "Blog",
  },
];

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.menu}>
      {menuList.map((menu, index) => {
        const hideItem = isMobile && index >= menuList.length - 1;
        const isSelected = location.pathname === menu.link;
        return (
          <Link
            key={menu.id}
            to={menu.link}
            className={`${styles.menu_item} ${hideItem ? styles.hide : ""}`}
          >
            {isMobile ? (isSelected ? menu.iconSelected : menu.icon) : menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
