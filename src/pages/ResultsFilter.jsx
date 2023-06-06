import {Distance, NavBarUI, SearchBar, Checkbox} from "../components";
import MapRestaurant from "../components/map/map";
import { galleryCards } from "../utils";
import locationSvg from '../assets/location.svg'
import { Link } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { Ring } from "@uiball/loaders";
export function ResultsFilter() {


  const randomRestaurant = galleryCards[0]


  const {restaurantsSearched, querySearch, load} = useSearch()

  if(load) return <div className="h-[90vh] flex justify-center items-center w-full"><Ring size={40} lineWeight={5} speed={2} color="black"/></div>

  return (
    <main className="">
        {/* TODO : Modularizar secciones, ya que cada uno tendra logica */}
        <NavBarUI />
        <SearchBar />
        <section className="grid grid-cols-1 lg:grid-cols-12 w-full px-8 lg:px-20 h-[76vh] gap-4 lg:overflow-hidden">
            <section className="hidden lg:block lg:col-span-3">
                <h3 className="mb-2.5 font-montserrat font-bold text-xl">Cocina</h3>

                <Checkbox />
                
                <h3 className="mt-6 mb-2.5 font-montserrat font-bold text-xl">Rango de precios</h3>
               
                {/* Section Price Range */}
                <input  type="range" value="50" className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-subtitle mb-6" />
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <p className="font-semibold font-inter text-base">$-$$</p>
                    <p className="font-semibold text-subtitle font-inter">Promedio: <span className="text-black">$500</span></p>
                </div>


            </section>
            <section className="lg:col-span-6 h-full bg-green-200 relative z-10">
                <MapRestaurant 
                    latitude={randomRestaurant.latitude}
                    longitude={randomRestaurant.longitude}
                    name={randomRestaurant.title}
                    height={"h-full"}
                    width={"w-full"}
                />
            </section>

            {/* Result Section */}
            <section className="lg:col-span-3 flex flex-col gap-y-4 ">
                <h3 className="font-montserrat font-semibold lg:font-medium text-xl">{restaurantsSearched.length } resultados</h3>
                <section className="flex flex-col gap-y-3 overflow-y-auto items-center lg:items-start h-auto lg:h-screen pb-24 lg:pb-56 dt:pb-80 lg:pr-2.5">

                    {
                        !restaurantsSearched.length && !load &&
                        <p> { querySearch } no encontrado</p> 
                    }

                    {
                        restaurantsSearched?.map(card => (
                            <article key={card.id} className="flex flex-col gap-y-2  w-full">
                                <Link to={`/restaurant/${card.id}`}>
                                    <img src={card.imagenes[0]} alt={card.nombre} className="rounded-xl w-full h-72 object-cover"/>
                                </Link>
                                <h3 className="font-montserrat font-medium text-xl">{card.nombre}</h3>
                                <p className="text-subtitle flex gap-x-1 items-center"><img src={locationSvg}/> <Distance longitudeRestaurant={card.longitude} latitudDestiRestaurant={card.latitude}/> </p>
                                <p className="font-inter font-semibold ">${card.costoReserva}</p>
                            </article>
                        ))
                    }
                </section>
            </section>
        </section>
    </main>
  )
}