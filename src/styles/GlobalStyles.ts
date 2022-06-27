import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    ol, ul, li {
        list-style: none;
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
    }
    * {
        box-sizing:border-box;
    }
`

export default globalStyles
