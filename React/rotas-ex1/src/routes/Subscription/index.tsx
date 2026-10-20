import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Subscription () {
   
         return (
           <main>
             <section>
               <div className="conteiner">
                 <div className="mb30 mt30">
                   <Card title="Pagina de inscrição" />
                 </div>
                 
                 <div className="dflex">
                  <Link to={"/promotion"}>
                    <Button text="Ver promoção" />
                    </Link>
                 </div>
                
               </div>
             </section>
           </main>
         );
       }
    
