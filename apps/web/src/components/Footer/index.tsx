import { Flex, useMatchBreakpoints } from "@pancakeswap/uikit"
import React, {useEffect} from "react"
import styled from "styled-components"
import {AiFillGithub, AiOutlineTwitter} from "react-icons/ai"
import {BsDiscord,  BsTelegram, BsTwitter} from 'react-icons/bs'
import { FaCaretRight, FaFacebookF, FaGithub, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { useRouter } from "next/router"
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../style/Footer.module.css'


const Footer = () => {
    const {isMobile} = useMatchBreakpoints()

const Wrapper = styled.div`
width: 100%;
background-color: #7645D9;
color: white;
padding: 16px;
margin-top: 50px;
z-index: 10;
`

const MenuContainer = styled.div`
margin-bottom: 50px;
padding: 16px;
`

const InnerContainer = styled.div`

margin: ${isMobile ? '10' : '0'}px;
text-align: center;
&:hover {
    text-decoration: underline;
    cursor: pointer;
}
`
const router = useRouter()

const goTo = () => {
    router.push('/about')
}

const socialHandles = () => {
    return(
        <>
         <div >
            <AiFillGithub
            size={26}
            />
            </div>
            <div>
            <BsDiscord
               size={26}
               />
            </div>
            <div>
            <BsTwitter
               size={26}
            />
            </div>
            <div>
            <BsTelegram
               size={26}
            />
            </div>
        </>
    )
}

useEffect(() => {
   import("bootstrap/dist/js/bootstrap");
},[])

    return (
        <>
      
        <footer className={styles.footer}>
   <div className={styles.tfcontainer}>
      <div className={styles.row}>
         <div className={styles.col4}>
            <div className={styles.widgetinfor}>
               <div className={styles.logo}>
                <img id="logo_footer" className="logo-dark" src="/images/unilogo2.png" alt="Binasea"/></div>
               <p className={styles.content}>Allowing for secure and efficient swaps on decentralized crypto trading protocols, putting you at the forefront of innovation.</p>
               <ul  className={styles.socialitem}>
                  <li><FaFacebookF 
                     size={20} fill="#fff"
                     /></li>
                  <li> <AiOutlineTwitter  size={20} fill="#fff"   /></li>
                  <li><FaTelegramPlane  size={20} fill="#fff" /></li>
                  
                  <li><FaYoutube  size={20} fill="#fff"  /></li>
                  <li><FaGithub  size={20} fill="#fff"  /></li>
                 
               </ul>
               <p className={styles.copyright}>Copyright © 2023 Uniexchange. All Rights Reserved.</p>
            </div>
         </div>
         <div className={styles.col5}>
            <div className={styles.widgetmenu}>
               <div className={styles.menu1}>
                  <h6 className={styles.widgettitle}>Maketplace</h6>
                  <ul>
                  
                     <li><a href="/about">About</a></li>
                     <li><a href="/about">Contact us</a></li>
                     <li><a href="/about">Community</a></li>
                  </ul>
               </div>
               <div className={styles.menu2}>
                  <h6 className={styles.widgettitle}>Stats</h6>
                  <ul>
                     <li><a href="/about">Customer Support</a></li>
                     <li><a href="/about">Terms Of Service</a></li>
                     <li><a href="/about">Litepaper</a></li>
                  </ul>
               </div>
               <div className={styles.menu3}>
                  <h6 className={styles.widgettitle}>Resoure</h6>
                  <ul>
                     <li><a href="/about">Careers</a></li>
                     <li><a href="/about">Help and Center</a></li>
                     <li><a href="/about">FaQs</a></li>
                  </ul>
               </div>
              
            </div>
         </div>
         <div className={styles.col3}>
            <div className={styles.widgetsubcribe}>
               <h6 className={styles.widgettitle}>Subscribe Us</h6>
               <p  className={styles.content}>Signup for our newsletter to get the latest news in your inbox.</p>
             
               <div  className={styles.subs}> <input type="email"  placeholder="Info@yourgmail.com" className={styles.subscribeemail}/>
                <button className={styles.tfbutton}   type="button" > <FaCaretRight  size={30} fill="#fff"  /></button></div>
            </div>
         </div>
      </div>
   </div>
   /
  
</footer>

        </>
    )
}

export default Footer