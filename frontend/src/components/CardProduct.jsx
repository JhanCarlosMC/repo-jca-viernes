import './styles/CardProduct.css'
import { useState } from 'react';

const formatoPrecio = new Intl.NumberFormat('es-CO', {
  maximumFractionDigits: 0,
});

//Props - Properties - Propiedades
function CardProduct({nombre, descripcion, precio, imagen}) {
  const [cantidad, setCantidad] = useState(0);

  return (
    <article className="card">
      <h3 className="card__title">{nombre}</h3>
      <img className="card__image" src={imagen} alt={nombre} />
      <p className="card__description">{descripcion}</p>
      <p className="card__price">$ {formatoPrecio.format(precio)} COP</p>

      <div className="card__actions">
        <button
          className="card__button"
          type="button"
          onClick={() => setCantidad(actual => actual+1)}
        >
          Agregar al carrito
        </button>

        <p className="card__quantity">
          En el carrito: <strong>{cantidad}</strong>
        </p>
      </div>
    </article>
  )

}

export default CardProduct;