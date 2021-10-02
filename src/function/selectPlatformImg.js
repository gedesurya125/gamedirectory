import threeDoIcon from '../assets/icon/3doIcon.svg'
import amigaIcon from '../assets/icon/amigaIcon.svg'
import androidIcon from '../assets/icon/androidIcon.svg'
import appleIcon from '../assets/icon/appleIcon.svg'
import atariIcon from '../assets/icon/atariIcon.svg'
import iosIcon from '../assets/icon/iosIcon.svg'
import linuxIcon from '../assets/icon/linuxIcon.svg'
import neoGeoIcon from '../assets/icon/neoGeoIcon.svg'
import nitendoIcon from '../assets/icon/nitendoIcon.svg'
import playstationIcon from '../assets/icon/playstationIcon.svg'
import segaIcon from '../assets/icon/segaIcon.svg'
import webIcon from '../assets/icon/webIcon.svg'
import windowsIcon from '../assets/icon/windowsIcon.svg'
import xboxIcon from '../assets/icon/xboxIcon.svg'


const iconList = [
  {id:1, icon: windowsIcon},
  {id:2, icon: playstationIcon},
  {id:3, icon: xboxIcon},
  {id:4, icon: iosIcon},
  {id:5, icon: appleIcon},
  {id:6, icon: linuxIcon},
  {id:7, icon: nitendoIcon},
  {id:8, icon: androidIcon},
  {id:9, icon: atariIcon},
  {id:10, icon: amigaIcon},
  {id:11, icon: segaIcon},
  {id:12, icon: threeDoIcon},
  {id:13, icon: neoGeoIcon},
  {id:14, icon: webIcon},

]

export const selectPlatformImg = (id) => {
  return iconList.filter(icon => icon.id === id)[0].icon;
}
