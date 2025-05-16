type Props = {
  params: {
    avatar: string;
  };
};

export default function UserAvatar({ params: { avatar } }: Props) {
  return <h1>Avatar usera {avatar}</h1>;
}
