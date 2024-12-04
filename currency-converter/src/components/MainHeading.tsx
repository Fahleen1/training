interface Name {
  name: string;
}
export default function MainHeading({ name }: Name) {
  return <h1 className="text-4xl px-2 text-center font-bold">{name}</h1>;
}
