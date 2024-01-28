import Header from '../../components/header'
import SidebarAdmin from '../../components/SidebarAdmin'
import PerfilMensaje from './components/PerfilMensaje'

function PerfilMiembro() {
    return (
        <>
            <div className='w-full h-[1200px]  bg-slate-200 '>
                <Header />
                <div className='w-full h-full flex '>
                    <SidebarAdmin />
                    <div className='w-full h-full over'>
                        <div className='bg-white my-3 w-full h-20'>
                            <h1 className='text-2xl font-semibold italic p-5'>Miembro</h1>
                            <div className=' mb-10 '>
                                <PerfilMensaje />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilMiembro
