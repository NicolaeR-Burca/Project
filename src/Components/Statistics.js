import Chart from "./Chart";

export default function Statistics() {
  return (
    <div className="container">
      <h1 className="header">Your Statistics</h1>
      <Chart legendPosition="bottom" />
    </div>
  );
}
