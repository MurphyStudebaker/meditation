import Link from "next/link";
import styled from "styled-components";
export default function Start({ handleClick }) {
  return (
    <Link href="/meditating" passHref>
      <StyledLink onClick={handleClick}>I'm ready to begin ➜</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  background-color: var(--color-darker);
  padding: var(--spacing) calc(2 * var(--spacing));
  border-radius: var(--radius);

  &:hover {
    text-decoration: none;
  }
`;
