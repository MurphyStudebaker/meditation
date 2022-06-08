import Link from "next/link"
import styled from "styled-components"
export default function Start ({ start }) {
    return (
        <Link href="/meditating" passHref>            
            <StyledLink>I'm ready to begin ➜</StyledLink>
        </Link>
    )
}

const StyledLink = styled.a`
    font-family: "Crimson Pro", sans-serif;
    background-color: rgb(17,24,39);
    padding: var(--spacing) calc(2*var(--spacing));
`

