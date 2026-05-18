import Link from "next/link";

export default function NotFound(){
    return(
       <div className="flex flex-col items-center justify-center min-h-200">
        
         <h1 className="text-center font-bold text-6xl">
            Página 404 não encontrada!
         </h1>

         <p>
            Essa página que tentou acessar não existe!
         </p>

        <Link className="font-bold" href='/'>
         Voltar para home
        </Link>
        
       </div> 
    )
}