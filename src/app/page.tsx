'use client'
import CardOthers from "@/components/card-others/CardOthers";
import CardTop from "@/components/card-top";
import FooterBar from "@/components/footer-bar/FooterBar";
import Header from "@/components/header/Header";
import LoginModal from "@/components/login-modal/LoginModal";
import MenuRanking from "@/components/menu-ranking";
import NavBar from "@/components/nav-bar";
import UserProps from "@/lib/service/interfaces/User";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [usersRankingGeneral, setUsersRankingGeneral] = useState<UserProps[]>([])
  const [usersRankingTop, setUsersRankingTop] = useState<UserProps[]>([])
  const { auth } = useSelector((state: any) => state)
  const takeUsersRanking = useSelector((state: any) => state.auth.usersRanking)

  useEffect(() => {
    if (!Array.isArray(takeUsersRanking)) {
      setUsersRankingGeneral([])
      return
    }

    const filteredGeneral = takeUsersRanking.filter(user => user.position > 3)
    setUsersRankingGeneral(filteredGeneral)

    const topOrder = [2, 1, 3]
    const filteredTop: UserProps[] = topOrder
      .map(p => takeUsersRanking.find(user => user.position === p))
      .filter(item => item)

    setUsersRankingTop(filteredTop)

  }, [takeUsersRanking])

  return (
    <div className="flex flex-col min-h-screen items-start">
      <NavBar />
      <Header />
      <MenuRanking />
      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">🏆 Top 3 🏆</h1>
          <article className="w-full flex flex-col gap-3 items-center lg:flex-row">

            {usersRankingTop.map(user => (
              <CardTop
                userId={user.userId}
                key={user.userId}
                name={user.name}
                avatarUrl={user.avatarUrl}
                position={user.position}
                revenue={user.revenue}
                isCurrentUser={user.isCurrentUser}
                salesCount={user.salesCount}
              />
            ))}
            {/* <CardTop
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
            /> */}
          </article>
        </div>
      </section>

      <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Demais posições</h1>
          <article className="w-full flex flex-col gap-3">
            {
              usersRankingGeneral.map(user => (
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
