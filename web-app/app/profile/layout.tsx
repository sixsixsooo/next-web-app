import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <button>
        <Link href="/profile/avatar">Avatar</Link>
      </button>
      <button>
        <Link href="/profile/name">Name</Link>
      </button>
    </div>
  );
}
