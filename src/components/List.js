import Item from "./Item";
import styles from "./Frase.module.css";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul className={styles.fraseContainer}>
                <Item 
                    marca="Ferrari" 
                    piloto="Charles Leclerc" 
                    descricao="Rookie" idade={22}
                />
                <Item 
                    marca="Aston Martin" 
                    piloto="Sebastian Vettel" 
                    descricao="4 times world champion" 
                    idade={34}
                />
                <Item 
                    marca="Red Bull" 
                    piloto="Sergio Pérez" 
                    descricao="RBR second pilot." 
                    idade={28}
                />
            </ul>
        </>
    )
}
export default List