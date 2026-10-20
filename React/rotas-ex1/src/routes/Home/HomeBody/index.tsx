import Button from "../../../components/Header/Button";
import Card from "../../../components/Header/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="conteiner">
          <div className="mb30 mt30">
            <Card title="Pagina inicial" />
          </div>

          <div className="dflex">
             <Button text="Ver promoção" />
          </div>
         
        </div>
      </section>
    </main>
  );
}
