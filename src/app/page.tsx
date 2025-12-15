import ButtonMenu from "@/components/button-menu";
import CardTop from "@/components/card-top";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start">
      <NavBar />
      <section className="flex flex-col w-full p-10 h-fit justify-center bg-[url('/header-bg.jpg')] bg-cover bg-center">
        <div className="flex w-full max-w-4xl mx-auto mt-20 items-center justify-between">
          <img className="h-full" src="/maratona-viral-logo.svg" alt="Maratona Viral" />
          <img className="h-full" src="/top10-title.svg" alt="Top 10" />
        </div>
      </section>
      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex w-full max-w-4xl mx-auto items-center justify-center gap-4">
          <ButtonMenu text="Ranking All-time" />
          <ButtonMenu text="Ranking Semanal" />
          <ButtonMenu text="Ranking Mensal" />
        </div>
      </section>
      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">🏆 Top 3 🏆</h1>
          <article className="w-full flex gap-3">
            <CardTop
              name="Mariana Silva"
              position={2}
              username="@marinasilva"
              value={255000}
            />
            <CardTop
              name="Mariana Silva"
              position={1}
              username="@marinasilva"
              value={255000}
            />
            <CardTop
              name="Mariana Silva"
              position={2}
              username="@marinasilva"
              value={255000}
            />
          </article>
        </div>
      </section>
    </div>
  );
}
