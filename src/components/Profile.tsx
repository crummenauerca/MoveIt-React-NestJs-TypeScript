import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/crummenauerca.png" alt="Imagem de Cezar Augusto Crummenauer" />
      <div>
        <strong>Cezar Augusto Crummenauer</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de nível" />
                    Level 1
                </p>
      </div>
    </div>
  )
}