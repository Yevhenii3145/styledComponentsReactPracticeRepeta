import styled from '@emotion/styled'

export const Card = styled.div`
    position: relative;
    border: ${(props) => `2px dashed ${props.theme.colors.black}`};

    padding: ${(props) => props.theme.spacing(4)} ;
    border-radius: 4px;
`;
export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;
export const Info = styled.p`
display: flex;
align-items: center;
margin-top: 0;
margin-bottom: 8px;
color: ${props => props.theme.colors.primaryText};
font-size: 16px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;

&:hover,
&:focus {
    background-color: red;
}

svg {
    display: block;
    margin-right: 8px;
    color: ${(props) => props.theme.colors.secondaryText };
}
`;

export const setBgColor = ({eventType, theme}) => {
    console.log(theme)
    switch (eventType) {
        case 'free':
            return theme.colors.green;
        case 'paid':
            return theme.colors.blue;
        case 'vip':
            return theme.colors.gold;
        default:
            return theme.colors.black;
    }
};
export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #000;
    color: ${(props) => props.theme.colors.secondaryText};
    
    background-color: ${setBgColor};
`;