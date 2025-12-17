import ButtonMenu from "@/components/button-menu";
import CardOthers from "@/components/card-others/CardOthers";
import CardTop from "@/components/card-top";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start">
      <NavBar />
      <section className="flex flex-col w-full p-10 h-fit justify-center bg-[url('/header-bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full md:flex-row max-w-4xl mx-auto mt-20 items-center justify-between">
          <img className="w-full h-fit md:h-full md:w-fit" src="/maratona-viral-logo.svg" alt="Maratona Viral" />
          <img className="h-full md:h-full md:w-fit" src="/top10-title.svg" alt="Top 10" />
        </div>
      </section>

      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto items-center justify-center gap-2 md:gap-4">
          <ButtonMenu text="Ranking All-time" />
          <ButtonMenu text="Ranking Semanal" />
          <ButtonMenu text="Ranking Mensal" />
        </div>
      </section>
      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">

        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">🏆 Top 3 🏆</h1>
          <article className="w-full flex flex-col gap-3 items-center lg:flex-row">
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
              position={3}
              username="@marinasilva"
              value={255000}
            />
          </article>
        </div>
      </section>

      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Demais posições</h1>
          <article className="w-full flex flex-col gap-3">
            <CardOthers
              name="Maria Silva"
              image="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              username="@mariasilva"
              position={86}
              value={12345}
            />
            <CardOthers
              name="Maria Silva"
              image="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              username="@mariasilva"
              position={86}
              value={12345}
            />
            <CardOthers
              name="Maria Silva"
              image="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              username="@mariasilva"
              position={86}
              value={12345}
            />
          </article>
        </div>
      </section>
      <SideBar/>
    </div>
  );
}
