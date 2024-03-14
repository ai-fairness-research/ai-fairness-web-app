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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { secondary } from "../../../theme/themeColors";

const Context: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<ContextType[]>([]);

  const fetchContext = async () => {
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
    fetchContext();
  }, []);

  const editContext = async (id: string, index: number) => {
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
    const updatedBiases = context.map((contex, idx) => {
      if (idx === index) {
        if (field === "options" || field === "reasoning") {
          const updatedOptions = [...contex[field]];
          updatedOptions[optionId] = value;
          return {
            ...contex,
            [field]: updatedOptions,
          };
        } else {
          return {
            ...contex,
            [field]: value,
          };
        }
      }
      return contex;
    });
    setContext(updatedBiases);
  };

  const deleteContext = async (id: string) => {
    setIsLoading(true);
    try {
      const res: ContextResponse = await contextService.delete(id);
      console.log(res);
      if (res.status === "200") {
        toast.success("Successfully Deleted");
        setIsLoading(false);
        fetchContext();
      } else {
        setIsLoading(false);
        fetchContext();
      }
    } catch (error) {
      console.error("Error deleting context", error);
      setIsLoading(false);
      fetchContext();
    }
  };

  return isLoading ? (
    <Skeleton width="100%" height="400px" />
  ) : (
    <Container sx={{ py: 2 }}>
      <AddContext fetchContext={fetchContext} />
      <Typography variant="h5">Edit Context</Typography>
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
                  handleContext("options", e.target.value, index, idx)
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
              onClick={() => deleteContext(item._id)}
              variant="contained"
              color="error"
              sx={{ mr: 2, color: secondary.light }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={() => editContext(item._id, index)}
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

interface AddContextProps {
  fetchContext: () => void;
}

const AddContext: React.FC<AddContextProps> = ({ fetchContext }) => {
  const [isAddContext, setIsAddContext] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [context, setContext] = useState({
    context: "",
    problem: "",
    options: ["", "", "", ""],
    reasoning: ["", "", "", ""],
  });

  const handleContext = (field: string, value: string, index?: number) => {
    if (index !== undefined && (field === "options" || field === "reasoning")) {
      const updatedOptions = [...context[field]];
      updatedOptions[index] = value;
      setContext({ ...context, [field]: updatedOptions });
    } else {
      setContext({ ...context, [field]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const addContext = async () => {
    await contextService
      .post(context)
      .then((res) => {
        if (res.status === "200") {
          toast.success("Context is added");
        }
      })
      .catch(() => {
        toast.error("Context deletion failed");
      })
      .finally(() => {
        fetchContext();
      });
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box>
      {!isAddContext ? (
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button variant="contained" onClick={() => setIsAddContext(true)}>
            Create New Context
          </Button>
        </Box>
      ) : (
        <Box sx={{ my: 2 }}>
          <Typography variant="h5">Add Context</Typography>
          <Box>
            <Box>
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="file"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            <TextField
              value={context.context}
              size="small"
              fullWidth
              label="Context"
              sx={{ my: 2 }}
              onChange={(e) => handleContext("context", e.target.value)}
            />
            <TextField
              value={context.problem}
              size="small"
              fullWidth
              label="Problem"
              sx={{ my: 2 }}
              onChange={(e) => handleContext("problem", e.target.value)}
            />
            <Typography sx={{ fontWeight: 500, mb: 2 }}>Options</Typography>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {context.options.map((option, idx: number) => (
                <TextField
                  value={option}
                  size="small"
                  key={idx}
                  label={`Option ${idx + 1}`}
                  sx={{ width: "50%" }}
                  onChange={(e) =>
                    handleContext("options", e.target.value, idx)
                  }
                />
              ))}
            </Box>
            <Typography sx={{ fontWeight: 500, mb: 2, mt: 2 }}>
              Reasoning
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {context.reasoning.map((reason, idx: number) => (
                <TextField
                  value={reason}
                  size="small"
                  key={idx}
                  label={`Reasoning ${idx + 1}`}
                  sx={{ width: "50%" }}
                  onChange={(e) =>
                    handleContext("reasoning", e.target.value, idx)
                  }
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
            <Button variant="outlined" onClick={() => setIsAddContext(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={addContext}>
              Add Context
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
