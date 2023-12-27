import "./styles.scss";

type Props = {
  title: string;
  numero: string;
};

export default function Count(props: Props) {
  return (
    <>
      <div className="couter">
        <p className="counter-number"> {props.numero}</p>
        <h3 className="counter-text">{props.title}</h3>
      </div>
    </>
  );
}
