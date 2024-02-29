export default function Input({ label, type, id, className, ...props }) {
  return (
    <>
      <label>{label}</label>
      <br />
      <input type={type} id={id} className={className} {...props}></input>
    </>
  );
}
