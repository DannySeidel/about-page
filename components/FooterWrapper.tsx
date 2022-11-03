import styled from "styled-components"
import { Logo } from "./Logo"
import { Divider } from "./Divider"

export const FooterWrapper = () => {
    return (
        <FooterContainer>
            <Divider />
            <Footer>
                <Copyright>
                    <p>Copyright by © 2022 Danny Seidel</p>
                    <Logo
                        href="https://github.com/DannySeidel/about-page"
                        src="/github.svg"
                        alt="GitHub Logo"
                        width={20}
                        height={20}
                    />
                </Copyright>
                <MadeWith>
                    <p>Deployed with</p>
                    <Logo href="https://vercel.com" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Spacer />
                    <p>Made with</p>
                    <Logo href="https://nextjs.org" src="/nextjs.svg" alt="Next.js Logo" width={72} height={16} />
                </MadeWith>
            </Footer>
        </FooterContainer>
    )
}

const Footer = styled.footer`
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
`

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`

const Copyright = styled.div`
    margin: 1em 2em;
    text-align: left;
    display: flex;
    flex-direction: row;
`

const MadeWith = styled.div`
    margin: 1em 2em;
    text-align: right;
    display: flex;
    flex-direction: row;
`

const Spacer = styled.div`
    width: 1em;
    height: 1em;
`
