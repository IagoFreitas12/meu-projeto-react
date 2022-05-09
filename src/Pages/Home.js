import styles from '/Users/iago_/arquivos/meu-projeto/src/components/Layout/PageName.module.css'

function Home() {
    return (
        <div>
            <h1 className={styles.PageName}>Home</h1>
            <p>Conteudo da página.</p>
        </div>
    )
}

export default Home