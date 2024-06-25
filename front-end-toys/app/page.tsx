export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div className="flex flex-col w-full items-center">
        <span className="text-2xl">Welcome to my Front End Toy Problems</span>
        <span>Click from the list below to view</span>
        <div className="flex flex-wrap p-2 place-content-evenly w-10/12">
          {/* Will be mapping over the amount of items later */}
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
          <div className="flex flex-col items-center justify-center m-2 w-36 h-40 bg-slate-700">
            <span className="text-xl">Item X</span>
            <span className="text-l">Desc</span>
          </div>
        </div>
      </div>
    </main>
  );
}
