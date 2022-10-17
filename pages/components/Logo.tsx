import styled from "styled-components"
import Image from "next/image"

interface LogoProps {
    href?: string
    src: string
    alt: string
}

const Logo = ({ href, src, alt }: LogoProps) => {
    return (
        <StyledDiv>
            <a href={href}>
                <span>
                    <StyledImage src={src} alt={alt} width={144} height={32} />
                </span>
            </a>
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
