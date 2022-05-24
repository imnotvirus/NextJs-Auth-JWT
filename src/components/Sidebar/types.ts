import { IconType } from "react-icons/lib";

type HeaderItem = {
  type: "header";
};

type LinkItem = {
  type: "link";
  icon: IconType;
  href: string;
};
type ActionItem = {
  type: "action";
  icon: IconType;
};
type ItemTypeProps = HeaderItem | LinkItem | ActionItem;

export type NavItem = ItemTypeProps & {
  label: string;
};
