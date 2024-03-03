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
  ApiResponse,
  ContextResponse,
  Context as ContextType,
} from "../../../services/utilities/types";
import {
  ApiService,
  contextService,
} from "../../../services/utilities/provider";
import toast from "react-hot-toast";

const Context: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<ContextType[]>([]);

  const fetchSurveyData = async () => {
    setIsLoading(true);
    try {
      const res: ContextResponse = await contextService.getAll();
      console.log(res);
      if (res.status === "200") {
        setContext(res.message);
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
    const contextEditService = new ApiService<ApiResponse, ContextType>(
      "context",
      id
    );

    await contextEditService.put(context[index]).then((res) => {
      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    });
  };

  const handleContext = (
    field: string,
    value: string,
    index: number,
    optionId: number
  ) => {
    const updatedBiases = context.map((bias, idx) => {
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
    setContext(updatedBiases);
  };

  return isLoading ? (
    <Skeleton width="100%" height="400px" />
  ) : (
    <Container sx={{ py: 2 }}>
      <Typography>Context</Typography>
      {context.map((item, index) => (
        <Box key={item._id}>
          <TextField
            value={item.context}
            size="small"
            fullWidth
            label="Context"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("context", e.target.value, index, 0)}
          />
          <TextField
            value={item.problem}
            size="small"
            fullWidth
            label="Problem"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("problem", e.target.value, index, 0)}
          />
          <Typography sx={{ fontWeight: 500, mb: 2 }}>Options</Typography>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {item.options.map((option, idx: number) => (
              <TextField
                value={option}
                size="small"
                key={option}
                label={`Option ${idx + 1}`}
                sx={{ width: "50%" }}
                onChange={(e) =>
                  handleContext("protected", e.target.value, index, idx)
                }
              />
            ))}
          </Box>
          <Typography sx={{ fontWeight: 500, mb: 2, mt: 2 }}>
            Reasoning
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {item.reasoning.map((option, idx: number) => (
              <TextField
                value={option}
                size="small"
                key={option}
                label={`Reasoning ${idx + 1}`}
                sx={{ width: "50%" }}
                onChange={(e) =>
                  handleContext("reasoning", e.target.value, index, idx)
                }
              />
            ))}
          </Box>
          <Box sx={{ textAlign: "end", mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => editBias(item._id, index)}
            >
              Update
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Context;
