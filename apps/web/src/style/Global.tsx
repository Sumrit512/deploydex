import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
    font-weight:400;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

    .hoverme:hover {
      cursor: pointer;
    }



    .card-header, .card-footer  {
	
      background: #f8fafc;
      border: 0;
    }
    
    .list-group li {
      font-size: 13px;
      line-height: 21px;
    }
   .form-control.buy {
      font-size: 14px;
      height: 46px;
      background: #eef4ff30;
    }

    .card {
      border: 0;
      border-radius: 13px !important;
      overflow: hidden;
      box-shadow:0 0 4px #ebeaea;
    }
   .card.buy .card-body label {
      font-size: 13px;
      text-transform: capitalize;
      color: #3f2770;
    }

    .form-control.buy::placeholder {
      color: rgba(40, 13, 95, 0.45);
      opacity: 1;
    }
    .pull-right {
      float: right;
    }

    .linear-progress-bar {
      position: absolute;
      background: #7645d9;
      width: 32%;
      height: 2px;
    }
    

    .linear-progress {
      height: 2px;
      width: 100%;
      background: #d3d0f9;
    }

    .notice-text {
      font-size: 12px;
      line-height: 21px;
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      color: #3f2770;
      margin-bottom: 34px;
    }
    
    .mbuni {
      margin-bottom: 90px !important;
    }

    .banner_text h1,  .banner_text h1 span {
      font-size: 44px !important;
      font-weight: 600;
      margin-bottom: 22px;
      line-height: 52px;
    }

    .banner_text h1 span {
      background: linear-gradient(178.56deg, #E250E5 5.32%, #4B50E6 94.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .slide_up_down {
      -webkit-animation: slide_up_down 1.7s ease-in-out infinite alternate both;
      animation: slide_up_down 1.7s ease-in-out infinite alternate both;
    }
    .scale_up_down {
      -webkit-animation: RL_smooth 1s ease-in-out infinite alternate both;
      animation: RL_smooth 1s ease-in-out infinite alternate both;
    }

    @-webkit-keyframes slide_up_down {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
    @keyframes slide_up_down {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }

    @-webkit-keyframes RL_smooth {
      0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
      50% {
        -webkit-transform: translateX(5px);
                transform: translateX(5px);
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
    }


    
    @keyframes RL_smooth {
      0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
      50% {
        -webkit-transform: translateX(5px);
                transform: translateX(5px);
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
    }


     .hand-mega {
      position: absolute;
      width: 17%;
      top: 9%;
      left: 0;
      -o-object-fit: contain;
      object-fit: contain;
      -o-object-position: left;
      object-position: left;
      z-index: 2;
    }
     .head6-rating {
      position: absolute;
      width: 18%;
      top: 27%;
      left: 15%;
      -o-object-fit: contain;
      object-fit: contain;
      z-index: 2;
    }

    .head6-charts {
      position: absolute;
      width: 14%;
      top: 7%;
      right: 10%;
      -o-object-fit: contain;
      object-fit: contain;
      z-index: 2;
    }

     .head6-rocket {
      position: absolute;
      width: 20%;
      top: 25%;
      right: -30px;
      z-index: 2;
    }

    

    .box1{
      background: #fff;
padding: 50px 10px 30px;
border-radius: 51px;
margin-top: 114px;
    }

    .nft {
      max-width: 318px !important;
    }

   .banner_text p {
      font-size: 19px;
      line-height: 35px;
      margin-bottom: 26px;
      color: #280d5f;
    }

 .about-btn {
      margin-right: 11px;
      padding: 10px 40px;
      font-size: 18px;
    }
    .about-btn.btn.btn-outline-primary.btn-lg {
      color: #7d54ff;
      border-color: #7d54ff;
      background: white;
    }

    .about-btn.btn.btn-outline-primary.btn-lg:hover {
      background: #7d54ff;
      color: white;
    }

    .btn.about-btn.btn-primary.btn-lg.m-r-2 {
      background: #7d54ff;
      border-color: #7d54ff;
    }
    .btn.about-btn.btn-primary.btn-lg.m-r-2:hover {
      background: white;
      color:#7d54ff;
    }

    .counter {
      display: flex;
     
    
      justify-content: space-between;
      margin-top: 40px;
    }

    .counter h4 {
      font-size: 37px;
      font-weight: 600;
      color: #280d5f;
    }
    .counter p {
      font-size: 14px;
      color: #8471ac;
    }

   
    .banner_images.image_box1 {
      position: relative;
    }
    .banner_images span.banner_image2 img {
      position: absolute;
      z-index: 1;
      right: 0;
      top: 15%;
    }

    .banner_images span img {
      -webkit-animation: move5 10s infinite linear;
      animation: move5 10s infinite linear;
      z-index: 444;
      position: relative;
    }

     .banner-image img {
      max-width: 500px;
      margin: 0 auto;
      display: block !important;
      width: 100%;
    }

    .banner-image {
      animation: floating 5s linear infinite;
    }

    .pd-80 {
      padding-top: 78px;
    }
    @keyframes move5 {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    }
    @keyframes floating {
      from {
          transform: translate(0, 0px);
      }
  
      50% {
          transform: translate(0, 15px);
      }
  
      to {
          transform: translate(0, -0px);
      }
  }

  @media only screen and (max-width: 600px) {

    .banner_text h1,  .banner_text h1 span {
      font-size: 30px !important;
      
      line-height: 35px;
    }

     .banner_text p {
      font-size: 15px;
      line-height: 28px;
      margin-bottom: 26px;
      color: #280d5f;
    }

    
  }
  




 

  
`

export default GlobalStyle
