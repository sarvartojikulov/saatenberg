import classNames from "classnames";
import React from "react";
import useDeviceDetect from "../utils/useDetectDevice";

const Triangle: React.FC<{ direction: string; color?: string }> = ({
  direction,
  color,
}) => {
  const { tablet, desktop } = useDeviceDetect();
  return (
    <div
      className={classNames(
        "transform",
        { "rotate-90": direction === "right" },
        { "-rotate-90": direction === "left" }
      )}
      style={{
        width: 0,
        height: 0,
        border: `${desktop ? "19" : tablet ? "15" : "14"}px solid transparent`,
        borderTop: 0,
        borderBottom: `${desktop ? "22" : tablet ? "18" : "16"}px solid ${
          color ? color : "black"
        }`,
      }}
    ></div>
  );
};

export default Triangle;
