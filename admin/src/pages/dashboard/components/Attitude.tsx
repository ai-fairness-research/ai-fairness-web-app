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
  Attitude as AttitudeType,
  AttitudeResponse,
  ApiResponse,
} from "../../../services/utilities/types";
import {
  ApiService,
  attitudeService,
} from "../../../services/utilities/provider";
import toast from "react-hot-toast";
import { secondary } from "../../../theme/themeColors";

const Attitude: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [attitude, setAttitudes] = useState<AttitudeType[]>([]);

  const fetchAttitudeData = async () => {
    setIsLoading(true);
    try {
      const res: AttitudeResponse = await attitudeService.getAll();
      console.log(res);
      if (res.status === "200") {
        setAttitudes(res.message);
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
    fetchAttitudeData();
  }, []);

  const editAttitude = async (id: string, index: number) => {
    const attitudeEditService = new ApiService<ApiResponse, AttitudeType>(
      "attitude",
      id
    );

    await attitudeEditService.put(attitude[index]).then((res) => {
      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    });
  };

  const deleteAttitude = async (id: string) => {
    setIsLoading(true);
    try {
      const res: AttitudeResponse = await attitudeService.delete(id);
      console.log(res);
      if (res.status === "200") {
        toast.success("Successfully Deleted");
        setIsLoading(false);
        fetchAttitudeData();
      } else {
        setIsLoading(false);
        fetchAttitudeData();
      }
    } catch (error) {
      console.error("Error fetching survey data:", error);
      setIsLoading(false);
      fetchAttitudeData();
    }
  };

  const handleBiases = (field: string, value: string, index: number) => {
    const updatedBiases = attitude.map((attitude, idx) => {
      if (idx === index) {
        return {
          ...attitude,
          [field]: value,
        };
      }
      return attitude;
    });
    setAttitudes(updatedBiases);
  };

  return isLoading ? (
    <Skeleton width="100%" height="400px" />
  ) : (
    <Container sx={{ py: 2 }}>
      <AddAttitude fetchAttitudeData={fetchAttitudeData} />
      <Typography variant="h5"> Edit Attitude</Typography>
      {attitude.map((attitude, index) => (
        <Box key={attitude._id}>
          <TextField
            value={attitude.question}
            size="small"
            fullWidth
            label="Question"
            sx={{ my: 2 }}
            onChange={(e) => handleBiases("question", e.target.value, index)}
          />
          <Box sx={{ textAlign: "end", mt: 2, mb: 4 }}>
            <Button
              onClick={() => deleteAttitude(attitude._id)}
              variant="contained"
              color="error"
              sx={{ mr: 2, color: secondary.light }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={() => editAttitude(attitude._id, index)}
            >
              Update
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Attitude;

interface AddAttitudeProps {
  fetchAttitudeData: () => void;
}

const AddAttitude: React.FC<AddAttitudeProps> = ({ fetchAttitudeData }) => {
  const [isAddAttitude, setIsAddAttitude] = useState<boolean>(false);

  const [question, setQuestion] = useState("");

  const addContext = async () => {
    const body = {
      question: question,
    };
    await attitudeService
      .post(body)
      .then((res) => {
        if (res.status === "200") {
          toast.success("Attitude Question is added");
        }
      })
      .catch(() => {
        toast.error("Attitude Question is addition failed");
      })
      .finally(() => {
        fetchAttitudeData();
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
              label="Attitude Opinion Question"
              sx={{ my: 2 }}
              onChange={(e) => setQuestion(e.target.value)}
            />
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
