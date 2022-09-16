import React from 'react'
import requests, { API_KEY } from '../ultils/requests';
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const MovieId = ({ details }) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 my-20'>
      <div className='px-10'>
      <Image
        layout="responsive"
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        height={1080}
        width={1920}
        alt="movie-img"
      />
      </div>
      <div className="px-10 mt-5 sm:text-2xl md:text-2xl 2xl:text-xl">
          <h2 className="mt-1">
            {details.title || details.original_title}
          </h2>
          <p className="my-10">{details.overview}</p>
          <p className="flex items-center">
            {details.media_type} {details.release_date}{" "}
            <HandThumbUpIcon className="h-7 mx-5" />
            {details.vote_count || details.vote_average}
        </p>
        <p className='my-3'><span className='text-cyan-500'>Production Countries: </span>{details.production_countries.map((res)=> res.name)}</p>
        <p className='my-3'><span className='text-cyan-500	'>Production Copanies: </span>  {details.production_companies.map((res)=> res.name)}</p>
   
        <div className="flex-auto flex space-x-4 mt-10 flex-nowrap">
            <button className="px-6 font-semibold rounded-full bg-cyan-500 hover:bg-slate-500  text-white" type="submit">
              Watch
            </button>
            <button className="px-6 font-semibold rounded-full border border-cyan-500 hover:bg-slate-500 text-white bg-sky-600" type="button">
              Add To My List
            </button>
          <FontAwesomeIcon className="flex-none flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-slate-300 text-cyan-500 bg-violet-50 p-5" icon={faHeart} type="button" aria-label="Like"/>
        </div>

      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then((res) => res.json());
  return {
    props: {
      details: JSON.parse(JSON.stringify(req)),
    },
  };
}

export default MovieId