import Carros from "./carros.jsx";
import Imagens from "./imagens.jsx";


function Garagem() {
  const carros = ["Nivus","Onix","Prisma","Corsa","HB20","Corrolla","Fiat" ];
  return (
    <div>
      <h1>Os carros que estão na minha Garagem: </h1>
      <ul>
        {carros.map((carro) => (
            <div>
                <Carros marca={carro} />
                <Imagens/>
            </div>
        ))}
      </ul>
    </div>
  );
}

export default Garagem;