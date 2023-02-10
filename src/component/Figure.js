import { useEffect, useRef  } from 'react';

//style
import styles from '../styles/Style.module.css'

const Figure = ({mistake}) => {

  const bodyCanvas = useRef('')

 useEffect(()=>{

   const draw = () => {

      const ctx = bodyCanvas.current.getContext("2d");
      ctx.lineWidth = 4; 
      ctx.strokeStyle = "white";

      if(mistake === 0){
        ctx.clearRect(0, 0, 230 , 230);
     }
     
      //gallows
      ctx.beginPath();
      ctx.moveTo(0, 300);
      ctx.lineTo(100, 300);
      ctx.moveTo(50, 300);
      ctx.lineTo(50, 0);
      ctx.moveTo(50, 0);
      ctx.lineTo(170, 0);
      ctx.moveTo(170, 0);
      ctx.lineTo(170, 40);
      ctx.stroke();

      if(mistake === 1){
        ctx.beginPath();
        ctx.arc(170, 70, 30, 0, 2 * Math.PI );
        ctx.stroke();
      }if(mistake === 2){
        ctx.beginPath();
        ctx.moveTo(170, 100);
        ctx.lineTo(170, 180);
        ctx.stroke();
      }
      if(mistake === 3){
        ctx.beginPath();
        ctx.moveTo(170, 140);
        ctx.lineTo(210, 110);
        ctx.stroke();
      }if(mistake === 4){
        ctx.beginPath();
        ctx.moveTo(170, 140);
        ctx.lineTo(130, 110);
        ctx.stroke();
      }
      if(mistake === 5){
        ctx.beginPath();
        ctx.moveTo(170, 180);
        ctx.lineTo(130, 220);
        ctx.stroke();
      }if(mistake === 6){
        ctx.beginPath();
        ctx.moveTo(170, 180);
        ctx.lineTo(210, 220);  
        ctx.stroke();
      }
  
  }

  draw()

    },[mistake])

    return (
    <div className={styles.figureContainer}>
         <canvas ref={bodyCanvas} width="230" height="230"></canvas>  
    </div>
    );
};

export default Figure;