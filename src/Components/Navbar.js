import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import styles from './Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";   //Aqui deberiamos instalar las 3 rayitas del menu, pero me da error
//import { CiMenuBurger } from 'reat-icons/ci';


const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({ //Aqui detectamos el tamaño de la pantalla para que nuestra app se ajuste a ella
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const detectDimension = () => { //toma el estado del usestate de window y setea la dimension de la pantalla
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })

    }

    useEffect(() =>{              //se ejecuta despues del primer renderizado y despues de cada actualizacion
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavbarOpen(false)
        return () =>{
          window.removeEventListener('resize', detectDimension)
        }
    },[windowDimension])


    const links=[                                   //Seguidamente indicaremos los dintintos links que tendrá nuestro Navbar
        {                                           //En el caso de que sea necesario agregar mas links, poner id:x y debajo el link
            id:1,
            link: "Inicio",
        },
        {
            id:2,
            link: "Árboles Frutales",
        },
        {
            id:3,
            link: "Flores",
        },
        {
            id:4,
            link: "Contacto",
        },

        
        
    ]
//Aqui haremos un mapeo para que quede dentro de una lista ordenada
//En el caso de que el link sea HowWeWork, se mostrará How we work hacemos la pregunta con ?
//En el caso de que el link sea diferente a HowWeWork, se mostrará el link por eso ponemos :
  return (
    <div className ={!navBarOpen === true ? styles.navBar : styles.navOpen}>  
      {!navBarOpen && <p className={styles.logo}>TESOROS ARGENTINOS | Frutales y Flores</p>}                                   
      {!navBarOpen && windowDimension.width < 800 ? (
          <AiOutlineMenu 
          onClick = {() => setNavbarOpen(!navBarOpen)} 
          size={25} 
          /> //CONTROLAMOS LA X DE CLOSE, con esto indico que pase lo contrario, si esta en falso se cambie a verdadero.
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose 
            onClick = {() => setNavbarOpen(!navBarOpen)} 
            color='#f1f1f1' //color blanco de la X
            size={25}
            /> //CONTROLAMOS LA X DE CLOSE
        )
      )}
      {navBarOpen || (
        windowDimension.width > 800 && (
        <ul className= {styles.linksContainer}>                                  
        {links.map((x) => (
          <div>
            <Link
            onClick={() => setNavbarOpen(false)} //para que cuando hagamos clik en una opcion dentro de la barra, la barra se cierre
             to={x.link}
             smooth
             duration = {500}
             className={styles.navLink}
            >
              {x.link === "HowWeWork" ? "How we work" : x.link}
            </Link>
            <div className={styles.border}></div>
          </div>
        ))}
      </ul>
      ))}
    </div>
  );
};

export default Navbar;