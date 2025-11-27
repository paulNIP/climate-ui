//import node modules libraries
import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import Link from "next/link";
import { IconLogin2 } from "@tabler/icons-react";

//import routes files
import { UserMenuItem } from "routes/HeaderRoute";

//import custom components
import { Avatar } from "components/common/Avatar";
import { getAssetPath } from "helper/assetPath";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserToggleProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

interface User {
  id: string;
  username: string;
  email: string;
  accesstoken: string;
}

const CustomToggle = React.forwardRef<HTMLAnchorElement, UserToggleProps>(
  ({ children, onClick }, ref) => (
    <Link ref={ref} href="#" onClick={onClick}>
      {children}
    </Link>
  )
);

const UserMenu = () => {

  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Remove token or user info from storage
    localStorage.removeItem("user"); // or whatever you store
    // Optionally, clear cookies or sessionStorage
    // Redirect to sign-in page
    router.push("/sign-in");
  };



  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <Avatar
          type="image"
          src={getAssetPath("/images/avatar/avatar-1.jpg")}
          size="sm"
          alt="User Avatar"
          className="rounded-circle"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="p-0 dropdown-menu-md">
        <div className="d-flex gap-3 align-items-center border-dashed border-bottom px-4 py-4">
          <Image
            src={getAssetPath("/images/avatar/avatar-1.jpg")}
            alt=""
            className="avatar avatar-md rounded-circle"
          />

          {user && (
              <div>
                <h4 className="mb-0 fs-5">{user.username}</h4>
                <p className="mb-0 text-secondary small">@{user.username}</p>
              </div>
            )}
        </div>
        <div className="p-3 d-flex flex-column gap-1">
          {UserMenuItem.map((item) => (
            <Dropdown.Item
              key={item.id}
              className="d-flex align-items-center gap-2"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Dropdown.Item>
          ))}
        </div>
        <div className="border-dashed border-top mb-4 pt-4 px-6">
          <button
            onClick={handleLogout}
            className="text-secondary d-flex align-items-center gap-2 btn btn-link p-0"
            type="button"
          >
            <span>
              <IconLogin2 size={20} strokeWidth={1.5} />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
