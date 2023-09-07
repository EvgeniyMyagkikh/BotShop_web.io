import React, {useState} from 'react';

const Size_Btns = (props) => {

    const [state, setState] = useState({
        activeObjects: null,
        objects: [{id: "S"}, {id: "M"}, {id: "L"}]
    });

    function toggle_active(id, index) {
        if (props.buy_state === true) {
            if (state.objects[index] !== state.activeObjects) {
                setState({...state, activeObjects: state.objects[index]});
                props.size(id)
                switch (id) {
                    case "S":
                        props.value(props.data.data.S)
                        break
                    case "M":
                        props.value(props.data.data.M)
                        break
                    case "L":
                        props.value(props.data.data.L)
                        break
                    default :
                        props.value(0)
                }
            } else {
                setState({...state, activeObjects: null})
                props.value(0)
            }
        }
    }

    function toggle_classname(btn) {
        return (state.objects[btn] === state.activeObjects) ? "button_size active" : "button_size";
    }

    return (
        <div className="buttons_size">
            {state.objects.map((elements, index) => (
                <div key={index} className={toggle_classname(index)} onClick={() => {
                    toggle_active(elements.id, index)
                }}>
                    <div className="btn_size_text">{elements.id}</div>
                </div>))}
        </div>
    )
};
export default Size_Btns;