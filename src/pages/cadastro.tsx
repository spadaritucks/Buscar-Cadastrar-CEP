
import { useState } from "react";
import cepService from "../services/cep.service";
import Input from "../components/input";
import { Locais } from "../interfaces/local";

export default function Cadastro() {

    //Estado responsavel para manipular os campos do formulario
    const [form, setForm] = useState({
        cep: '',
        logradouro: '',
        cidade: '',
        bairro: '',
        estado: '',
        numero: '',
    })

    //Função responsavel para coleta de dados de acordo com o CEP
    const handleCepChange = async (cep: string) => {
        //Verificação se o campo CEP foi preenchido
        if (cep.length === 8) {

            //Verificação se o CEP digitado já consta no LocalStorage para evitar requisições desnecessárias
            const cepCache: Locais[] = JSON.parse(localStorage.getItem('locais') || "[]");
            const local = cepCache.find((local) => local.cep === cep);

            if (local) {
                setForm((prev) => ({
                    ...prev,
                    cep: cep,
                    logradouro: local.logradouro,
                    cidade: local.cidade,
                    bairro: local.bairro,
                    estado: local.estado,
                })
                )
                return
            }

            //Chamada do Serviço responsavel pela comunicação com o viaCep
            const data = await cepService(cep);

            //Logica para manipular os dados recebidos do viaCep
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

    //Função para submeter o formulario e enviar os dados para o localstorage
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
            <h1 className='text-2xl md:text-3xl font-bold text-white'>Realize seu Cadastro</h1>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center md:grid grid-cols-2 gap-6'
            >
                <Input label='CEP'
                    name='cep'
                    type='text'
                    maxLength={8} // Limita o campo para 8 caracteres
                    onChange={(e) => handleCepChange(e.target.value)} //Passar o valor do campo para a função de CEP
                    /> 
                <Input
                    label='Logradouro'
                    name='logradouro'
                    type='text'
                    readOnly
                    value={form.logradouro}
                    onChange={(e) => setForm({ ...form, logradouro: e.target.value })} // Passar o valor do campo para o estado do formulário
                    />
                <Input
                    label='Cidade'
                    name='cidade'
                    type='text'
                    readOnly
                    value={form.cidade}
                    onChange={(e) => setForm({ ...form, cidade: e.target.value })}  // Passar o valor do campo para o estado do formulário
                    />
                <Input
                    label='Bairro'
                    name='bairro'
                    type='text'
                    readOnly
                    value={form.bairro}
                    onChange={(e) => setForm({ ...form, bairro: e.target.value })}  // Passar o valor do campo para o estado do formulário
                    />
                <Input
                    label='Estado'
                    name='estado'
                    type='text'
                    readOnly
                    value={form.estado}
                    onChange={(e) => setForm({ ...form, estado: e.target.value })}   // Passar o valor do campo para o estado do formulário
                     />
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