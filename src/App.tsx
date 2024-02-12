import Form from "./Componente/Form";
import incoFece from '../src/assets/icon-fece.svg'
import incoInsta from '../src/assets/icon-insta.svg'
import inconYou from '../src/assets/icon-you.svg'
import Ilustration from './assets/ilustration-kit.svg'
import iconBike from './assets/icon-bike.svg'
import inconPintura from './assets/icon-pintura.svg'

const App = () => {

  return (
    <>
      <section
        className="min-h-screen bg-gradient-to-b from-[#191919] from-50% to-[#fff] to-50% flex items-center flex-col justify-center
        ">
        <div className="max-w-[800px] mx-auto w-full small:w-11/12 md:my-12 small:my-12 xsmall:my-12">
          <h3 className="uppercase text-gray-500 text-xl font-bold xsmall:text-sm small:text-lg">Respostas em até 24h</h3>
          <h2 className="text-5xl text-zinc-50 font-medium mb-6 xsmall:text-2xl small:text-3xl">nosso contato</h2>

          <div className="flex flex-row rounded-md overflow-hidden md:flex-col-reverse small:flex-col-reverse xsmall:flex-col-reverse">

            <div className="flex flex-col flex-1 w-[300px] text-zinc-50 bg-black py-10 px-6 gap-7 md:w-full md:flex-row md:justify-around small:w-full small:flex-row xsmall:w-full xsmall:text-center">

              <h4 className="font-poppins font-semibold text-xl small:text-sm">
                Loja online
              </h4>

              <div className="space-y-4">
                <nav className="flex flex-col">
                  <a
                    href=""
                    className="text-[16px] text-[#CCCCCC] before:content-[url(./src/assets/icon-location.svg)] small:text-sm">
                    Rua Ali Perto, 35</a>
                  <a
                    href=""
                    className="text-[16px] text-[#CCCCCC] ml-4 small:text-sm">
                    Rio de Janeiro - RJ</a>
                  <a
                    href=""
                    className="text-[16px] text-[#CCCCCC] ml-4 small:text-sm">
                    Brazil - Terra - Via Láctea</a>
                </nav>
                <nav className="flex flex-col">
                  <a
                    href="mailto:Vendas@bikcraft.com"
                    className="text-[16px] text-[#CCCCCC]  before:content-[url(./src/assets/icon-email.svg)] small:text-sm">
                    Vendas@bikcraft.com</a>
                  <a
                    href="mailto:assistencia@bikcraft.com"
                    className="text-[16px] text-[#CCCCCC] ml-4 small:text-sm">
                    assistencia@bikcraft.com</a>
                </nav>

                <nav>
                  <a
                    href="tel:22 999999-9999"
                    className="text-[16px] text-[#CCCCCC] before:content-[url(./src/assets/icon-tel.svg)] small:text-sm">
                    (21) 99999-9999
                  </a>
                </nav>
              </div>
              <figure className="flex gap-4 small:hidden xsmall:hidden">
                <img src={incoInsta} alt="icone de rede social" width="20px" height="20px" />
                <img src={incoFece} alt="icone de rede social" width="20px" height="20px" />
                <img src={inconYou} alt="icone de rede social" width="20px" height="20px" />
              </figure>
            </div>

            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-[#1A1A1A] from-95% to-white to-10% min-h-screen ">

        <div className="flex flex-row max-w-[1440px] mx-auto md:bg-[#1A1A1A] small:flex-col-reverse xsmall:flex-col-reverse">

          <div className="w-1/2 flex items-center justify-center flex-col small:w-full xsmall:w-full small:text-center xsmall:text-center">

            <h3 className="font-bold text-2xl self-start small:self-center xsmall:self-center text-[#9C9C9C] mb-5 uppercase md:text-xl md:mt-5 small:mt-3 xsmall:mt-4">
              Tecnologia avançada
            </h3>
            <h2 className="text-6xl text-zinc-50 font-semibold font-poppins lg:text-4xl md:text-2xl small:text-2xl xsmall:text-xl">
              você escolhe as suas partes e como montar.
            </h2>

            <p className="font-medium text-lg text-justify w-3/4 self-start my-7 text-[#9C9C9C] lg:w-11/12 md:w-11/12 small:w-11/12 xsmall:w-11/12 small:mx-auto xsmall:mx-auto">
              Quando iniciamos a Bikcraft queriamos apenas um produto que adoraríamos utilizar. Eramos apaixonados por pedalar e também por fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho na garagem da nossa casa.
            </p>
            <a
              href="#"
              className="text-yellow underline font-semibold font-poppins text-lg self-start mb-6  small:self-center xsmall:self-center">
              VEJA MAIS
            </a>

            <div className="flex flex-wrap self-start gap-3 lg:gap-0 small:items-center small:justify-center xsmall:items-center xsmall:justify-center small:mb-5 xsmall:mb-5">

              <div className="max-w-72 lg:w-60">
                <img
                  src={iconBike}
                  alt="icon bike" />
                <h4 className="font-poppins font-medium text-lg text-zinc-50 my-2">
                  Motor Elétrico
                </h4>
                <p className="font-poppins text-[#B2B2B2] text-sm">
                  O motor elétrico da Bikcraft permite você viajar distâncias inimagináveis. Com duração de 24h você não precisará carregar por dias.
                </p>
              </div>

              <div className="max-w-72 lg:w-60">
                <img src={inconPintura} alt="" />
                <h4 className="font-poppins font-medium text-lg text-zinc-50 my-2">
                  Pintura Metálica
                </h4>
                <p className="font-poppins text-[#B2B2B2] text-sm">
                  A pintura é personalizada para o seu gosto. Toda pintura é exclusiva e nenhum cliente terá a mesma Bikcraft que a sua.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 small:w-full xsmall:w-full ">
            <img src={Ilustration} alt="Ilustração de nossa pagina" width="100%" />
          </div>
        </div>
        <p className="text-center text-[10px] text-zinc-50">Designer criado por <a href="https://www.figma.com/@suamirocha" target="_blank">@suamirocha</a> Desenvolvido por <a href="https://www.linkedin.com/in/HerbertlSouza/" target="_blank">'Herbert Souza'</a></p>
      </section>
    </>
  );

}
export default App;
