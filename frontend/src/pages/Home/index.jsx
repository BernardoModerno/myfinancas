import { Header } from "../../components/Header"
import { Information } from "../../components/Information"
import { InputsContainer } from "../../components/InputsContainer"
import './styles.css'

export const Home = () => {
    return (
        <div className="container">
            <Header />
            <Information />
            <InputsContainer />
        </div>
    )
}