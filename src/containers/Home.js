import React, { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { Container, Header } from 'semantic-ui-react';
import Spinner from '../components/Spinner';
import Block from '../components/Block';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Home = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [transactions, setTransactions] = useState([]);

  console.log(transactions);

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  useEffect(() => {
    async function getTx() {
      const tx = [];

      let block = await alchemy.core.getBlockNumber();
      console.log(block);

      if (block > 0 ) {
        for(let i = block; i > block - 5; --i) {
          const blockTx = await alchemy.core.getBlockWithTransactions(i);
          tx.push(blockTx);
        }
      }

      setTransactions(tx);

      return tx;
    }

    getTx();
    
  },[blockNumber]);

  return (<Container textAlign='center'>
    <Header as='h2'>Last 5 Blocks</Header>
    {transactions.length ? transactions.map((tx) => {
      return (<Block 
      number = {tx.number}
      hash = {tx.hash}
      parentHash = {tx.parentHash}
      miner = {tx.miner}
      transactions = {tx.transactions}
      time = {tx.timestamp}
      />);
    }) : <Spinner />}
    </Container>);

}

export default Home;