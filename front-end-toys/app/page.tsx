import ItemSelection from "./components/itemSelection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div className="flex flex-col w-full items-center">
        <span className="text-2xl">Welcome to my Front End Toy Problems</span>
        <span>Click from the list below to view</span>
        {/* thought is to switch out different components, but item selection is the inital view */}
        <ItemSelection />
      </div>
    </main>
  );
}
