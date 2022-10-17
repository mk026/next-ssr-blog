import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
