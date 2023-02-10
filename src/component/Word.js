import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//style
import styles from '../styles/Style.module.css'

//component
import Figure from './Figure'

const Word = () => {
  const programingLanguages = [
    'python',
    'javascript',
    'mongodb',
    'json',
    'java',
    'html',
    'css',
    'c',
    'csharp',
    'golang',
    'kotlin',
    'php',
    'sql',
    'ruby',
    'fortran',
  ]

  const randomWord = () => {
    return programingLanguages[
      Math.floor(Math.random() * programingLanguages.length)
    ]
  }

  const chracter = 'abcdefghijklmnopqrstuvwxyz'
  const maxWrong = 6

  const [data, setData] = useState([
    { answer: randomWord(), mistake: 0, guss: new Set([]) },
  ])

  const keyHandler = (event) => {
    var letter = event.target.value
    setData([
      ...data,
      {
        guss: data[0].guss.add(letter),
        mistake: data[0].answer.includes(letter)
          ? data[0].mistake
          : data[0].mistake++,
      },
    ])
  }

  const letterMaker = () => {
    return data[0].answer
      .split('')
      .map((item) => (data[0].guss.has(item) ? item : ''))
  }

  useEffect(() => {
    if (data[0].mistake >= maxWrong) {
      toast.error(`You Lost ! Correct Answer was ${data[0].answer}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setData([{ answer: randomWord(), mistake: 0, guss: new Set([]) }])
    } else if (letterMaker().join('') === data[0].answer) {
      toast.success('You Won !', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setData([{ answer: randomWord(), mistake: 0, guss: new Set([]) }])
    }
  }, [data])

  return (
    <>
      <Figure mistake={data[0].mistake} />
      <div className={styles.wrongContainer}>
        <h4>
          Wrong Gusses : {data[0].mistake} of {maxWrong}
        </h4>
      </div>

      <div className={styles.wordContainer}>
        {data[0].answer.split('').map((item, index) => (
          <span
            key={index}
            className={styles.line}
            style={{
              borderBottom: data[0].guss.has(item)
                ? 'none'
                : '3px solid #105291',
            }}
          >
            {data[0].guss.has(item) ? item : ' '}
          </span>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        {chracter.split('').map((letter) => (
          <button
            onClick={keyHandler}
            className={styles.button}
            key={letter}
            value={letter}
            disabled={data[0].guss.has(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <ToastContainer />
    </>
  )
}

export default Word
