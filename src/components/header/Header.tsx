export default function Header() {
    return (
        <section className="flex flex-col w-full p-10 h-fit justify-center bg-[url('/header-bg.jpg')] bg-cover bg-center">
            <div className="flex flex-col w-full md:flex-row max-w-4xl mx-auto mt-20 items-center justify-between">
                <img className="w-full h-fit md:h-full md:w-fit" src="/maratona-viral-logo.svg" alt="Maratona Viral" />
                <img className="h-full md:h-full md:w-fit" src="/top10-title.svg" alt="Top 10" />
            </div>
        </section>
    )
}