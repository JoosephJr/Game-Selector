import CardFilme from '@/Components/CardFilme'
import SecaoFilmes from '@/Components/SecaoFilmes'
import Titulo from '@/Components/Titulo'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
/*const filmes = [
  {
    titulo: "God of War - Ragnarok",
    nota: "9.2",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png"
  },
  {
    titulo: "Hogwarts Legacy Deluxe",
    nota: "9.0",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co54qe.png"
  },
  {
    titulo: "Resident Evil 4 Remake",
    nota: "9.5",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png"
  },
  {
    titulo: "The Last  of Us - Part II",
    nota: "9.7",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.png"
  },
  {
    titulo: "FIFA 23",
    nota: "8.8",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4zw5.png"
  }
]*/
export default function Home() {
  const [jogos, setJogos] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer f834e841be0d483bb9c5ce07b2cbc5da'
    }
  };
  
  fetch('https://api.rawg.io/api/games?key=f834e841be0d483bb9c5ce07b2cbc5da&dates=2019-09-01,2022-09-30&platforms=18,1,7', options)
    .then(response => response.json())
    .then(response => setJogos(response.results))
    .catch(err => console.error(err));

  return (
    <>

      <Header/>

      <div>
        <img className="h-72 object-cover w-screen brightness-50" src="https://images.igdb.com/igdb/image/upload/t_original/arko0.jpg" />
      </div>

      <main
        className={`bg-slate-800 text-white flex min-h-screen flex-col justify-evenly px-24 p-3 ${inter.className}`}
      >
        <Titulo>Favoritos dos Players</Titulo>
        <div className='flex'>
          <SecaoFilmes filmes={jogos} />
        </div>

        <Titulo>Ação</Titulo>

        <Titulo>Esportes</Titulo>

        <Titulo>Clássicos</Titulo>

      </main>//JSX
    </>
  )
}
