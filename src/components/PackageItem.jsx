import styles from "./PackageItem.module.css";

export default function PackageItem({ data, index, updatePackage, removePackage }) {
  return (
    <div className={styles.card}>
      <input placeholder="Name" onChange={(e) => updatePackage(index, "name", e.target.value)} />
      <input placeholder="Weight" onChange={(e) => updatePackage(index, "weight", e.target.value)} />
      <input placeholder="Length" onChange={(e) => updatePackage(index, "length", e.target.value)} />
      <input placeholder="Width" onChange={(e) => updatePackage(index, "width", e.target.value)} />
      <input placeholder="Height" onChange={(e) => updatePackage(index, "height", e.target.value)} />
      <input placeholder="Value" onChange={(e) => updatePackage(index, "value", e.target.value)} />

      <button onClick={() => removePackage(index)}>Remove</button>
    </div>
  );
}