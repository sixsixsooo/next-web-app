type Props = {
  params: {
    id: string;
  };
};

export default function User({ params: { id } }: Props) {
  return <h1>It is me {id}</h1>;
}
