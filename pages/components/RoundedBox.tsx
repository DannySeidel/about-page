import styled from "styled-components"
import { ReactNode } from "react"

interface StyledBoxProps {
    children?: ReactNode
}

export const RoundedBox = ({ children }: StyledBoxProps) => {
    return <StyledBox>{children}</StyledBox>
}

const StyledBox = styled.div`
    border-radius: 20px;
    background: rgba(10, 10, 10, 0.3);
    width: 50%;
    height: 40em;
`
