import { ArrowUp } from "phosphor-react";

export function Footer () {
    function commonTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer className="w-full py-5 border-t border-gray-600 bg-gray-700">
            <div className="flex items-center justify-center">
                <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                    Isaque Vereda - Todos os direitos reservados 2021 - 2022. 
                </p>
                <button className="ml-4 border rounded bg-gray-500 hover:bg-gray-700 transition-colors" onClick={commonTop}><ArrowUp size={32} /></button>
            </div>
        </footer>
    )
}