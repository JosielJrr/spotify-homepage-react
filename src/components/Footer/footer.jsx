import './footer.css';

export const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">TESTAR O PREMIUM DE GRAÇA</p>
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
}
