import "../styles/Button.scss";
import { useState } from "react";

export default function SidebarButton() {
  const [modal, setModal] = useState(false);
  function openInputModal() {
    setModal(!modal);
  }
  return <button onClick={openInputModal}>+ Add New Plan</button>;
}
