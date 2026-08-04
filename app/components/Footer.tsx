import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto py-10 text-center text-zinc-400">
        <p> © ЧАСОВНИКАР 4000 Пловдив</p>
        <Link href="https://maps.app.goo.gl/SgRyhTKnjBgL3HL99"  target="_blank"
  className="text-blue-400 hover:underline">Стария град, Район Централен, ул. „Отец Паисий“ 7</Link> 
      </div>

    </footer>
  );
}