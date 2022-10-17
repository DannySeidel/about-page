import { ReactNode } from "react"
import styled from "styled-components"
import Divider from "./Divider"

interface FooterProps {
    children?: ReactNode
}

const FooterWrapper = ({ children }: FooterProps) => {
    return (
        <FooterContainer>
            <Divider />
            <Footer>{children}</Footer>
        </FooterContainer>
    )
}

export default FooterWrapper

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
