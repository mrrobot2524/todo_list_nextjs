import Link from "next/link";

export default function Home() {
  return (
     <div>
          <h1>Добро пожаловать</h1>
          <p>Перейти к  <Link href="/todo" className="text-blue-300 underline">Todo приложению</Link></p>
      </div>
  );
}
