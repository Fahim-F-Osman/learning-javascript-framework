import './CSSTest.css'
import styles from './CSSTest.module.css'

function CSSTest() {
    return (
        <>
        <div className='container'></div>
        <div className={styles.container}></div>
        </>
    )
    
}

export default CSSTest