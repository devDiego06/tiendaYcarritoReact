import { AddToCartIcon } from "./Icons.jsx";



export function Products({products}) {
    return (

        <main>
            <ul>
                {/* Mapear los productos */}
                {products.map(product => (
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}