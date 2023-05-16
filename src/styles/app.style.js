import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppStyled = styled(Box)`
    background-color: white;
    width: 25em;
    margin: 1em;
    height: 90%;
    border-radius: .7em;
    padding: 1em 0;

    .btn-container {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 1em;
        margin-bottom: 1em;
    }
`

export const Center = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`