import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';

// 1️⃣ Định nghĩa reducer
function lightReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { isLightOn: !state.isLightOn };
    default:
      return state;
  }
}

// 2️⃣ Component LightSwitch
export default function LightSwitch() {
  // useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(lightReducer, { isLightOn: false });

  // 3️⃣ Style nút bấm
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px'
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Công Tắc Đèn</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Đèn hiện đang: {state.isLightOn ? 'Bật' : 'Tắt'}
      </p>
      <Button
        onClick={() => dispatch({ type: 'TOGGLE' })}   // 4️⃣ Gửi action TOGGLE
        style={{
          ...buttonStyle,
          background: state.isLightOn ? 'red' : 'green',
          color: 'white'
        }}
      >
        {state.isLightOn ? 'Tắt Đèn' : 'Bật Đèn'}
      </Button>
    </div>
  );
}
