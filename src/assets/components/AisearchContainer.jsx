import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { options } from '../../common/helper'
import { addVideo } from '../../utils/Redux/NowPlaying'
import Result from './Result'
import AuthCheck from './AuthCheck'
import api from '../../utils/gemini'

const AisearchContainer = () => {
  const dispatch = useDispatch()
  const Searchinput = useRef(null)

  const getData = async () => {
    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      Searchinput.current.value +
      ". only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await api.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    })

    const res = response.text?.split(',')
    if (!res) return

    const movies = []

    for (let movie of res) {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie.trim()) +
        "&include_adult=false&language=en-US&page=1",
        options
      )
      const json = await data.json()
      if (json.results?.[0]) {
        movies.push(json.results[0])
      }
    }
    dispatch(addMovie(movies))
  }

  return (
    <>
    <AuthCheck/>
      <div className="flex items-center justify-center gap-3 p-6 bg-gray-900 rounded-xl shadow-lg ">
        <input
          type="text"
          ref={Searchinput}
          placeholder="Search movies..."
          className="w-72 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={getData}
          className="px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold 
               hover:bg-purple-700 transition-all duration-300 shadow-md"
        >
          Search
        </button>
      </div>
      <Result />
    </>
  )
}

export default AisearchContainer
