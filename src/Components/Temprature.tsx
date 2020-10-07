import React from "react";

interface Props {
  scale: string;
  temp: string;
  changedTemp: (a: string, b: string) => void;
}
const temperature: React.FunctionComponent<Props> = (props) => {
  let heading: string = "";

  if (props.scale === "c") heading = "Celsius";
  else heading = "klgjfg";

  return (
    <div className="ml-4">
      <p className="inline-block font-medium">{heading} :</p>
      <input
        type="text"
        className="ml-2 bg-red-200"
        value={props.temp}
        onChange={(e) => {
          const newVal = e.target.value;
          const curScale = heading === "Celsius" ? "c" : "f";
          return props.changedTemp(newVal, curScale);
        }}
      />
    </div>
  );
};
export default React.memo(temperature);
