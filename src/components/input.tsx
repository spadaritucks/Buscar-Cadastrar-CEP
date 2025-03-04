//Componente Input utilizado na pagina cadastro.tsx

//Declaração dos tipos dos atributos necessarios nos inputs
type InputType = 'text' | 'password' | 'email' | 'file'

interface InputProps {
    type: InputType
    name: string
    value?: string
    label: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInput? : (e: React.ChangeEvent<HTMLInputElement>) => void
    readOnly?: boolean
    maxLength?: number
    required? : boolean
}

//Declaração do Componente Input + Label e sua Estilização
export default function Input({ type, name, value, label, placeholder, onChange, onInput, readOnly, maxLength, required }: InputProps) {

    return (
        <div className="flex flex-col items-start justify-start gap-2 w-full ">
            <label className="text-white" htmlFor={label}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder} 
                readOnly={readOnly}
                maxLength={maxLength}
                required = {required}
                onInput={onInput}
                onChange={onChange}
                className="rounded-sm bg-stone-300 w-full h-10 px-4 py-2 outline-none"
                
            />
        </div>
    )
}