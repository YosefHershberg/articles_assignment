import { styled } from '@mui/material/styles';
import { Card, Box } from '@mui/material';

export const ArticleListStyled = styled(Box)`
    height: 90%;
    overflow-y: auto;
    padding: 0 1em;
`

export const ArticleCardStyled = styled(Card)`
    margin: 0 0 .5em 0;
    display: flex;
    height: 8em;
    padding: 0 .5em;
    
    .img-container {
        display: flex;
        height: 100%;
        align-items: center;

        img {
            height: 7em;
            width: 7em;
            object-fit: cover;
            object-position: center;
            border-radius: 5px;
        }
    }

    .details-container {
        padding: 0 .5em;

        h4 {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis; 
            margin: .2em 0 0 0;
        }
        
        i {
            /* word-wrap: break-word; */
            overflow: hidden;
            text-overflow: ellipsis; 
            font-size: small;
        }
        
        p {
            font-size: small;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            text-overflow: ellipsis; 

        }
    }
`