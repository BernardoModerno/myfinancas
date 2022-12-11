import './styles.css'

export const InputsContainer = () => {
    return (
        <section className="inputs-container">

            <div className="container-input">
                <label htmlFor='data'>Data</label>
                <input type="date" />
            </div>

            <div className="container-input">
                <label htmlFor='category'>Categoria</label>
                <select name="category" id="category">
                    <option value='Ganho'>Ganho</option>
                    <option value='Despesas'>Despesas</option>
                </select>
            </div>

            <div className="container-input">
                <label htmlFor='title'>Título</label>
                <input type="text" />
            </div>

            <div className="container-input">
                <label htmlFor='value'>Valor</label>
                <input type="number" />
            </div>

            <div className="container-input">
                <button>Adicionar</button>
            </div>

        </section>
    )
}