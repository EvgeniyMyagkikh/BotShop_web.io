import './css/index.css';
import React from "react";
import Cards from "./js/Cards";
import Header from "./js/Header"
sessionStorage.clear();

const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#CBC5BC";

tg.onEvent("mainButtonClicked", function () {
  tg.sendData(sessionStorage);
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Капучино",
          img: require(`./img/cappucino.jpg`),
          S: 110,
          M: 150,
          L: 170,
        },
        {
          id: 2,
          title: "Латте",
          img: require(`./img/latte.jpg`),
          S: 110,
          M: 150,
          L: 170
        },
        {
          id: 3,
          title: "Раф",
          img: require(`./img/raf.jpg`),
          S: 110,
          M: 170,
          L: 210
        },
        {
          id: 4,
          title: "Американо",
          img: require(`./img/americano.jpg`),
          S: 110,
          M: 170,
          L: 210
        }
      ]
    }
  }

  render() {
    return (
        <div className='Cards'>
          <Header/>
          <Cards cards={this.state.items}/>
        </div>)
  }

}
export default App;
