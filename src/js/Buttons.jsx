import React, {useState} from 'react';
import Total_amount from "./Total_amount";
import SyrupForm from "./Syrup_form";
import Size_Btns from "./Size_Btns";
import Buy from "./Buy";

const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#CBC5BC";

export const Buttons = (props) => {

    const [Syrup_value, setSyrup_value] = useState(0);
    const select_click = (Syrup_value) => setSyrup_value(Syrup_value)

    const [Size_value, setSize_value] = useState(0);
    const btn_size_click = (Size_value) =>  setSize_value(Size_value)

    const [Size_state, SetSize_state] = useState(0)
    const settingSize = (Size_state) => SetSize_state(Size_state)

    const [Syrup_name, SetSyrup_name] = useState("Без сиропа")
    const setting_syrup = (Syrup_name) => SetSyrup_name(Syrup_name)

    const [buy_isActive, set_buy_isActive] = useState(true);
    const btn_buy_click = (buy_isActive) => {
        set_buy_isActive(buy_isActive);
        const card_info =  `${props.data.title} ${Size_state} ${Syrup_name}`;
        if (!buy_isActive) {
                tg.MainButton.setText("Перейти к оплате");
                tg.MainButton.show();
            sessionStorage.setItem(props.data.id, card_info)}
    }
    return (
        <>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Total_amount total={Syrup_value + Size_value}/>
            <div className="syrup_container">
                <SyrupForm onChange={select_click} value = {setting_syrup} buy_state={buy_isActive}/>
            </div>
            <div className="buttons">
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Size_Btns data={props} value={btn_size_click} size ={settingSize}  buy_state={buy_isActive}/>
            </div>
            <Buy isActive={btn_buy_click} size_is_pressed={Size_value}/>
        </>
    );

};

export default Buttons;