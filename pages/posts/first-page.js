import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hello, my name is Chae jin.</h1>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
