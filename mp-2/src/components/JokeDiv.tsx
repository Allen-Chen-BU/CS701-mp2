import styled from "styled-components";
import Joke from "../interfaces/Joke";
import { useState } from "react";

const TypeSpan = styled.span`
    float: right;
`;

const JokeDivMain = styled.p<{tag: string, show: boolean}>`
    margin: 2vh 3vw;
    padding: 1%;
    border-radius: 25px;
    color: #3e7f93;
    background-color: ${(props) => (props.show ? '#fdf2d2' : 'white')};
    /* color: ${(props) => (props.show ? 'white' : 'black')}; */
    width: fit-content;

    font-family: ${props => {
        switch(props.tag) {
            case "general":
                return "cursive";
            case "programming":
                return "Oxanium";
            default:
                return "serif";
        }
    }};

    @media (max-width: 750px) {
        padding: 3%;
    }
`;

const JokeSpan = styled.span<{show: boolean}>`
    display: ${(props) => (props.show ? 'inline' : 'none')};
`;

const SetupSpan = styled.span<{show: boolean}>`
    display: ${(props) => (props.show ? 'none' : 'inline')};
`;

export default function JokeDiv(props: {joke: Joke}) {
    const [showJoke, setShowJoke] = useState(false);

    return (
        <JokeDivMain tag={props.joke.type} show={showJoke} onClick={() => setShowJoke(!showJoke)}>
            <SetupSpan show={showJoke}>
                {props.joke.setup}
            </SetupSpan>
            <JokeSpan show={showJoke}>
                {props.joke.punchline}
            </JokeSpan>
            <br/>
            <TypeSpan>
                {props.joke.type}
            </TypeSpan>
        </JokeDivMain>
    )
}