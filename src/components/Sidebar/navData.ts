import { BsBoxArrowLeft } from "react-icons/bs";
import {
  FaDatabase, FaHeart, FaHome, FaMusic,
  FaUserAlt
} from "react-icons/fa";
import { GiBackwardTime, GiMoneyStack } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { NavItem } from "./types";


export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/dashboard",
    icon: FaHome,
    label: "Dashboard",
  },
  {
    type: "link",
    href: "/search",
    icon: RiSearchLine,
    label: "Search",
  },
  {
    type: "link",
    href: "/novo-item",
    icon: GiMoneyStack,
    label: "Novo item",
  },
  {
    type: "link",
    href: "/clips",
    icon: FaMusic,
    label: "Clips",
  },
  {
    type: "link",
    href: "/producers",
    icon: FaUserAlt,
    label: "Producers",
  },
  {
    type: "header",
    label: "Library",
  },
  {
    type: "link",
    href: "/recent",
    icon: GiBackwardTime,
    label: "Recent",
  },
  {
    type: "link",
    href: "/favorites",
    icon: FaHeart,
    label: "Favorites",
  },
  {
    type: "link",
    href: "/local",
    icon: FaDatabase,
    label: "Local",
  },
  {
    type: "header",
    label: "General",
  },
  {
    type: "link",
    href: "/settings",
    icon: IoIosSettings,
    label: "Settings",
  },
  {
    type: "link",
    href: "/logout",
    icon: BsBoxArrowLeft,
    label: "Log Out",
  },
];
