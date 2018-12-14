import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background: #eeeeee;
        text-align: center;
    }

    p {
        font-style: italic;
    }


    h1, h2 {
        text-align: center;
    }

    h1 {
        font-size: 21px;
        font-family: 'Luckiest Guy', cursive;
        font-weight: 400;
        margin: 0;
    }

    h2 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 32px;
        font-weight: 500;
      }

    blockquote p {
        &::before, &::after {
        content: '"';
        }
    }

    cite {
        display: block;
        text-align: right;

        &::before {
            content: '- ';
        }
    }
`;
