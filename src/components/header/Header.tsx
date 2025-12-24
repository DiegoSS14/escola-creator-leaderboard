export default function Header() {
    return (
        <section className="flex flex-col w-full p-10 h-fit justify-center bg-[url('/header-bg.jpg')] bg-cover bg-center">
            <div className="flex flex-col gap-30 md:gap-16 w-full md:flex-row max-w-4xl mx-auto mt-20 items-center justify-center">
                <div className="relative w-full max-w-100 h-fit md:h-full md:w-fit">
                    <img
                        className="absolute top-3 -left-10 w-22"
                        src="/header/profiles.png"
                        alt="Profile"
                    />
                    <img
                        className="
                        absolute 
                        -bottom-11 
                        -right-12
                        md:-left-16 
                        w-24"
                        src="/header/profile.png"
                        alt="Profile"
                    />
                    <img
                        className="w-full h-fit"
                        src="/header/logo.svg"
                        alt="Maratona Viral"
                    />
                </div>
                {/* <img className="w-full h-fit md:h-full md:w-fit" src="/maratona-viral-logo.svg" alt="Maratona Viral" /> */}
                {/* <img className="h-full md:h-full md:w-fit" src="/top10-title.svg" alt="Top 10" /> */}
                <div className="flex flex-col gap-4 items-center justify-center md:h-full md:w-fit max-h-80">
                    <div className="flex items-center justify-center w-full h-24">
                        <img
                            className="
                            h-full
                            mb-16
                            max-h-24
                            "
                            src="/header/profile1.png"
                            alt="Profile"
                        />
                        <img
                            className="
                            h-full
                            max-h-20
                            "
                            src="/header/hearth.png"
                            alt="Profile"
                        />
                    </div>

                    <img
                        className="
                        h-full
                        "
                        src="/header/TOP10.svg"
                        alt="TOP 10"
                    />

                    <h1 className="max-w-80 font-bold text-[20px] text-white text-center"
                    >{"Passaporte B4YOU Creators House".toUpperCase()}</h1>
                    <img
                        className="
                        w-full
                        max-w-55
                        "
                        src="/header/stars.svg"
                        alt="Profile"
                    />
                </div>
            </div>
        </section>
    )
}