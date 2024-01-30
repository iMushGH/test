import Link from "next/link";
import React from "react";

type MenuProps = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

const NavMenu = (props: MenuProps) => {
  const { title, url, icon } = props;
  return (
    <div>
      <Link href={url} className="flex flex-row items-center justify-between">
        <div className="mr-4">{icon}</div>
        {title}
      </Link>
    </div>
  );
};

export default NavMenu;
