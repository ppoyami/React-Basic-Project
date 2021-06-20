import React, { useState } from 'react';
import Item from './Item';
import styled from 'styled-components';

const Styledul = styled.ul`
  list-style: none;
`;

export default function Menu({ list }) {
  const [orders, setOrders] = useState([]);
  const resetMenuButton = list[list.length - 1];

  const isSelected = menu => {
    return orders.indexOf(menu) !== -1;
  };

  const clickMenu = id => {
    const menu = list[id];
    // 선택하지 않음 클릭 시 초기화
    if (menu === resetMenuButton) {
      setOrders(() => []);
    }
    // 이미 있다면 삭제
    if (orders.includes(menu)) {
      setOrders(orders.filter(order => order !== menu));
      return;
    }
    // reset 버튼 말고 다른 것을 클릭했을 때
    if (orders.includes(resetMenuButton)) {
      setOrders(orders.filter(order => order !== resetMenuButton));
    }
    // 기존 목록에 선택한 메뉴를 추가
    setOrders(orders => [...orders, menu]);
  };

  // const newState = Object.assign({}, {orders: [...]}, {orders: [...orders, menu] })

  return (
    <Styledul>
      {list.map((menu, id) => (
        <Item
          key={id}
          item={menu}
          selected={isSelected(menu)}
          onClick={() => clickMenu(id)}
        />
      ))}
    </Styledul>
  );
}
