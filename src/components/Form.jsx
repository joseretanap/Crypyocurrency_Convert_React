import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectCurrency from "../hooks/useSelectCurrency"
import { currencies } from "../data/currencies"


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = ({ setCurrencies }) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [currency, SelectCurrency] = useSelectCurrency("Select your currency", currencies)
    const [cryptocurrency, SelectCryptocurrency] = useSelectCurrency("Select your cryptocurrency", cryptos)

    useEffect(() => {
        const useAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const answer = await fetch(url)
            const result = await answer.json()

            const arrayCryptos = result.Data.map(crypto => {
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return object
            })

            setCryptos(arrayCryptos)
        }
        useAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([currency, cryptocurrency].includes('')) {
            setError(true)
        }

        setError(false)
        setCurrencies({
            currency,
            cryptocurrency
        })
        
    }

    return (
        <>
            {error && <Error>{"Complete the options!"}</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCurrency />
                <SelectCryptocurrency />

                <InputSubmit type="submit" value="Convert" />
            </form>
        </>
    )
}

export default Form