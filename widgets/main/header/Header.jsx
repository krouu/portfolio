const Header = () => {
    return (  
        <section className="w-screen">
            <div style={{position:"relative"}} className="flex justify-center items-center">
                <img className="w-full" src="/mainBack.gif" alt="" />
                <div style={{position:"absolute"}} className="flex flex-col items-center">
                    <img className="w-fit" src="/mainLogo.png" alt="" />
                    <h1 
                        style={{fontFamily:"DungGeunMo"}} 
                        className="font-black text-white text-4xl md:text-7xl lg:text-9xl"
                    >
                        PORTFOLIO
                    </h1>
                </div>
            </div>
        </section>
    );
}
 
export default Header;