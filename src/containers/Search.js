import React, {useState} from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { Grid, Container, Input, Button } from 'semantic-ui-react';
import Block from '../components/Block';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Search = () => {
    const [blockNumber, setBlockNumber] = useState();
    const [tx, setTx] = useState([]);
    const [showNCard,setShowNCard] = useState(false);

    console.log(tx);

    const searchBlock = async () => {
        console.log(blockNumber);
        const blockTx = await alchemy.core.getBlockWithTransactions(parseInt(blockNumber));
        console.log(blockTx);
        setTx(blockTx);
        setShowNCard(true);
    }

    const numberSet = (e,d) => {
        setBlockNumber(d.value);
    }

    return(
        <Grid textAlign='center' columns={3}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
                <Grid.Row>
                    <Input
                     placeholder='Search By Block Number'
                     type='number' 
                     onChange={numberSet}
                     />
                     <Button primary onClick={async () => searchBlock()}>
                         SEARCH
                     </Button>
                </Grid.Row>
                <Grid.Row>
                    {showNCard ? 
                        <Container textAlign='center'>
                            <Block 
                            number = {tx.number}
                            hash = {tx.hash}
                            parentHash = {tx.parentHash}
                            miner = {tx.miner}
                            transactions = {tx.transactions}
                            time = {tx.timestamp}
                            />
                        </Container> :
                        <Container>
                            <div></div>
                        </Container>
                }
                </Grid.Row>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
        
        </Grid>
    )
};

export default Search;