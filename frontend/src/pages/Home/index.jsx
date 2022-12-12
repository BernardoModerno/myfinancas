import { Header } from "../../components/Header"
import { Information } from "../../components/Information"
import { InfoTable } from "../../components/InfoTable"
import { InputsContainer } from "../../components/InputsContainer"
import { api } from "../../services/api"
import './styles.css'

export const Home = () => {

    function handleSalveItens(item) {
        const data = item.dados
        api.post('/criar/financa', data).then(response => {
            console.log(response);
        })
    }

    return (
        <div className="container">
            <Header />
            <Information />
            <InputsContainer addItens={handleSalveItens} />
            <InfoTable />
        </div>
    )
}