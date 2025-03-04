import { ChangeEvent } from "react";


//Função Responsavel para o impedimento de digito de letras em campos de numeros
export default function useNumericInput(e: ChangeEvent<HTMLInputElement>) {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.,]/g, '');
}