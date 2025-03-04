/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import cepService from "../services/cep.service";
import Input from "../components/input";

export default function Cadastro() {
    const [form, setForm] = useState({
        cep: '',
        logradouro: '',
        cidade: '',
        bairro: '',
        estado: '',
        numero: '',
    })


    const handleCepChange = async (cep: string) => {
        if (cep.length === 8) {
            const data = await cepService(cep);

            data.erro ? alert('CEP não encontrado') :
                setForm((prev) => ({
                    ...prev,
                    cep: cep,
                    logradouro: data.logradouro,
                    cidade: data.localidade,
                    bairro: data.bairro,
                    estado: data.uf,
                })
                )
        } else {
            setForm((prev) => ({
                ...prev,
                logradouro: "",
                cidade: "",
                bairro: "",
                estado: "",
            })
            )
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget)

        const localFormdata = Object.fromEntries(formdata.entries())
        const locaisArmazenados = JSON.parse(localStorage.getItem('locais') || "[]");

        locaisArmazenados.push(localFormdata);
        localStorage.setItem('locais', JSON.stringify(locaisArmazenados))



    }


    return (
        <section className='w-full h-screen flex flex-col items-center justify-center gap-8'>
            <h1 className='text-3xl font-bold text-white '>Realize seu Cadastro</h1>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center md:grid grid-cols-2 gap-8'
            >
                <Input label='CEP'
                    name='cep'
                    type='text'
                    maxLength={8}
                    onChange={(e) => handleCepChange(e.target.value)} />
                <Input
                    label='Logradouro'
                    name='logradouro'
                    type='text'
                    readOnly
                    value={form.logradouro}
                    onChange={(e) => setForm({ ...form, logradouro: e.target.value })} />
                <Input
                    label='Cidade'
                    name='cidade'
                    type='text'
                    readOnly
                    value={form.cidade}
                    onChange={(e) => setForm({ ...form, cidade: e.target.value })} />
                <Input
                    label='Bairro'
                    name='bairro'
                    type='text'
                    readOnly
                    value={form.bairro}
                    onChange={(e) => setForm({ ...form, bairro: e.target.value })} />
                <Input
                    label='Estado'
                    name='estado'
                    type='text'
                    readOnly
                    value={form.estado}
                    onChange={(e) => setForm({ ...form, estado: e.target.value })} />
                <Input
                    label='Numero da Residencia'
                    name='numero'
                    type='text' />
                <div className='col-span-2 flex flex-col gap-6'>
                    <button
                        className='bg-blue-400 rounded-sm px-4 py-2 border-none w-full h-10 hover:bg-blue-800 cursor-pointer text-white'
                    >Salvar</button>
                    <a
                        href='/'
                        className=' text-white rounded-sm px-4 py-2 border border-blue-400 cursor-pointer hover:opacity-60'>Voltar</a>
                </div>
            </form>


        </section>
    )
}