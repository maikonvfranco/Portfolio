import foto from '../assets/fotoprofissional.jpg'

function Hero() {
    return (
        <div className=" flex justify-between items-center p-15 pt-20">


            <div>
                <img src={foto} alt="Foto Profissional" className="w-64 h-64 rounded-full mx-auto  border-2 border-blue-500 transition-all duration-300 hover:scale-102 " />
            </div>

            <div className="flex flex-col transition-all duration-300 hover:scale-102 ">
                <h1 className="font-bold ">
                    Maikon Franco
                </h1>
                <p className="text-lg">
                    Full Stack Developer
                </p>
            </div>



        </div>
    )
}

export default Hero