import styled from 'styled-components';

export const SvgContainer = styled.div`
    width: ${props => props.width || '32px'}; 
    svg {
        fill: ${props => props.color || 'white'};
    }

`