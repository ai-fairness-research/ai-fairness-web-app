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
  BiasPayload,
} from "../../../services/utilities/types";
import { ApiService, biasService } from "../../../services/utilities/provider";
import toast from "react-hot-toast";
import { secondary } from "../../../theme/themeColors";

const Bias: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [biases, setBiases] = useState<BiasType[]>([]);

  const fetchBias = async () => {
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
    fetchBias();
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

  const deleteBias = async (id: string) => {
    setIsLoading(true);
    try {
      const res: BiasResponse = await biasService.delete(id);
      console.log(res);
      if (res.status === "200") {
        toast.success("Successfully Deleted");
        setIsLoading(false);
        fetchBias();
      } else {
        setIsLoading(false);
        fetchBias();
      }
    } catch (error) {
      console.error("Error deleting bias", error);
      setIsLoading(false);
      fetchBias();
    }
  };

  return isLoading ? (
    <Skeleton width="100%" height="400px" />
  ) : (
    <Container sx={{ py: 2 }}>
      <AddBias fetchBias={fetchBias} />
      <Typography variant="h5"> Edit Bias</Typography>
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
              onClick={() => deleteBias(bias._id)}
              variant="contained"
              color="error"
              sx={{ mr: 2, color: secondary.light }}
            >
              Delete
            </Button>
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

interface AddBiasProps {
  fetchBias: () => void;
}

const AddBias: React.FC<AddBiasProps> = ({ fetchBias }) => {
  const [isAddAttitude, setIsAddAttitude] = useState<boolean>(false);

  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", "", "", "", ""]);

  const addContext = async () => {
    const body: BiasPayload = {
      question: question,
      options: options,
    };
    await biasService
      .post(body)
      .then((res) => {
        if (res.status === "200") {
          toast.success("Bias Question is added");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Bias Question is addition failed");
      })
      .finally(() => {
        fetchBias();
      });
  };

  return (
    <Box>
      {!isAddAttitude ? (
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button variant="contained" onClick={() => setIsAddAttitude(true)}>
            Create New Question
          </Button>
        </Box>
      ) : (
        <Box sx={{ my: 2 }}>
          <Typography variant="h5">Add Question</Typography>
          <Box>
            <TextField
              value={question}
              size="small"
              fullWidth
              label="Bias Question"
              sx={{ my: 2 }}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {options.map((option, idx: number) => (
                <TextField
                  value={option}
                  size="small"
                  key={idx}
                  label={`Option ${idx + 1}`}
                  sx={{ width: "50%" }}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[idx] = e.target.value;
                    setOptions(newOptions);
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button variant="outlined" onClick={() => setIsAddAttitude(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={addContext}>
              Add Question
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
