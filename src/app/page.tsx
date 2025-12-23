'use client'
import CardOthers from "@/components/card-others/CardOthers";
import CardTop from "@/components/card-top";
import FooterBar from "@/components/footer-bar/FooterBar";
import LoginModal from "@/components/login-modal/LoginModal";
import MenuRanking from "@/components/menu-ranking";
import NavBar from "@/components/nav-bar";
import UserProps from "@/lib/service/interfaces/User";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [usersRanking, setUsersRanking] = useState<UserProps[]>([])
  const { auth } = useSelector((state: any) => state)
  const takeUsersRanking = useSelector((state: any) => state.auth.usersRanking)

  useEffect(() => {
    setUsersRanking(takeUsersRanking)
  }, [takeUsersRanking])

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
        <MenuRanking/>
      </section>
      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">

        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">🏆 Top 3 🏆</h1>
          <article className="w-full flex flex-col gap-3 items-center lg:flex-row">
            <CardTop
              userId={80}
              key={80}
              name="Maria Silva"
              avatarUrl="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              position={2}
              revenue={12345}
              isCurrentUser={false}
              salesCount={30}
            />
            <CardTop
              userId={20}
              key={20}
              name="Maria Silva"
              avatarUrl="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              position={1}
              revenue={12345}
              isCurrentUser={false}
              salesCount={30}
            />
            <CardTop
              userId={12}
              key={12}
              name="Maria Silva"
              avatarUrl="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
              position={3}
              revenue={12345}
              isCurrentUser={false}
              salesCount={30}
            />
          </article>
        </div>
      </section>

      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Demais posições</h1>
          <article className="w-full flex flex-col gap-3">
            {
              usersRanking.map(user => (
                <CardOthers
                  userId={user.userId}
                  key={user.userId}
                  name={user.name}
                  avatarUrl={user.avatarUrl}
                  position={user.position}
                  revenue={user.revenue}
                  isCurrentUser={user.isCurrentUser}
                  salesCount={user.salesCount}
                />
              ))
            }
          </article>
        </div>
      </section>
      <FooterBar />
      {
        auth.modal && <LoginModal />
      }
    </div>
  );
}
