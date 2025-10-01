export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Met Museum Clone</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Coleções</li>
          <li>Eventos</li>
          <li>Visitante</li>
        </ul>
      </nav>
    </header>
  );
}
