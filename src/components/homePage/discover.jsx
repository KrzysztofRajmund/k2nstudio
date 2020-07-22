import React, { Component, useState, useEffect } from "react";
//bootstrap
import {
  Container,
  Carousel,
  Button,
  Card,
  CardGroup,
  Row,
  Col,
  Table,
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/fetchActions";
//assets
import promoCode from "../../assets/promoCode.png";
import infoIcon from "../../assets/infoIcon.png";

const Discover = ({
  getItems,
  fetchReducer
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  //Carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //Toggle useState
  const [toggleBestsellers, setToggleBestsellers] = useState(true);
  const [togglePremiere, setTogglePremiere] = useState(false);
  const [toggleNewcoming, setToggleNewcoming] = useState(false);

  //Toggle Bestsellers
  const onClickToggleBestsellers = () => {
    setToggleBestsellers(true);
    setTogglePremiere(false);
    setToggleNewcoming(false);
  };

  //Toggle Premiere
  const onClickTogglePremiere = () => {
    setToggleBestsellers(false);
    setTogglePremiere(true);
    setToggleNewcoming(false);
  };

  //Toggle Newcoming
  const onClickToggleNewcoming = () => {
    setToggleBestsellers(false);
    setTogglePremiere(false);
    setToggleNewcoming(true);
  };

  //toggle Bestsellers
  if (toggleBestsellers) {
    const packshot = (
      <>
        <Table responsive>
          <tr>
            <th> Plan BASIC</th>
          </tr>
          <tbody className="transparentBtn">
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                Niewielkie produkty do około 60x60cm. Zdjęcia na białym tle.
                Możliwość dodania podstawowych cieni. Podstawowa obróbka
                kolorystyczna. Rozdzielczość do 5760x3840 pikseli.
              </td>
              <td className=" float-right">3 zł/szt.</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive>
          <tbody className="transparentBtn">
            <tr>
              <th>Plan PREMIUM</th>
            </tr>
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                Produkty większe od 60x60cm. Zdjęcia na dowolnym kolorze tła.
                Profesjonalna obróbka kolorystyczna. Zaawansowany retusz.
                Wyrównanie produktu. Możliwość dodania cieni. Zdjęcia produktów:
                szklanych, błyszczących, wymagających złożenia. Rozdzielczość do
                5760x3840 pikseli.
              </td>
              <td className=" float-right"> 20 zł/szt.</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
    return (
      <Row className="col-12 hideSetionMediaOne">
        <Col className="col-12">
          <hr />
          <div className="mb-3">
            <Button
              className="transparentBtn ml-0"
              onClick={onClickToggleBestsellers}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Packshot
            </Button>
            <Button
              className="transparentBtn"
              bordless
              onClick={onClickTogglePremiere}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Model portfolio
            </Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}>
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Portret/sesje wizerunkowe
            </Button>
          </div>
        </Col>
        {packshot}
      </Row>
    );
  }

  //toggle Premiere
  if (togglePremiere) {
    const modelPortfolio = (
      <>
        <Table responsive>
          <th>PORTFOLIO PREMIUM</th>
          <tbody className="transparentBtn">
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                do 3 godzin czasu zdjęciowego (razem ze zmianą strojów) liczba
                stylizacji limitowana czasem trwania sesji ustawienia światła
                dostosowane do stylizacji i klimatu zdjęć 20 zdjęć w wersji
                elektronicznej poddanych obróbce graficznej (wywołanie pliku
                RAW)
              </td>
              <td className=" float-right">699 zł/sesja</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive>
          <th>PORTFOLIO</th>
          <tbody className="transparentBtn">
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                do 2 godzin czasu zdjęciowego (razem ze zmianą strojów) liczba
                stylizacji limitowana czasem trwania sesji ustawienia światła
                dostosowane do stylizacji i klimatu zdjęć 12 zdjęć w wersji
                elektronicznej poddanych obróbce graficznej (wywołanie pliku
                RAW)
              </td>
              <td className=" float-right"> 20 zł/szt.</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive>
          <th>MAKIJAŻ I STYLIZACJA</th>
          <tbody className="transparentBtn">
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>Pełny cover maikjażu zarówno damskiego jak i męskiego.</td>
              <td className=" float-right"> Damski: 200 zł</td>
              <td className=" float-right"> Męski: 80 zł</td>
            </tr>
          </tbody>
        </Table>

        <Table responsive>
          <tbody className="transparentBtn">
            <th>POLAROIDY</th>
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                Sesje zdjęciowe dla kandydatek na modelki lub hostessy. W wyniku
                sesji powstają zdjęcia wymagane przez agencje modelek przy
                pierwszej prezentacji kandydatek. Celem polaroidów jest wierne
                pokazanie naturalnego wyglądu modelki: szczegółów twarzy,
                włosów, cery, zębów i całej sylwetki. Do sesji należy przystąpić
                bez makijażu i wymyślnego uczesania. Zdjęcia nie mogą mieć
                charakteru „artystycznego” i nie mogą być retuszowane. Podczas
                około półgodzinnej sesji powstaje od 50 do 70 zdjęć w
                następujących ujęciach: twarz en face, profil lewy, profil prawy
                (3 zdjęcia) twarz en face z delikatnym i dużym uśmiechem (2
                zdjęcia) dwa półprofile (2 zdjęcia) w przypadku długich włosów –
                zdjęcia ze związanymi włosami – en face, profil lewy, profil
                prawy (3 zdjęcia) sylwetka ubrana en face, z profilu, półprofil
                (3 zdjęcia) sylwetka w kostiumie kąpielowym lub bieliźnie en
                face, profil, półprofil, ujęcie z tyłu (4 zdjęcia) znaki
                szczególne, tatuaże (max. 3 zdjęcia) Bezpośrednio po sesji
                modelka otrzymuje od 14 do 20 zdjęć wybranych przez fotografa,
                nagranych na płytę CD i gotowych do wysłania do agencji modelek.
                cena – 150 zł (100 zł – gdy zdjęcia wykonywane są jako dodatek
                do sesji do portfolio)
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
    return (
      <Row className="col-12 hideSetionMediaOne">
        <Col className="col-12">
          <hr />
          <div className="mb-3">
            <Button
              className="transparentBtn ml-0"
              onClick={onClickToggleBestsellers}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Packshot
            </Button>
            <Button
              className="transparentBtn"
              bordless
              onClick={onClickTogglePremiere}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Model portfolio
            </Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}>
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Portret/sesje wizerunkowe
            </Button>
          </div>
        </Col>
        {modelPortfolio}
      </Row>
    );
  }

  //toggle Newcoming
  if (toggleNewcoming) {
    const packshot = (
      <>
        <Table responsive>
          <tr>
            <th>PORTRET/SESJE WIZERUNKOWE</th>
          </tr>
          <tbody className="transparentBtn">
            <tr>
              <td>
                <img src="" width="120px" height="auto" />
              </td>
              <td>
                do 1 godzin czasu zdjęciowego (razem ze zmianą strojów) liczba
                stylizacji limitowana czasem trwania sesji, ustawienia światła
                dostosowane do stylizacji i klimatu zdjęć 4 zdjęcia w wersji
                elektronicznej poddanych obróbce graficznej.
              </td>
              <td className=" float-right">299 zł</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
    return (
      <Row className="col-12 hideSetionMediaOne">
        <Col className="col-12">
          <hr />
          <div className="mb-3">
            <Button
              className="transparentBtn ml-0"
              onClick={onClickToggleBestsellers}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Packshot
            </Button>
            <Button
              className="transparentBtn"
              bordless
              onClick={onClickTogglePremiere}
            >
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Model portfolio
            </Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}>
              <img
                id="promoCode"
                src={promoCode}
                alt="img"
                height="30px"
                width="30px"
              ></img>
              Portret/sesje wizerunkowe
            </Button>
          </div>
        </Col>
        {packshot}
      </Row>
    );
  }
};

Discover.propTypes = {
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  fetchReducer: state.fetchReducer.items
});

export default connect(mapStateToProps, { getItems})(
  Discover
);
