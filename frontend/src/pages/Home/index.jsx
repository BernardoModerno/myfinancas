import { Header } from "../../components/Header"
import { Information } from "../../components/Information"
import { InfoTable } from "../../components/InfoTable"
import { InputsContainer } from "../../components/InputsContainer"
import './styles.css'

export const Home = () => {
    return (
        <div className="container">
            <Header />
            <Information />
            <InputsContainer />
            <InfoTable />
        </div>
    )
}