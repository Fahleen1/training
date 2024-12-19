import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-14 border-b items-center gap-4 px-7">
      <Link href="/">Home</Link>
    </div>
  );
}
