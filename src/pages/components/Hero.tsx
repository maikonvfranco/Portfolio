import foto from '../../assets/fotoprofissional.jpg'

function Hero() {
    return (
        <div className=" flex justify-between items-center p-15">

            <div className="flex flex-col">
                <h1 className="font-bold">
                    Maikon Franco
                </h1>
                <p className="text-lg">
                    Full Stack Developer
                </p>
            </div>

            <div>
                <img src={foto} alt="Foto Profissional" className="w-64 h-64 rounded-full mx-auto" />
            </div>

        </div>
    )
}

export default Hero