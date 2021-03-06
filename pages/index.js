import * as React from 'react';
import Image from 'next/image'
import lucas from '../public/Lucas.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Pages from '../comps/Pages'

export default function Home() {
  return (
   <div>
     <header className="profile container">
       <div className="profile__container grid">
         <div className="profile__data">
           <div className="profile__border">
             <div className="profile__perfil">
               <Image src={lucas} alt=''></Image>
             </div>
           </div>
            <h2 className="profile__name"> Lucas Coutinho </h2>
            <h3 className="profile__profession"> BlockChain and Web Developer </h3>
            <ul className="profile__social">
              <a href="https://www.instagram.com/lucas.dcoutinho/" className="profile__social-link">
                <InstagramIcon/>
              </a>
              <a href="https://www.linkedin.com/in/lucasdcoutinho/" className="profile__social-link">
                <LinkedInIcon/>
              </a>
              <a href="https://github.com/lucasdcoutinh0" className="profile__social-link">
                <GitHubIcon/>
              </a>
            </ul>
         </div>
         <div className="profile__info grid">
                    <div className="profile__info-group">
                        <h3 className="profile__info-number">4</h3>
                        <p className="profile__info-description">
                            Years of <br/> work
                        </p>
                    </div>
                    <div className="profile__info-group">
                        <h3 className="profile__info-number">+102</h3>
                        <p className="profile__info-description">
                            Completed <br/> projects
                        </p>
                    </div>
                    <div className="profile__info-group">
                        <h3 className="profile__info-number">87</h3>
                        <p className="profile__info-description">Satisfied <br/> customers</p>
                    </div>
                </div>

                <div className="profile__buttons">
                <a href="https://drive.google.com/file/d/1EKmXJjLgggzkaX6Wbzofo65zPPKeaS_O/view?usp=sharing" className='button'>Download CV <DownloadIcon/> </a>
                    <div className="profile__buttons-small">
                        <a href="https://api.whatsapp.com/send?phone=5511977194234&text=Hey,%20I%20want%20to%20talk%20with%20you%20abou%20a%20developer%20service%20" className="button button__small button__gray">
                            <WhatsAppIcon/>
                        </a>
                        <a href="https://tttttt.me/lucasdcoutinho" className="button button__small button__gray">
                            <TelegramIcon/>
                        </a>
                    </div>
                </div>
                  <Pages/>
            </div>
     </header>
   </div>
  )
}
