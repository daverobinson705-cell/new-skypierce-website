import styles from '@/styles/components/footer.module.css';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col bg-black/80">
            <div className={`w-full min-h-[60px] ${styles.container}`}>
                <div className={`${styles.child} border-t border-white/20 p-10`}>
                    <div className="flex justify-between flex-wrap gap-1 text-sm font-bold">
                        <p>© {new Date().getFullYear()} By SkyPierceOfficial</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer