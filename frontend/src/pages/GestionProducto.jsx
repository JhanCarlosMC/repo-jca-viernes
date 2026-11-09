import './style/GestionProducto.css'

import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from "../components/Header"
import CardProduct from '../components/CardProduct'

import productoDefault from '../assets/productDefault.jpg'

const API = 'http://localhost:3000/api/productos'

//Declaracion del componente APP
function GestionProducto() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [errorCarga, setErrorCarga] = useState('')

  //---- peticion de tipo GET para el backend
  useEffect(() => {
    async function cargarProductos() {
      try {
        const response = await axios.get(API);
        if (!Array.isArray(response.data)) {
          throw new Error('La API no devolvió una lista de productos.');
        }
        setProductos(response.data);
      } catch (error) {
        console.error('No se pudieron cargar los productos:', error);
        setErrorCarga(
          axios.isAxiosError(error) && !error.response
            ? 'No se pudo conectar con la API. Comprueba que el backend esté escuchando en http://localhost:3000.'
            : 'No se pudieron cargar los productos. Revisa la respuesta del servidor.'
        );
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, [])

  async function agregarProducto(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const nuevoProducto = {
      nombre: String(data.get('nombre') ?? '').trim(),
      descripcion: String(data.get('descripcion') ?? '').trim(),
      precio: Number(data.get('precio')),
      imagen: String(data.get('imagen')?? '').trim(),
    }

    try {
      const response = await axios.post(API, nuevoProducto);

      setProductos(actuales => [...actuales, response.data])

    } catch (error) {
      console.log({ "Error:": error });
    }
  }


  //Retorno del componente
  return (
    <div className="gestion-page">
      <Header />

      <section className="gestion-form-section" aria-labelledby="titulo-nuevo-producto">
        <h2 className="gestion-form-section__title" id="titulo-nuevo-producto">
          Nuevo producto
        </h2>

        <form className="gestion-form" onSubmit={agregarProducto}>
          <div className="gestion-form__field">
            <label className="gestion-form__label" htmlFor="nombre">Nombre</label>
            <input
              className="gestion-form__input"
              id="nombre"
              name="nombre"
              placeholder="Brownie"
              required
            />
          </div>

          <div className="gestion-form__field">
            <label className="gestion-form__label" htmlFor="imagen">Link de imagen</label>
            <input
              className="gestion-form__input"
              id="imagen"
              name="imagen"
              placeholder="imagen.com"
            />
          </div>

          <div className="gestion-form__field">
            <label className="gestion-form__label" htmlFor="descripcion">Descripción</label>
            <input
              className="gestion-form__input"
              id="descripcion"
              name="descripcion"
              placeholder="Chocolate artesanal"
              maxLength={300}
            />
          </div>

          <div className="gestion-form__field">
            <label className="gestion-form__label" htmlFor="precio">
              Precio en pesos colombianos
            </label>
            <input
              className="gestion-form__input"
              id="precio"
              name="precio"
              type="number"
              min="0"
              step="1"
              placeholder="12000"
              required
            />
          </div>

          <button className="gestion-form__submit" type="submit">
            Guardar Producto
          </button>
        </form>
      </section>

      <main className="gestion-products">
        <h2 className="gestion-products__title">Mis productos</h2>

        <div className="gestion-products__grid">
          {cargando && <p role="status">Conectando con el servidor...</p>}
          {errorCarga && <p role="alert">{errorCarga}</p>}
          {!cargando && !errorCarga && productos.length === 0 && (
            <p>La API respondió correctamente, pero no hay productos en la base de datos.</p>
          )}
          {!errorCarga && productos.map(producto => (
            <CardProduct
              key={producto._id ?? producto.id ?? producto.nombre}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen || productoDefault}
            />
          ))}
        </div>
      </main>
    </div>

  )
}

//Exportacion del componente
export default GestionProducto