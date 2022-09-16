import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";
import Link from 'next/link'

// eslint-disable-next-line react/display-name
export const Thunbnail = forwardRef(({ res }, ref) => {
  return (
    <Link href={`/${res.id}`}>
    <div ref={ref}
      className="group cursor-pointer p-5 transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={`https://image.tmdb.org/t/p/original/${res.backdrop_path}`}
        height={1080}
        width={1920}
        alt="movie-img"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{res.overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {res.title || res.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {res.media_type} {res.release_date}{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {res.vote_count}
        </p>
      </div>
    </div>
    </Link>
  )
});
