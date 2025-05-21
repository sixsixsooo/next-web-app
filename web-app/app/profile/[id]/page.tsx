import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://learn.javascript.ru/import-export/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function User({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>It is me{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
