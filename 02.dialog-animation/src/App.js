import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  return (
    <AppLayout>
      <Button onClick={onClick}>submit</Button>
      <Dialog dialog={dialog} setDialog={setDialog} />
    </AppLayout>
  );
}
