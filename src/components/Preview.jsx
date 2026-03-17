import styles from "./Preview.module.css";

export default function Preview({ order }) {
  const totalWeight = order.packages.reduce((sum, p) => sum + Number(p.weight || 0), 0);
  const totalValue = order.packages.reduce((sum, p) => sum + Number(p.value || 0), 0);

  return (
    <div className={styles.preview}>
      <div className={styles.card}>

        <h1 className={styles.company}>LogiTrack Pvt Ltd</h1>
        <h2 className={styles.title}>Shipment Invoice</h2>

        <hr />

        <div className={styles.header}>
          <div>
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Date:</strong> {order.shipmentDate || "Not selected"}</p>
          </div>

          <div className={`${styles.badge} ${
            order.deliveryType === "Express" ? styles.express : styles.standard
          }`}>
            {order.deliveryType}
          </div>
        </div>

        <div className={styles.section}>
          <strong>From:</strong>
          <p>{order.sender.name || "-"}, {order.sender.city || "-"}</p>
        </div>

        <div className={styles.section}>
          <strong>To:</strong>
          <p>{order.receiver.name || "-"}, {order.receiver.city || "-"}</p>
        </div>

        <div className={styles.section}>
          <strong>Packages</strong>
          {order.packages.map((p, i) => (
            <div key={i} className={styles.package}>
              {p.name || "Unnamed"} — {p.weight || 0}kg — ₹{p.value || 0}
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <p>Total Packages: {order.packages.length}</p>
          <p>Total Weight: {totalWeight} kg</p>
          <p>Total Value: ₹{totalValue}</p>

          {order.fragile && <p>⚠ Fragile</p>}
          {order.insurance && <p>✔ Insured</p>}
        </div>

      </div>
    </div>
  );
}