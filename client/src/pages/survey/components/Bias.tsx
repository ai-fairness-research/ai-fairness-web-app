import React, { useEffect, useState } from "react";
import { biasService } from "../../../services/utilities/provider";
import { Bias } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";

const Bias = () => {
  const [bias, setBias] = useState<Bias[]>([]);
  const fetchBias = async () => {
    const response = await biasService?.getAll();
    setBias(response.message);
  };

  useEffect(() => {
    fetchBias();
  }, []);

  return (
    <>
      {bias.map((itm) => (
        <CommonSwitchComponent
          question={itm.question}
          choices={itm.options}
          key={itm._id}
        />
      ))}
    </>
  );
};

export default Bias;
