import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe 20 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Lente e faça uma caminhada</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSuccededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio :)</strong>
            <p><img src="icons/level-up.svg" alt="Ícone de próximo nível" /></p>
            <p>Suba níveis completando os desafios :)</p>
          </div>
        )
      }
    </div >
  )
}