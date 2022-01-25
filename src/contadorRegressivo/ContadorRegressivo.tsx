import { useEffect, useState } from 'react'

const ContagemRegressiva = () => {
  const [timer, setTimer] = useState<number>(5)
  const [activeTimer, setActiveTimer] = useState<boolean>(false)

  useEffect(() => {
    if (!activeTimer || timer < 0) {
      return
    }

    const regressiveCount = setInterval(() => {
      if (timer > 0) setTimer(prev => prev - 1)
    }, 1000)
    return () => clearInterval(regressiveCount)
  }, [activeTimer, timer])

  const handleStartTimer = () => {
    setActiveTimer(true)
  }

  return (
    <div>
      <button onClick={handleStartTimer}>Iniciar temporizador</button>
      <p>{timer}</p>
      <button onClick={() => setTimer(5)}>Resetar o temporizador</button>
    </div>
  )
}

export default ContagemRegressiva
