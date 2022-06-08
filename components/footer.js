import styled from "styled-components"

export default function Footer() {
    return (
        <FooterWrapper className="p-4 text-left text-gray-500 text-source-sans w-screen">
          This site is <a href='https://github.com/MurphyStudebaker/meditation' className="hover:underline">open source</a>. 
        <a href='http://www.buildwithpride.org' className="hover:underline"> Built with 🏳️‍🌈 </a>
      </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    margin: 0;
`