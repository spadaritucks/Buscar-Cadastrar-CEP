//Pagina Principal 
import './App.css'


function App() {

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold text-white '>Consultar e Cadastro de Endereços</h1>
      <div className='flex flex-col items-center justify-center sm:flex-row gap-8'>
        <a
          href='/cadastro'
          className='bg-blue-400 text-white rounded-sm px-4 py-2 border-none cursor-pointer hover:bg-blue-800'>Cadastrar Endereço</a>
        <a
          href='/listagem'
          className='bg-blue-400 text-white rounded-sm px-4 py-2 border-none cursor-pointer hover:bg-blue-800'>Consultar Endereço</a>
      </div>
    </section>
  )

}

export default App
