import React from 'react';

interface MainHeading {
  name: string;
}

export default function MainHeading({ name }: MainHeading) {
  return (
    <div className="flex justify-start">
      <h1 className="text-2xl text-color-black font-extrabold">{name}</h1>
    </div>
  );
}
