import pool from '@/app/lib/db'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Aprendendo NextJS do zero!',
  description: 'Projeto criado para aprender NextJS do zero, utilizando a versão mais recente e seus novos recursos.',
  openGraph: {
    title: 'Home - Aprendendo NextJS do zero!',
    description: 'Projeto criado para aprender NextJS do zero, utilizando a versão mais recente e seus novos recursos.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

async function testarConexao(){
  try {
    const [rows] = await pool.query ('SELECT 1 + 1 AS resultado');
    console.log('Conexão estabelecida com sucesso! Resultado do teste:', rows);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

testarConexao();

export default function Home(){
  return(
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}