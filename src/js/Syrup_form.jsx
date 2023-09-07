import React from 'react';

export const SyrupForm = (props) => {
    const options = [
        {value: "Без сиропа", text: "Без сиропа"},
        {value: "Ваниль", text: "Ваниль"},
        {value: "Карамель", text: "Карамель"},
        {value: "Миндаль", text: "Миндаль"},
        {value: "Шокол.печенье", text: "Шокол.печенье"},
        {value: "Кокос", text: "Кокос"},
        {value: "Черн.маффин", text: "Черн.маффин"},
        {value: "Лесн.орех", text: "Лесн.орех"},
        {value: "Солен.карамель", text: "Солен.карамель"},
        {value: "Клубника", text: "Клубника"},
        {value: "Мята", text: "Мята"},
        {value: "Банан", text: "Банан"},
        {value: "Айриш", text: "Айриш"},
        {value: "Лаванда", text: "Лаванда"}]
    const select_click = (option) => {
        if (option.target.value !== "Без сиропа") props.onChange(20)
        else props.onChange(0)
        props.value(option.target.value);
    }

    if (props.buy_state === true)
    return (
        <div>
            <select className="syrup_form" onChange={select_click}>
                {options.map(item => {
                    return (<option key={item.value} value={item.value}>{item.text}</option>);
                })}
            </select>
        </div>
    )
    else return (<div>
        <select  disabled className="syrup_form" onChange={select_click}>
            {options.map(item => {
                return (<option key={item.value} value={item.value}>{item.text}</option>);
            })}
        </select>
    </div>)


};

export default SyrupForm;