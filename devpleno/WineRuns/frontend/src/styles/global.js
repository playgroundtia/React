import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import 'react-toastify/dist/ReactToastify.css';
import 'react-table/react-table.css';

export default createGlobalStyle`

  html {
    background-color: #f8f8f8;
  }


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

  .card-no-box-shadow {
    background-color: #fff;
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
  }

  .card-header-no-box-shadow {
    background-color: transparent;
    align-items: stretch;
    display: flex;
  }

  .nav-padding {
    padding: 0 30px;
  }



`;
