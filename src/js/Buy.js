import React, {useState} from 'react';

const Buy = (props) => {

    const [state, setState] = useState(false);

    function toggle_active() {
        if (props.size_is_pressed !== 0) {
            setState(state => !state)
            props.isActive(state)
        }
    }

    let toggle_classname = state ? "active" : null;

    return (
        <div className={`button_buy ${toggle_classname}`} onClick={toggle_active}>
            <div className="btn_buy_text">Добавить</div>
        </div>
    );
};

export default Buy;