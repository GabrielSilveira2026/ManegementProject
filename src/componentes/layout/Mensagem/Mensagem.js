import {useState, useEffect } from 'react'

import styles from './Mensagem.module.css'


function Mensagem({tipo, mensagem}) {
    const [visibilidade, setVisibilidade]  = useState(false)
    
    useEffect(() => {
        if(!mensagem){
            setVisibilidade(false)
            return
        }

        setVisibilidade(true)

        const timer = setTimeout(() => {
            setVisibilidade(false)
        }, 3500)

        return () => {clearTimeout(timer)}
        
    }, [mensagem])

    return (
        <>
            {visibilidade && (
                <div className={`${styles.mensagem} ${styles[tipo]}`}>
                    {mensagem}
                </div>
            )}
        </>
    )
}
export default Mensagem