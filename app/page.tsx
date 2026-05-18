import pool from '@/app/lib/db'

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