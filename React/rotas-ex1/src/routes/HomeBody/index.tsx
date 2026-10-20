import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";


export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="conteiner">
          <div className="mb30 mt30">
            <Card title="Pagina inicial" />
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
