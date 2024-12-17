interface IMainHeading {
  name: string;
}

export default function MainHeading({ name }: IMainHeading) {
  return (
    <div className="flex justify-start">
      <h1 className="text-2xl text-color-black font-extrabold">{name}</h1>
    </div>
  );
}
