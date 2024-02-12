import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from "react";
import { toast } from "sonner";
import { normalizePhoneNumber } from "./Regex";


const ValidFormSchame = z.object({
    userName: z.string().min(4, "No minimo 4 caractes").nonempty("Nome obrigatorio"),
    userTel: z.string().min(11, "Número invalido").max(15, "Número invalido"),
    userEmail: z.string().nonempty("É brigatorio o E-mail").email("Digite um email valido"),
    mensage: z.string().min(5, "Digite uma mensagem").max(60, "Mensagem muito grande")
})
type CreateTypeUserForm = z.infer<typeof ValidFormSchame>


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue } = useForm<CreateTypeUserForm>({
            resolver: zodResolver(ValidFormSchame)
        })

    const dado = (objeto: any) => {

        setTimeout(() => {
            toast.success("Formulário Enviado com sucesso")
            setValue("mensage", "")
            setValue("userEmail", "")
            setValue("userName", "")
            setValue("userTel", "")
        }, 500);
    }

    const PhoneNumber = watch("userTel")

    useEffect(() => {
        setValue("userTel", normalizePhoneNumber(PhoneNumber))
    }, [PhoneNumber])

    return (
        <form
            className="bg-white p-5 flex justify-center items-center flex-col "
            onSubmit={handleSubmit((data) => dado(data))}>
            <div className="flex flex-1 gap-3 small:block small:w-full xsmall:w-full xsmall:block" >
                <div>
                    < label htmlFor="userName" className="text-[#0E0E0E] block font-poppins font-medium text-sm">
                        Nome
                    </label>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        {...register("userName")}
                        autoComplete="first name"
                        className="bg-[#F7F7F7] p-2 rounded-md small:w-full xsmall:w-full" />
                    <p className="text-red-500">{errors.userName?.message}</p>
                </div>
                <div>
                    <label htmlFor="userTel" className="text-[#0E0E0E] block font-poppins font-medium text-sm">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        autoComplete="tel"
                        {...register("userTel")}
                        className="bg-[#F7F7F7] p-2 rounded-md small:w-full xsmall:w-full" />
                    <p className="text-red-500">{errors.userTel?.message}</p>
                </div>
            </div>

            <div className="w-full">
                <label htmlFor="userEmail" className="text-[#0E0E0E] block font-poppins font-medium text-sm">
                    Email
                </label>
                <input
                    type="email"
                    {...register("userEmail")}
                    autoComplete="email"
                    placeholder="Seu Email"
                    className="bg-[#F7F7F7] p-2 rounded-md w-full" />
                <p className="text-red-500">{errors.userEmail?.message}</p>
            </div>
            <div className="w-full">
                <label htmlFor="mensage" className="block">
                    mensagem
                </label>
                <textarea 
                rows={10}
                cols={10}
                placeholder="Digite sua mensagem" 
                className="w-full max-h-20 bg-[#F7F7F7] p-2 rounded-md" {...register("mensage")}
                 />
                <p className="text-red-500">{errors.mensage?.message}</p>
            </div>

            <button
                type="submit"
                className="uppercase bg-gradient-to-t from-[#FFB800] to-[#F2A20D] text-[#402E00]font-poppins font-semibold text-[16px] px-4 py-2 self-start mt-3 rounded-md">
                Enviar mensagem
            </button>

            
        </form>
    );
}

export default Form;