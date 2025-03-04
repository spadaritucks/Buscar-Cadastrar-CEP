/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react"
import { Locais } from "../interfaces/local"

export default function Listagem() {

    const [locais, setLocais] = useState<Locais[]>([])

    useEffect(() => {
        const local = localStorage.getItem('locais')
        if (local) {
            const localParseado = JSON.parse(local)
            setLocais(localParseado)


        }
    }, [])




    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-8">
            <h1 className='text-3xl font-bold text-white '>Listagem de Endereços</h1>
            <table className="w-full">
                <thead>
                    <tr className=" text-gray-300 border-b border-stone-500">
                        <th className="py-2 px-4 ">CEP</th>
                        <th className="py-2 px-4 ">Logradouro</th>
                        <th className="py-2 px-4 ">Cidade</th>
                        <th className="py-2 px-4 ">Bairro</th>
                        <th className="py-2 px-4 ">Estado</th>
                        <th className="py-2 px-4 ">Número (N°)</th>
                    </tr>
                </thead>
                <tbody>
                    {locais ?
                        locais.map((local) => (
                            <tr key={local.cep} className="hover:bg-gray-400 text-white">
                                <td className="py-2 px-4 ">{local.cep}</td>
                                <td className="py-2 px-4 ">{local.logradouro}</td>
                                <td className="py-2 px-4 ">{local.cidade}</td>
                                <td className="py-2 px-4 ">{local.bairro}</td>
                                <td className="py-2 px-4 ">{local.estado}</td>
                                <td className="py-2 px-4 ">{local.numero}</td>
                            </tr>
                        ))
                        : <tr><td colSpan={6} className="py-2 px-4 text-center text-gray-200">Nenhum endereço encontrado</td></tr>}

                </tbody>
            </table>
        </section>
    )
}