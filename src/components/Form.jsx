import PackageItem from "./PackageItem";
import styles from "./Form.module.css";

export default function Form({ order, setOrder }) {

  const updateField = (field, value) => {
    setOrder({ ...order, [field]: value });
  };

  const updateNested = (type, field, value) => {
    setOrder({
      ...order,
      [type]: {
        ...order[type],
        [field]: value,
      },
    });
  };

  const updatePackage = (index, field, value) => {
    const updated = [...order.packages];
    updated[index][field] = value;
    setOrder({ ...order, packages: updated });
  };

  const addPackage = () => {
    setOrder({
      ...order,
      packages: [
        ...order.packages,
        {
          name: "",
          weight: "",
          length: "",
          width: "",
          height: "",
          value: "",
        },
      ],
    });
  };

  const removePackage = (index) => {
    if (order.packages.length === 1) return;
    const updated = order.packages.filter((_, i) => i !== index);
    setOrder({ ...order, packages: updated });
  };

  return (
    <div className={styles.form}>
      <h2>Order Form</h2>

      <input value={order.orderId} readOnly />

      <input
        type="date"
        onChange={(e) => updateField("shipmentDate", e.target.value)}
      />

      <select onChange={(e) => updateField("deliveryType", e.target.value)}>
        <option>Standard</option>
        <option>Express</option>
      </select>

      <h3>Sender</h3>
      <input placeholder="Name" onChange={(e) => updateNested("sender", "name", e.target.value)} />
      <input placeholder="Address" onChange={(e) => updateNested("sender", "address", e.target.value)} />
      <input placeholder="City" onChange={(e) => updateNested("sender", "city", e.target.value)} />
      <input placeholder="Pincode" onChange={(e) => updateNested("sender", "pincode", e.target.value)} />

      <h3>Receiver</h3>
      <input placeholder="Name" onChange={(e) => updateNested("receiver", "name", e.target.value)} />
      <input placeholder="Address" onChange={(e) => updateNested("receiver", "address", e.target.value)} />
      <input placeholder="City" onChange={(e) => updateNested("receiver", "city", e.target.value)} />
      <input placeholder="Pincode" onChange={(e) => updateNested("receiver", "pincode", e.target.value)} />

      <h3>Packages</h3>
      {order.packages.map((pkg, i) => (
        <PackageItem
          key={i}
          data={pkg}
          index={i}
          updatePackage={updatePackage}
          removePackage={removePackage}
        />
      ))}

      <button onClick={addPackage}>Add Package</button>

      {/* Checkboxes */}
      <div className={styles.checkboxGroup}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            onChange={(e) => updateField("fragile", e.target.checked)}
          />
          <span>Fragile</span>
        </label>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            onChange={(e) => updateField("insurance", e.target.checked)}
          />
          <span>Insurance</span>
        </label>
      </div>

      {/* ✅ PRINT BUTTON */}
      <button
        className={styles.submitBtn}
        onClick={() => window.print()}
      >
        Generate Shipment
      </button>

    </div>
  );
}