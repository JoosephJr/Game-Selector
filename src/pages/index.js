import CardFilme from '@/Components/CardFilme'
import SecaoFilmes from '@/Components/SecaoFilmes'
import Titulo from '@/Components/Titulo'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
/*const filmes = [
  {
    name: "God of War - Ragnarok",
    rating: "9.2",
    background_image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png"
  },
  {
    name: "Hogwarts Legacy Deluxe",
    rating: "9.0",
    background_image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co54qe.png"
  },
  {
    name: "Resident Evil 4 Remake",
    rating: "9.5",
    background_image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png"
  },
  {
    name: "The Last  of Us - Part II",
    rating: "9.7",
    background_image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.png"
  },
  {
    name: "FIFA 23",
    rating: "8.8",
    background_image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4zw5.png"
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
  
  fetch('https://api.rawg.io/api/games?key=f834e841be0d483bb9c5ce07b2cbc5da&dates=2019-09-01,2022-05-30&platforms=18,1,7', options)
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

      </main>
    </>
  )
}
