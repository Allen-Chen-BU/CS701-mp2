import Joke from "../interfaces/Joke";
import styled from "styled-components";
import JokeDiv from "./JokeDiv";

const JokeContainerMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #75c4dc;
`;

export default function JokeContainer(props: {jokes: Joke[]}) {
    return (
        <JokeContainerMain>
            {props.jokes.map((joke:Joke) => 
                <JokeDiv joke={joke}/>
            )}
        </JokeContainerMain>
    )
}