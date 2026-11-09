import './styles/Header.css'

function Header(){
    const nombreEmprendimiento = "Pasteleria la Marteja";
    const descripcion = "Bienvenidos a mi pasteleria. Donde van a poder encontrar muchos prodctos interesantes.";

    return(
        <header className="site-header">
            <h1>{nombreEmprendimiento}</h1>
            <p>{descripcion}</p>
        </header>
    )
}

export default Header