import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation, useGetImageQuery } from "../graphql/generated";

export function Subscribe() {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent){
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })
        navigate('/event')
    }

    const { data } = useGetImageQuery({
        variables:{
            page: 'Subscriber'
        }
    })

    return (
        <div>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                    <div className="max-w-[640px]">
                        <Logo/>
                        <h1 className="mt-8 text-[2.5rem] leading-tight">
                            Aprenda já como editar seus videos com <strong className="text-blue-500">Adobe Premiere Pro</strong>, do zero, ao <strong className="text-blue-500">conhecimento</strong>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Em apenas uma semana você irá dominar as melhores práticas para edição de videos, não deixe de se increver para este evento gratuito.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">

                            <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)} />

                            <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail" 
                            onChange={event => setEmail(event.target.value)}/>
                            
                            <button 
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold trext-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            disabled={loading}
                            type="submit">
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>

                {data?.images.map(image => {
                    return(
                        <img src={image.image?.url} className="m-8 w-7/12 opacity-25" />   
                    )
                })
                    
                }
            </div>
            <Footer/>
        </div>
    );
}