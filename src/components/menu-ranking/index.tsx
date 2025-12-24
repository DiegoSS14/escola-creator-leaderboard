"use client"
import { useEffect, useState } from "react";
import ButtonMenu from "../button-menu";
import {
    getAllTimeRanking,
    getWeeklyRanking,
    getMounthRanking,
} from "@/lib/service/ranking.service";
import UserProps from "@/lib/service/interfaces/User";
import { useDispatch } from "react-redux";
import { setUsersRanking } from "@/store/auth/authSlice";

type Tab = 1 | 2 | 3;

export default function MenuRanking() {
    const [active, setActive] = useState<Tab>(1)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            let res: UserProps[] = []

            if (active === 2) res = await getWeeklyRanking()
            else if (active === 3) res = await getMounthRanking()
            else res = await getAllTimeRanking()

            dispatch(setUsersRanking(res))
        }

        fetchData();
    }, [active]);

    return (
        <section className="flex flex-col w-full px-10 py-4 h-fit justify-center">
            <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto items-center justify-center gap-2 md:gap-4">
                <ButtonMenu text="Ranking All-time" active={active === 1} onClick={() => setActive(1)} />
                <ButtonMenu text="Ranking Semanal" active={active === 2} onClick={() => setActive(2)} />
                <ButtonMenu text="Ranking Mensal" active={active === 3} onClick={() => setActive(3)} />
            </div>
        </section>
    );
}