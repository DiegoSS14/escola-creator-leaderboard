import { MdLogin, MdLogout } from "react-icons/md"

export default function FooterBar() {
    return (
        <div className="sticky bottom-0 w-full flex justify-center items-center bg-primary p-4">
            <div className="flex flex-col w-full gap-4 items-center justify-start max-w-4xl sm:flex-row sm:justify-between">
                <div className="flex flex-col">
                    <h1 className="text-[20px] text-center font-bold text-secondary sm:text-start">
                        Seu nome não está entre os top 10?
                    </h1>
                    <h2 className="text-white text-center sm:text-start">
                        Faça login e confira o quão perto você está de chegar no topo
                    </h2>
                </div>
                <button className="
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
                ">
                    <MdLogin
                        size={24}
                        color="#27272a"
                    />
                    Fazer login
                </button>
            </div>
        </div>
    )
}