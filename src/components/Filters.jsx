import { useId, useState } from "react"

export function Filters ({onChange}) {
    //Con este estado permitira saber cual es el precio que se esta tomando del rango de precio
    const [minPrecio, setMinPrecio] = useState(0)
    const minPriceFilterId = useId()
    const caterogyFilterId = useId()


     const handleChangeMinPrecio = (event) => {
       //Esto no es recomendable hacer, ya en unos momentos se corregira con el nuevo metodo
       setMinPrecio(event.target.value) 
       onChange(prevState => ({
            ...prevState,
            minPrecio: event.target.value
        }))
     }

     const handleChangeCategory = (event) => {
        //Esto no es recomendable hacer, ya en unos momentos se corregira con el nuevo metodo
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
     }

    return (
        <section className='filter' >
           <div>
             {/*  htmlFor es como el id que ayudara a identificar el label*/}
             <label htmlFor={minPriceFilterId}>Rango de precio</label>
             {/* Input de rango para acomodar el precio de nuestro filtro a gusto */}
            <input
             type="range"
             min='0'
             max='1000'
             id={minPriceFilterId} 
             onChange={handleChangeMinPrecio}
             />
             <span>${minPrecio}</span>
           </div>
{/* Se filtran las categorias para escoger */}
           <div>
            <label htmlFor={caterogyFilterId}>Category</label>
            <select id={caterogyFilterId} onChange={handleChangeCategory}>
                <option value="all">All options</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Phone</option>
                
            </select>
           </div>

        </section>
    )
}