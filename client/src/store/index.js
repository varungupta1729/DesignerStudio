import { proxy } from "valtio";


const state = proxy({
   intro:true,
   color:'#EFBD48',
   // type:"T-Shirt",
   type:"Home Tshirt",
   isLogoTexture:true,
   isFullTexture:false,
   logoDecal:'./blacklogo.png',
   fullDecal:'./blacklogo.png',
})

export default state;