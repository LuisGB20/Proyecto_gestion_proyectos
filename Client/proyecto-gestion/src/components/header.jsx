import Logotipo from "../assets/Logotipo.png"
import Perfil from "../assets/Perfil.png"
function Header() {
  return (
    <>
    <div>
      
      <div className="  absolute bg-blue-500 w-[1920px] ml-[-352px] mt-[-32px] h-20">
      <img src={Logotipo}
        alt="Logotipo"
        className=" w-14 h-14 ml-[80px] mt-[20px]"/>
        <p className=" font-sans text-3xl ml-[-1580px] text-blue-900 mt-[-40px]">PMS</p>
        <p className=" font-sans text-1xl ml-[-1100px] mt-[-50px]">English</p>
        <img
        src={Perfil}
        alt="Perfil"
        className=" w-14 h-14 ml-[1750px] mt-[-30px]"/>
        <p className=" font-sans text-1xl ml-[1740px] mt-[-60px]">Luis</p>
        <p className=" font-sans text-1xl ml-[1780px] mt-2">TID: 23545</p>
      </div>

    </div>
    </>
  )
}

export default Header