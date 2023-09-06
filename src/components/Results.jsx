import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif ;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 20px;
    span{
        font-weight: 700;
    }
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Results = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Container>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image of cryptocurrency" />
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>High price of the day: <span>{HIGHDAY}</span></Text>
                <Text>Low price of the day: <span>{LOWDAY}</span></Text>
                <Text>Varientations lastest 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Lastest update: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}

export default Results