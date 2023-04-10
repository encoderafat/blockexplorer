import React, {useState,useEffect} from 'react';
import { Segment } from 'semantic-ui-react';

const Block = ({number,hash,parentHash,miner,transactions,time}) => {
    const [blockTime, setBlockTime] = useState();
    useEffect(() => {
        const getTime = () => {
            let formattedTime = new Date(time * 1e3).toISOString();
            setBlockTime(formattedTime);
        }

        getTime();
    },[time]);
    return (
        <Segment>
            <h5>Block     : {number}</h5>
            <h5>Hash             : {hash}</h5>
            <h5>Parent Hash      : {parentHash}</h5>
            <h5>Miner       : {miner}</h5>
            <h5>Transactions: {transactions.length}</h5>
            <h5>Time  : {blockTime}</h5>
        </Segment>
    )
}

export default Block;