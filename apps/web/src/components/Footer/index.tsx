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
    const {isMobile, isTablet} = useMatchBreakpoints()


// eslint-disable-next-line @typescript-eslint/no-shadow
const FooterMain = styled.footer`
padding: 80px 0 60px;
background-color: #1f1f27;
`

const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
max-width: 100%;
padding-left: 15px;
padding-right: 15px;
position: relative;
width: 1440px;
`

const MenuContainer = styled.div`
margin-bottom: 50px;
padding: 16px;
`

const Row = styled.div`
margin-right: -15px;
margin-left: -15px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`

const InnerContainer = styled.div`

margin: ${isMobile ? '10' : '0'}px;
text-align: center;
&:hover {
    text-decoration: underline;
    cursor: pointer;
}

`

const Col4 = styled.div`
-webkit-box-flex: 0;
-webkit-flex: 0 0 33.333333%;
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;
`


const Widgetinfor = styled.div`
padding-right: 32%;
margin-top: 0;

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

{/* <div className="text-50px
 text-lowercase">
   Footer
</div> */}
        {/* <div className={`bg-[#1f1f27]
        
        `}>
<div>
   Footer
</div>
        </div> */}

        {/* <FooterMain>
         <Wrapper>
            <Row>
               <Col4>
               <Widgetinfor>
                  Footer
               </Widgetinfor>
               
               </Col4>
            
            </Row>
       
         </Wrapper>

        </FooterMain> */}
      
{/* <div style={{
   display: 'flex',
padding: ' 80px 0 60px',

backgroundColor: '#1f1f27'

}}> 
<div style={{
   
   marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: '100%',
	paddingLeft: '15px',
	paddingRight: '15px',
	position: 'relative',
	width: '1440px'
   
}}>
   <div style={{
      
         display: 'flex',
       
         flexWrap: 'wrap',
         marginRight: '-15px',
         marginLeft: '-15px',
   }}>
      
      <div style={{

	flex: '0 0 33.333333%',
	maxWidth: '33.333333%',

      }}>
      <div style={{
         	paddingRight: '32%',
            marginTop: '0'
      }}>
         
         <div style={{
            	marginBottom: '20px'
         }}>
            <div style={{

            }}>
                               <img style={{
                                 	maxWidth: '175px'
                               }} id="logo_footer" className="logo-dark" src="/images/unilogo2.png" alt="Binasea"/>
               <p style={{
                  	marginBottom: '23px',
                     color: '#bdbcbf',
                     fontSize: '14px',
                     fontWeight: '400',
                     lineHeight: '27px'
               }}>
               Allowing for secure and efficient swaps on decentralized crypto trading protocols, putting you at the forefront of innovation.
               </p>
               <ul  style={{
                  marginBottom: '10px'
               }}>
                  <li style={{
                     	display: 'inline-block',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        textAlign: 'center',
                        backgroundColor: '#252e41',
                        borderRadius: '8px',
                        marginRight: '12px',
                       
                  }}><FaFacebookF 
                     size={20} fill="#fff"
                     /></li>
                  <li  style={{
                     	display: 'inline-block',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        textAlign: 'center',
                        backgroundColor: '#252e41',
                        borderRadius: '8px',
                        marginRight: '12px',
                       
                  }}> <AiOutlineTwitter  size={20} fill="#fff"   /></li>
                  <li  style={{
                     	display: 'inline-block',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        textAlign: 'center',
                        backgroundColor: '#252e41',
                        borderRadius: '8px',
                        marginRight: '12px',
                       
                  }}><FaTelegramPlane  size={20} fill="#fff" /></li>
                  
                  <li  style={{
                     	display: 'inline-block',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        textAlign: 'center',
                        backgroundColor: '#252e41',
                        borderRadius: '8px',
                        marginRight: '12px',
                       
                  }}><FaYoutube  size={20} fill="#fff"  /></li>
                  <li  style={{
                     	display: 'inline-block',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        textAlign: 'center',
                        backgroundColor: '#252e41',
                        borderRadius: '8px',
                        marginRight: '12px',
                       
                  }}><FaGithub   size={20} fill="#fff"  /></li>
                  
               </ul>
               <p style={{
                     	color: '#5b5b66',
                        fontSize: '14px',
                        lineHeight: '22px'
                   }}>Copyright © 2023 Uniexchange. All Rights Reserved.</p>
            </div>
         </div>
         <div style={{
          
               flex: '0 0 41.666667%',
               maxWidth: '41.666667%',
         }}> 
         <div style={{
            	display: 'flex',
                marginTop: '60px'
         }}>
            <div style={{
               	marginLeft: '15px'
            }}>
               <h6 style={{
                  	fontSize: '18px',
                     lineHeight: '24px',
                     color: '#fff',
                     marginBottom: '20px'
               }}>Maketplace</h6>
                  <ul>
                  
                     <li><a href="/about">About</a></li>
                     <li><a href="/about">Contact us</a></li>
                     <li><a href="/about">Community</a></li>
                  </ul>
               </div>
         </div>
           
         </div>
      </div>
      </div>
      </div>
   
</div>
</div> */}
<div style={{
      backgroundColor: '#1f1f27',
      paddingBottom: '10vh',
      display: 'flex',
   flexDirection: 'column'
}}>
<div style={{
   display: 'flex',
   flexDirection: `${isTablet || isMobile? 'column': 'row'}`,

   gap: '10px',
   backgroundColor: '#1f1f27',
   color: 'white',
   padding: '80px 10px 10px 10px'
   
}}>

  
   <div style={{
         display: 'flex',
         flexDirection:'column',
         gap: '10px',
         flexBasis: '25%',
         padding: `${isMobile || isTablet ? '0px' : '10px 10px 80px'}`
   }}>
<div style={{
   	maxWidth: '175px'
}}>
<img id="logo_footer" className="logo-dark" src="/images/unilogo2.png" alt="Binasea"/>
</div>
<p style={{
   	marginBottom: '23px',
      color: '#bdbcbf',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '27px',
   
}}>
Allowing for secure and efficient swaps on decentralized crypto trading protocols, putting you at the forefront of innovation.
</p>
<ul style={{
   	marginBottom: '10px'
}}  >
                  <li style={{
                   	display: 'inline-block',
                      minWidth: '40px',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      textAlign: 'center',
                      backgroundColor: '#252e41',
                      borderRadius: '8px',
                      marginRight: '12px',
                  }}><FaFacebookF 
                     size={20} fill="#fff"
                     /></li>
                  <li
                  style={{
                     display: 'inline-block',
                     minWidth: '40px',
                     width: '40px',
                     height: '40px',
                     lineHeight: '40px',
                     textAlign: 'center',
                     backgroundColor: '#252e41',
                     borderRadius: '8px',
                     marginRight: '12px',
                 }}
                  > <AiOutlineTwitter  size={20} fill="#fff"   /></li>
                  <li
                  style={{
                     display: 'inline-block',
                     minWidth: '40px',
                     width: '40px',
                     height: '40px',
                     lineHeight: '40px',
                     textAlign: 'center',
                     backgroundColor: '#252e41',
                     borderRadius: '8px',
                     marginRight: '12px',
                 }}
                  ><FaTelegramPlane  size={20} fill="#fff" /></li>
                  
                  <li
                  style={{
                     display: 'inline-block',
                     minWidth: '40px',
                     width: '40px',
                     height: '40px',
                     lineHeight: '40px',
                     textAlign: 'center',
                     backgroundColor: '#252e41',
                     borderRadius: '8px',
                     marginRight: '12px',
                 }}
                  ><FaYoutube  size={20} fill="#fff"  /></li>
                  <li
                  style={{
                     display: 'inline-block',
                     minWidth: '40px',
                     width: '40px',
                     height: '40px',
                     lineHeight: '40px',
                     textAlign: 'center',
                     backgroundColor: '#252e41',
                     borderRadius: '8px',
                     marginRight: '12px',
                 }}
                  ><FaGithub  size={20} fill="#fff"  /></li>
                 
               </ul>
             
      </div>
      <div style={{
         flexBasis: '60%',
         display: 'flex',
      flexDirection: 'row',
paddingLeft: '20px',
fontSize: '20px',
justifyContent: 'center',
marginTop: '60px',
alignContent: 'center'
      }}>
      <div style={{
         flex: '1',

   
         
      
      }}>
         <div style={{
            fontSize: `${isTablet || isMobile ? '16px': '30px'}`,
            marginBottom: '20px'
         }}>
         Marketplce
            </div>
         
         <ul style={{
             fontSize: `${ isMobile ? '10px': '13px'}`,
         }}>
                  
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                 
                     lineHeight: '23px'
                  }} ><a href="/about">About</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
            
                     lineHeight: '23px'
                  }}><a href="/about">Contact us</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                  
                     lineHeight: '23px'
                  }}><a href="/about">Community</a></li>
               </ul>
      </div>
   <div style={{
         flex: '1',

   
         
      }}>
       <div style={{
               fontSize: `${isTablet || isMobile ? '16px': '30px'}`,
            marginBottom: '20px'
         }}>
         Stats
            </div>
         <ul style={{
             fontSize: `${isMobile ? '10px': '13px'}`,
         }}>
                  
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                    
                     lineHeight: '23px'
                  }} ><a href="/about">Customer Support</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                    
                     lineHeight: '23px'
                  }}><a href="/about">Terms Of Service</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                   
                     lineHeight: '23px'
                  }}><a href="/about">Litepaper</a></li>
               </ul>
      </div>
      <div style={{
         
flex:'1',
   
 
      }}>
        <div style={{
                 fontSize: `${isTablet || isMobile ? '16px': '30px'}`,
            marginBottom: '20px'
         }}>
         Resource
            </div>
         <ul style={{
              fontSize: `${isMobile ? '10px': '13px'}`,
         }}>
                  
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                    
                     lineHeight: '23px'
                  }} ><a href="/about">Careers</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                    
                     lineHeight: '23px'
                  }}><a href="/about">Help and Center</a></li>
                  <li style={{
                     paddingBottom: '11px',
                     listStyle: 'none',
                     color: '#b4b3b7',
                     
                     lineHeight: '23px'
                  }}><a href="/about">FaQs</a></li>
               </ul>
      </div>
      </div>
  <div  style={{
       flexBasis: '20%',
         marginTop: '20px',
        
      }}>
         <div style={{
            	fontSize: `${isMobile || isTablet ? '30px': '40px'}`,
               lineHeight: '24px',
               color: '#fff',
               marginBottom: '30px'
         }}>
Subscribe Us
         </div>

<p style={{
   	marginBottom: '16px',
      fontSize: '14px',
      lineHeight: '22px',
      color: '#b4b3b7',
      letterSpacing: '-0.2px',
      paddingRight: '5px'
}}>Signup for our newsletter to get the latest news in your inbox.</p>
<div  style={{
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center'
}}> <input type="email" style={{

   	border: '1px solid hsla(0, 0%, 88.6%, 0.28)',
      borderRadius: '43px 0px 0px 43px',
      width: '100%',
      padding: '12px 46px 12px 20px',
      fontSize: '14px',
      lineHeight: '22px',
      color: '#bbbabd',
      background: 'none',
}}  placeholder="Info@yourgmail.com"/>
                <button style={{
                  right: '0',
                
                 
                  width: '46px',
                  padding: '0',
                  backgroundColor: '#7D54FF',
                  border: '1px solid #7D54FF',
                  color: '#fff',
                  borderRadius: '0px 40px 40px 0px',
                }} type="button"> <FaCaretRight  size={30} fill="#fff"  /></button></div>
           
  </div>
  
   </div>
   <p className={styles.copyright} style={{
      	color: '#5b5b66',
         fontSize: '14px',
         lineHeight: '22px',
         paddingLeft: '20px',
         paddingTop: '30px',
         justifySelf: 'end'
   }}>Copyright © 2023 Uniexchange. All Rights Reserved.</p>
   </div>


        {/* <footer className={styles.footer} >
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
  
</footer> */}

        </>
    )
}

export default Footer