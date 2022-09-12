import styled from '@emotion/styled'

export const Board = styled.div`
    display: flex;
    grid-template-columns: repeat(auto-fit, minimax(240px,auto));
    gap: 24px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: aqua;
`;