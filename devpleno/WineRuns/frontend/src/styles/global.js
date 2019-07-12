import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import 'react-toastify/dist/ReactToastify.css';
import 'react-table/react-table.css';

export default createGlobalStyle`
  .activeNavBar {
    border-bottom-color: #00dfdf;
    border-bottom-style: solid;
    border-bottom-width: 2
  }

  .navbarItemBar:hover{
    border-bottom-color: #00dfdf;
    border-bottom-style: solid;
    border-bottom-width: 1
  }

  .is-title-bar {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(24,28,33,.06);
  }

  .section.is-title-bar ul li {
    display: inline-block;
    padding: 0 0 0 .75rem;
    font-size: 1.5rem;
    color: #7a7a7a;
  }

  .section.is-title-bar ul li:last-child {
    padding-right: 0;
    font-weight: 900;
    color: #242424;
  }

  .section.is-title-bar ul li::after {
    display: inline-block;
    padding-left: .75rem;
  }



`;
