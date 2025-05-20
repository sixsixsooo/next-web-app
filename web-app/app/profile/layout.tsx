import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <ul>
        <li>
          <Link href="/profile/avatar">Avatar</Link>
        </li>
        <li>
          <Link href="/profile/name">Name</Link>
        </li>
      </ul>
    </div>
  );
}
