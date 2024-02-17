import React, { useEffect, useState } from "react";
import { biasService } from "../../../services/utilities/provider";
import { Bias } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { Skeleton } from "@mui/material";

const Bias = () => {
  const [bias, setBias] = useState<Bias[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchBias = async () => {
    const response = await biasService?.getAll();
    setBias(response.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBias();
  }, []);

  return isLoading ? (
    <>
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
    </>
  ) : (
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
