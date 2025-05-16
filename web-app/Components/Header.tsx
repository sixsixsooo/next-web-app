import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="bag">Bag</Link>
      <Link href="profile">Profile</Link>
      <Link href="catalog">Catalog</Link>
    </header>
  );
};

export default Header;
