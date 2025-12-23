import { alternModal } from "@/store/auth/authSlice"
import { formatValue } from "@/utilities/FormatValue"
import { MdLogin, MdLogout } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

export default function FooterBar() {

    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.auth.user)

    function handleClick() {
        dispatch(alternModal(true))
    }

    return (
        <div className="sticky bottom-0 w-full flex justify-center items-center bg-primary p-4">
            {!user ? (
                <div className="flex flex-col w-full gap-4 items-center justify-start max-w-4xl sm:flex-row sm:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-[20px] text-center font-bold text-secondary sm:text-start">
                            Seu nome não está entre os top 10?
                        </h1>
                        <h2 className="text-white text-center sm:text-start">
                            Faça login e confira o quão perto você está de chegar no topo
                        </h2>
                    </div>
                    <button
                        className="
                        min-w-36
                        flex 
                        items-center
                        justify-center 
                        gap-2 h-10 
                        text-zinc-800 
                        text-[14px] 
                        font-semibold 
                        bg-white 
                        rounded-xl 
                        px-3 
                        shadow-2xl
                        transition-all
                        hover:drop-shadow-xl shadow-blue-950
                        hover:scale-102
                        cursor-pointer
                        "
                        onClick={(e) => { handleClick() }}
                    >
                        <MdLogin
                            size={24}
                            color="#27272a"
                        />
                        Fazer login
                    </button>
                </div>
            ) : (
                <div className="flex w-full gap-4 items-end justify-start max-w-4xl sm:justify-between md:items-center">
                    <h1 className="absolute md:relative text-right md:text-left right-6 top-6 md:right-0 md:top-0 w-20 text-4xl md:text-4xl font-bold text-white">
                        #{user.position}
                    </h1>
                    <div className="w-full flex flex-col justify-between items-start md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <img
                                src={user.avatarUrl}
                                className="
                            h-14 w-14
                            rounded-full 
                            object-cover
                            bg-gray-400
                            "
                            />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold text-white">{user.name}</h1>
                                <span className="text-[14px] text-white/80">@{user.name}</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col-reverse items:start max-w-80 md:justify-center md:gap-0 md:flex-col md:items-end">
                            <h1 className="text-[26px] font-bold text-secondary transition-all hover:scale-105">
                                {formatValue.format(user.revenue)}
                            </h1>
                            <span className="text-[14px] text-white/80">Faturamento</span>
                        </div>
                    </div>
                    <button
                        className="
                        min-w-24
                        flex 
                        items-center
                        justify-center 
                        gap-2 h-10 
                        text-white
                        text-[14px] 
                        font-semibold 
                        bg-red-600
                        rounded-xl 
                        px-3
                        shadow-2xl
                        transition-all
                        hover:drop-shadow-xl shadow-blue-950
                        hover:scale-102
                        cursor-pointer
                        "
                        onClick={(e) => { handleClick() }}
                    >
                        <MdLogout
                            size={24}
                            color="#fff"
                        />
                        Sair
                    </button>
                </div>
            )}
        </div>
    )
}