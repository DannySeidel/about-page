import styled from "styled-components"
import Image from "next/image"

interface LogoProps {
    href?: string
    src: string
    alt: string
    width: number
    height: number
}

export const Logo = ({ href, src, alt, width, height }: LogoProps) => {
    return (
        <StyledDiv>
            <a href={href}>
                <span>
                    <StyledImage src={src} alt={alt} width={width} height={height} />
                </span>
            </a>
        </StyledDiv>
    )
}

const StyledImage = styled(Image)`
    filter: invert(0);
    @media (prefers-color-scheme: dark) {
        filter: invert(1);
    }
`

const StyledDiv = styled.div`
    margin: auto 0.5em;
`
