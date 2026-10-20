function NavBar() {
    return (
        <>
            <div className="fixed flex justify-center items-center w-full h-16 bg-slate-800/40 border-white/10 backdrop-blur-md">
                <div className=" flex justify-between items-center w-1/4 text-white">
                    <p className=" cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 hover:text-blue-500" >Home</p>
                    <p className=" cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 hover:text-blue-500" >Portfolio</p>
                    <p className=" cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 hover:text-blue-500" >Contact</p>
                </div>
            </div>
        </>
    )
}

export default NavBar