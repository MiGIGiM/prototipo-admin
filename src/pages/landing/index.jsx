import { CloudDownloadIcon } from '@heroicons/react/outline';
import Card from '../../components/Card';

const Landing = () => {
    return(
        <div className="bg-white overflow-hidden">
            <header className="w-full bg-[#ffb6ab] banner pt-8 h-[300px]">
                <div className=" px-4">
                    <div className="flex -skew-y-3 -mt-4">
                        <img src="/img/IconoPrincipal.png" alt="logo" className="-mt-5"/>
                        <span className="text-black uppercase">
                            <h1 className="text-8xl">Workout&Health</h1>
                            <p className="text-5xl">La mejor App para manternerte sano!</p>
                        </span>
                    </div>
                    <button className=" absolute top-10 right-4 border-2 border-white rounded-xl text-black p-2 bg-[#d37162] flex items-center h-fit max-w-min space-x-4">
                        <p className="uppercase text-3xl  max-w-[60%] text-left">Descarga Ahora</p>
                        <CloudDownloadIcon className="stroke-2 w-16" />
                    </button>
                </div>
            </header>
            <section className="w-full -mt-24 grid grid-cols-2 gap-4 px-4">
                <div className="bg-slate-200 diagonal-top-sm">
                    <h2 className="uppercase text-black text-4xl text-center mt-[5rem] -skew-y-3">lleva el control de tu dia</h2>
                    <div className="flex flex-col items-center mt-5 space-y-3 py-4">
                        <Card color="red" title="cuenta los pasos que das en el dia" />
                        <Card color="red" title="ten seguimiento de tu recorrido al hacer ejercicio" />
                        <Card color="red" title="consulta la cantidad de calorias que consumes en el dia" />
                        <Card color="red" title="consulta la cantidad de calorias que quemas en el dia" />
                        <Card color="red" title="consulta la cantidad de cuanta agua consumes en el dia" />
                        <Card color="red" title="mide el tiempor que haces al ejercitarte" />
                    </div>
                </div>
                <div className="w-full  diagonal-top-md -mt-24">
                    <div className="bg-slate-200  py-[7rem] relative">
                        <p className="w-full uppercase text-6xl text-black text-center mt-5 -skew-y-3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">Ejercicios Disponibles</p>
                    </div>
                    <div className="bg-slate-200 w-full h-full mt-4 px-8 py-4 grid grid-cols-3">
                        <div className="h-full">
                            <div className="w-full h-[484px] bg-black" />
                            <div className="bg-white w-full text-red-900 text-center text-6xl">CAMINAR</div>
                        </div>
                        <div className="h-full">
                            <div className="w-full h-[484px] bg-blue-500" />
                            <div className="bg-white w-full text-red-900 text-center text-6xl">CORRER</div>
                        </div>
                        <div className="h-full">
                            <div className="w-full h-[484px] bg-rose-500" />
                            <div className="bg-white w-full text-red-900 text-center text-6xl">CICLISMO</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;