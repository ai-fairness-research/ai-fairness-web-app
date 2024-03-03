import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import {
  Bias as BiasType,
  BiasResponse,
  ApiResponse,
} from "../../../services/utilities/types";
import { ApiService, biasService } from "../../../services/utilities/provider";
import toast from "react-hot-toast";

const Bias: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [biases, setBiases] = useState<BiasType[]>([]);

  const fetchSurveyData = async () => {
    setIsLoading(true);
    try {
      const res: BiasResponse = await biasService.getAll();
      console.log(res);
      if (res.status === "200") {
        setBiases(res.message);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching survey data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSurveyData();
  }, []);

  const editBias = async (id: string, index: number) => {
    const biasEditService = new ApiService<ApiResponse, BiasType>("bias", id);

    await biasEditService.put(biases[index]).then((res) => {
      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    });
  };

  const handleBiases = (
    field: string,
    value: string,
    index: number,
    optionId: number
  ) => {
    const updatedBiases = biases.map((bias, idx) => {
      if (idx === index) {
        if (field === "options") {
          const updatedOptions = [...bias.options];
          updatedOptions[optionId] = value;
          return {
            ...bias,
            options: updatedOptions,
          };
        } else {
          return {
            ...bias,
            [field]: value,
          };
        }
      }
      return bias;
    });
    setBiases(updatedBiases);
  };

  return isLoading ? (
    <Skeleton width="100%" height="400px" />
  ) : (
    <Container sx={{ py: 2 }}>
      <Typography>Bias</Typography>
      {biases.map((bias, index) => (
        <Box key={bias._id}>
          <TextField
            value={bias.question}
            size="small"
            fullWidth
            label="Question"
            sx={{ my: 2 }}
            onChange={(e) => handleBiases("question", e.target.value, index, 0)}
          />
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {bias.options.map((option, idx: number) => (
              <TextField
                value={option}
                size="small"
                key={option}
                label={`Option ${idx + 1}`}
                sx={{ width: "50%" }}
                onChange={(e) =>
                  handleBiases("options", e.target.value, index, idx)
                }
              />
            ))}
          </Box>
          <Box sx={{ textAlign: "end", mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => editBias(bias._id, index)}
            >
              Update
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Bias;
