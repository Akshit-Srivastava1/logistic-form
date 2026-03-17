import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import styles from "./App.module.css";

function generateOrderId() {
  return "ORD-" + Math.floor(Math.random() * 100000);
}

export default function App() {
  const [order, setOrder] = useState({
    orderId: generateOrderId(),
    shipmentDate: "",
    deliveryType: "Standard",
    sender: { name: "", address: "", city: "", pincode: "" },
    receiver: { name: "", address: "", city: "", pincode: "" },
    packages: [
      {
        name: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        value: "",
      },
    ],
    fragile: false,
    insurance: false,
  });

  return (
    <div className={styles.container}>
      <Form order={order} setOrder={setOrder} />
      <Preview order={order} />
    </div>
  );
}