import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&family=Gaegu:wght@300;400;700&display=swap');

body{
    font-size:15px;
    line-height:1.6;
    font-family:'Dongle', sans-serif;
    color:#333;
}
a {text-decoration:none; color:#333}
.box{

}
`
export default GlobalStyle;