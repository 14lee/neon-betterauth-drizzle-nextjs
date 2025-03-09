import Nav from "./_components/nav";

export default function Header() {
  return <header className="h-[48px] border-b border-gray-200 flex items-center justify-between px-6">
    <div className="text-2xl font-bold">
      onvo
    </div>
    <Nav />
  </header>;
}
