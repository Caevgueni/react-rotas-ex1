import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";


export default function Promotion () {
   
         return (
           <main>
             <section>
               <div className="conteiner">
                 <div className="mb30 mt30">
                   <Card title="Pagina de promoçao" />
                 </div>
                
               
                 <div className="dflex">
                   <Link to={"/sub"}>
                    <Button text="Quero Participar" />
                  </Link>
                 </div>
                
                
               </div>
             </section>
           </main>
         );
       }
    
