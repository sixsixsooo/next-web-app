"use client";

export default function Error({ error }: { error: Error }) {
  return <h1>Need feex {error.message}</h1>;
}
