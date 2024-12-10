interface IMainHeading {
  name: string;
}
export default function MainHeading({ name }: IMainHeading) {
  return <h1 className="text-4xl px-2 text-center font-bold">{name}</h1>;
}
