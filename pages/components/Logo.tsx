import styled from "styled-components"
import Image from "next/image"

interface LogoProps {
    src: string
    alt: string
}

const Logo = ({ src, alt }: LogoProps) => {
    return (
        <StyledDiv>
            <StyledImage src={src} alt={alt} width={144} height={32} />
        </StyledDiv>
    )
}

export default Logo

const StyledImage = styled(Image)`
    filter: invert(0);
    @media (prefers-color-scheme: dark) {
        filter: invert(1);
    }
`

const StyledDiv = styled.div`
    margin: auto 0.5em;
    width: 72px;
    height: 16px;
`
