import React from "react"
import { Link } from "gatsby"
import img10 from "../../images/about/about-img10.png"
import ourmission1 from "../../images/our-mission/our-mission1.png"
import shape1 from "../../images/about/about-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import starIcon from "../../images/star-icon.png"

const AlgoContent = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={ourmission1} alt="banner" />
                <div className="shape">
                  <img src={shape1} alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    AI valdomas algoritmas
                  </span>
                  <h2>Kaip tai veikia?</h2>
                  <p>
                  Mūsų algoritmas, valdantis inverterius, priimančius sprendimus, ar 
                  saulės energija bus naudojama baterijai krauti, parduodama į tinklą 
                  ar vartojama tiesiogiai, remiasi keliomis svarbiomis kintamosiomis. 
                  Šios kintamosios apima praeities vartotojo energijos suvartojimą, 
                  baterijos talpą, būsimą orų prognozę ir elektros kainas. Algoritmas 
                  turi sugebėti prognozuoti būsimą situaciją ir priimti geriausią sprendimą 
                  pagal esamas sąlygas bei artėjančius pokyčius.
                  </p>

                  {/* <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Smart Energy Trading
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cost Savings
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Environmental Impact
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User-Centric Design
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul> */}

                  <h3>Algoritmo veikimo principas</h3>
                  <ul>
                    <li>
                    Vartotojo praeities energijos suvartojimo duomenys – algoritmas analizuoja, kiek energijos namų ūkis paprastai sunaudoja tam tikromis dienos valandomis. Pvz., ryte vartojimas paprastai yra mažesnis, o vakare – didesnis. Šie duomenys padeda prognozuoti, kiek energijos reikės artimiausiomis valandomis.
                    </li>
                    <li>
                    Baterijos talpa – algoritmas stebi esamą baterijos įkrovos lygį. Tai padeda nustatyti, kiek energijos galima saugoti ir kada verta ją išnaudoti.
</li>
<li>
Orų prognozė – svarbus faktorius yra būsimų saulėtų valandų prognozė. Jei laukiamas saulėtas laikotarpis, gali būti verta išnaudoti esamą baterijos energiją arba parduoti ją į tinklą, nes artimiausiu metu saulės energija atnaujins atsargas.
</li>
<li>
Elektros kainos – elektros kainos rinkoje taip pat lemia, kada verta energiją parduoti į tinklą. Kai kainos žemos, gali būti verta daugiau energijos saugoti baterijoje, o kai kainos aukštos – parduoti ją už geresnę kainą.
</li>
                  </ul>

                  <h3>Veikimo Pavyzdžiai</h3>

                  <ul>
                    <li>
                    Rytas, kai baterija yra pusiau įkrauta, o saulė dar nepatekėjusi: Tarkime, ankstyvas rytas, baterija yra pusiau įkrauta, o saulė dar nepatekėjusi. Remdamasis praeities duomenimis, algoritmas žino, kad namų energijos suvartojimas rytais paprastai nėra didelis, todėl nusprendžia parduoti dalį energijos į tinklą, nes ateityje tikimasi saulės energijos, kuri galės vėl įkrauti bateriją. Taip pasinaudojama tuo, kad šiuo metu elektros poreikis namuose nėra didelis, o tinklo kainos gali būti palankios.
                    </li>
                    <li>
                    Diena, saulė šviečia, o elektros kainos yra žemos: Dienos metu, kai saulė šviečia ir generuoja daug energijos, o elektros kainos rinkoje yra žemos, algoritmas nusprendžia visą perteklinę saulės energiją naudoti baterijos įkrovimui, kad ateityje turėtų rezervų. Tuo pačiu, visą likusią perteklinę energiją, kuri viršija namų vartojimą ir baterijos talpą, parduoda į tinklą. Kadangi kainos žemos, vertingiau sukaupti energiją baterijoje nei ją parduoti.
                      </li>
                      <li>
                      Vakaras, aukštos kainos ir prognozuojamas didesnis namų vartojimas: Vakare, kai saulės energijos nebėra, o elektros kainos rinkoje pakilusios, algoritmas, remdamasis praeities vartojimo duomenimis, prognozuoja didesnį energijos poreikį namuose. Todėl nusprendžia dalį energijos baterijoje palikti būsimam namų vartojimui, kad nereikėtų brangiai pirkti iš tinklo. Likusią dalį, kuri viršija numatomą vakarinį vartojimą, algoritmas parduoda į tinklą už aukštesnę kainą, taip maksimaliai išnaudodamas rinkos sąlygas.
                      </li>
                  </ul>

<p>Tokiu būdu algoritmas, atsižvelgdamas į esamą situaciją ir prognozes, optimizuoja energijos panaudojimą, maksimaliai didindamas naudą vartotojui – tiek užtikrindamas efektyvų namų energijos aprūpinimą, tiek pasinaudodamas palankiomis elektros kainomis.</p>

                  {/* <p>Mūsų misija yra revoliucionizuoti namų energijos valdymą, siūlant išmanų, 
                    patogų sprendimą, kuris maksimaliai padidins jūsų finansinius ir aplinkosaugos 
                    privalumus. Tikime ateitimi, kurioje energija yra valdoma efektyviai, tvariai 
                    ir ekonomiškai, ir mūsų pažangia technologija yra čia, kad šią ateitį paverstų 
                    realybe.</p> */}
                  {/* <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlgoContent
