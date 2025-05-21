import { Metadata } from "next";
// import Link from "next/link";
// async function getData() {
//   const response = await fetch("https://learn.javascript.ru/import-export", {
//     next: {
//       revalidate: 60
//     }
//   });

//   return response.json();
// }

export const metadata: Metadata = {
  title: "Profile | Web-app",
};

export default async function User() {
  // const posts = await getData();

  return (
    <>
      <h1>It is you</h1>
      {/* <ul>
        {posts.map((post.any) => (
        <li key ={post.id}>
          <Link href={`/profile/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      </ul> */}
    </>
  );
}
