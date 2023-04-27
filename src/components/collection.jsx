import styles from '@/styles/Collection.module.scss'

export default function Collection({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}