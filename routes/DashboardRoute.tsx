//import node modules libraries
import { v4 as uuid } from "uuid";
import {
  IconFiles,
  IconShoppingBag,
  IconNews,
  IconFile,
  IconLock,
} from "@tabler/icons-react";

//import custom type
import { MenuItemType } from "types/menuTypes";

export const DashboardMenu: MenuItemType[] = [
  {
    id: uuid(),
    title: "Project",
    link: "/",
    icon: <IconFiles size={20} strokeWidth={1.5} />,
  },
  {
    id: uuid(),
    title: "Draft Budgets",
    link: "/ecommerce",
    icon: <IconShoppingBag size={20} strokeWidth={1.5} />,
  },
  {
    id: uuid(),
    title: "Blog",
    link: "/blog",
    icon: <IconNews size={20} strokeWidth={1.5} />,
  },
  {
    id: uuid(),
    title: "Auth",
    link: "/sign-in",
    icon: <IconLock size={20} strokeWidth={1.5} />,
  },


];
