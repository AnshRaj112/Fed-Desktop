import style from "./Styles/hero.module.scss";


function Hero() {
    return (
      <div className={style.main}>
         <div className = {style.hero}>
             <div className={style.hero1}>
                 <div className={style.hero1one}>
                   <div className={style.e}>
                   <h2>Nurturing</h2>
                   <h3>entrepreneurship</h3>
                   </div>
                   <h2>through creative,authentic,</h2> 
                   <h2>and efficient techniques.</h2>
                 </div>

                 <div className={style.hero1two}>
                   <div className={style.f}>
                   <h4>Nurturing</h4>
                   <h5>entrepreneurship </h5>
                   <h4>through</h4>
                   </div>
                   <h4> creative, authentic,and efficient techniques.</h4> 
                 </div>
             </div>
             <div className={style.hero2}></div>
         </div>
         <div className={style.gola}></div>
      </div>
    );
  }
  
  export default Hero;
  