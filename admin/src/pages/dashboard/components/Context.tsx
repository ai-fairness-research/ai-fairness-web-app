// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Skeleton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import {
//   ApiResponse,
//   ContextResponse,
//   Context as ContextType,
// } from "../../../services/utilities/types";
// import {
//   ApiService,
//   contextService,
// } from "../../../services/utilities/provider";
// import toast from "react-hot-toast";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { styled } from "@mui/material/styles";
// import { secondary } from "../../../theme/themeColors";
// import { BACKEND_URL } from "../../../services/api";

// const Context: React.FC = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [context, setContext] = useState<ContextType[]>([]);

//   const fetchContext = async () => {
//     setIsLoading(true);
//     try {
//       const res: ContextResponse = await contextService.getAll();
//       console.log(res);
//       if (res.status === "200") {
//         setContext(res.message);
//         setIsLoading(false);
//       } else {
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error("Error fetching survey data:", error);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContext();
//   }, []);

//   const editContext = async (id: string, index: number) => {
//     const contextEditService = new ApiService<ApiResponse, ContextType>(
//       "context",
//       id
//     );

//     await contextEditService.put(context[index]).then((res) => {
//       if (res.status === "200") {
//         toast.success(res.message);
//       } else {
//         toast.success(res.message);
//       }
//     });
//   };

//   const handleContext = (
//     field: string,
//     value: string,
//     index: number,
//     optionId: number
//   ) => {
//     const updatedBiases = context.map((contex, idx) => {
//       if (idx === index) {
//         if (field === "options" || field === "reasoning") {
//           const updatedOptions = [...contex[field]];
//           updatedOptions[optionId] = value;
//           return {
//             ...contex,
//             [field]: updatedOptions,
//           };
//         } else {
//           return {
//             ...contex,
//             [field]: value,
//           };
//         }
//       }
//       return contex;
//     });
//     setContext(updatedBiases);
//   };

//   const deleteContext = async (id: string) => {
//     setIsLoading(true);
//     try {
//       const res: ContextResponse = await contextService.delete(id);
//       console.log(res);
//       if (res.status === "200") {
//         toast.success("Successfully Deleted");
//         setIsLoading(false);
//         fetchContext();
//       } else {
//         setIsLoading(false);
//         fetchContext();
//       }
//     } catch (error) {
//       console.error("Error deleting context", error);
//       setIsLoading(false);
//       fetchContext();
//     }
//   };

//   return isLoading ? (
//     <Skeleton width="100%" height="400px" />
//   ) : (
//     <Container sx={{ py: 2 }}>
//       <AddContext fetchContext={fetchContext} />
//       <Typography variant="h5">Edit Context</Typography>
//       {context.map((item, index) => (
//         <Box key={item._id}>
//           <img
//             src={`${BACKEND_URL}/context/image/${item._id}`}
//             style={{
//               objectFit: "cover",
//               height: 200,
//               width: "100%",
//               backgroundPosition: "center",
//             }}
//             loading="lazy"
//           />
//           <TextField
//             value={item.context}
//             size="small"
//             fullWidth
//             label="Context"
//             sx={{ my: 2 }}
//             onChange={(e) => handleContext("context", e.target.value, index, 0)}
//           />
//           <TextField
//             value={item.title}
//             size="small"
//             fullWidth
//             label="Title"
//             sx={{ my: 2 }}
//             onChange={(e) => handleContext("title", e.target.value, index, 0)}
//           />
//           <TextField
//             value={item.problem}
//             size="small"
//             fullWidth
//             label="Problem"
//             sx={{ my: 2 }}
//             onChange={(e) => handleContext("problem", e.target.value, index, 0)}
//           />
//           <TextField
//             value={item.example}
//             size="small"
//             fullWidth
//             label="Example"
//             sx={{ my: 2 }}
//             onChange={(e) => handleContext("example", e.target.value, index, 0)}
//           />
//           <Typography sx={{ fontWeight: 500, mb: 2 }}>Datasets</Typography>
//           <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
//             {item.options.map((option, idx: number) => (
//               <TextField
//                 value={option}
//                 size="small"
//                 key={option}
//                 label={`Dataset ${idx + 1}`}
//                 sx={{ width: "50%" }}
//                 onChange={(e) =>
//                   handleContext("options", e.target.value, index, idx)
//                 }
//               />
//             ))}
//           </Box>
//           <Typography sx={{ fontWeight: 500, mb: 2, mt: 2 }}>Model</Typography>
//           <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
//             {item.reasoning.map((option, idx: number) => (
//               <TextField
//                 value={option}
//                 size="small"
//                 key={option}
//                 label={`Model ${idx + 1}`}
//                 sx={{ width: "50%" }}
//                 onChange={(e) =>
//                   handleContext("reasoning", e.target.value, index, idx)
//                 }
//               />
//             ))}
//           </Box>
//           <Box sx={{ textAlign: "end", mt: 4 }}>
//             <Button
//               onClick={() => deleteContext(item._id)}
//               variant="contained"
//               color="error"
//               sx={{ mr: 2, color: secondary.light }}
//             >
//               Delete
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => editContext(item._id, index)}
//             >
//               Update
//             </Button>
//           </Box>
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default Context;

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Skeleton,
  TextField,
  Typography,
  IconButton,
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
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
// import { secondary } from "../../../theme/themeColors";
import { BACKEND_URL } from "../../../services/api";
import { secondary } from "../../../theme/themeColors";

type ContextKeys =
  | "context"
  | "options"
  | "reasoning"
  | "title"
  | "problem"
  | "example"; // keys allowed in the ContextType

const Context: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<ContextType[]>([]);

  const fetchContext = async () => {
    setIsLoading(true);
    try {
      const res: ContextResponse = await contextService.getAll();
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
        toast.error(res.message);
      }
    });
  };

  const handleContext = (
    field: ContextKeys, // restrict field to allowed keys
    value: string,
    index: number,
    optionId?: number
  ) => {
    const updatedContext = context.map((contex, idx) => {
      if (idx === index) {
        if (field === "options" || field === "reasoning") {
          const updatedOptions = [...contex[field]]; // safely access the fields
          if (optionId !== undefined) updatedOptions[optionId] = value;
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
    setContext(updatedContext);
  };

  const deleteContext = async (id: string) => {
    setIsLoading(true);
    try {
      const res: ContextResponse = await contextService.delete(id);
      if (res.status === "200") {
        toast.success("Successfully Deleted");
        fetchContext();
      }
    } catch (error) {
      console.error("Error deleting context", error);
      fetchContext();
    } finally {
      setIsLoading(false);
    }
  };

  const addNewItem = (index: number, field: ContextKeys) => {
    const updatedContext = context.map((contex, idx) => {
      if (idx === index) {
        return {
          ...contex,
          [field]: [...contex[field], ""],
        };
      }
      return contex;
    });
    setContext(updatedContext);
  };

  const deleteItem = (index: number, field: ContextKeys, itemIdx: number) => {
    const updatedContext = context.map((contex, idx) => {
      if (idx === index) {
        const updatedField = [...contex[field]];
        updatedField.splice(itemIdx, 1);
        return {
          ...contex,
          [field]: updatedField,
        };
      }
      return contex;
    });
    setContext(updatedContext);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // const formData = new FormData();
      // formData.append("file", file);

      // Call backend to upload image
      contextService
        .uploadImage(id, file)
        .then(() => toast.success("Image uploaded successfully"))
        .catch(() => toast.error("Image upload failed"));
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
          <img
            src={`${BACKEND_URL}/context/image/${item._id}`}
            style={{
              objectFit: "cover",
              height: 200,
              width: "100%",
            }}
            loading="lazy"
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Replace Image
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, item._id)}
              style={{ margin: "10px 0" }}
            />
          </Button>
          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, item._id)}
            style={{ margin: "10px 0" }}
          /> */}
          <TextField
            value={item.context}
            size="small"
            fullWidth
            label="Context"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("context", e.target.value, index)}
          />

          <TextField
            value={item.title}
            size="small"
            fullWidth
            label="Title"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("title", e.target.value, index)}
          />
          <TextField
            value={item.problem}
            size="small"
            fullWidth
            label="Problem"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("problem", e.target.value, index)}
          />
          <TextField
            value={item.example}
            size="small"
            fullWidth
            label="Example"
            sx={{ my: 2 }}
            onChange={(e) => handleContext("example", e.target.value, index)}
          />
          <Typography sx={{ fontWeight: 500, mb: 2 }}>Datasets</Typography>
          {item.options.map((option, idx: number) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <TextField
                value={option}
                size="small"
                label={`Dataset ${idx + 1}`}
                sx={{ width: "50%" }}
                onChange={(e) =>
                  handleContext("options", e.target.value, index, idx)
                }
              />
              <IconButton
                color="error"
                onClick={() => deleteItem(index, "options", idx)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={() => addNewItem(index, "options")}
            startIcon={<AddIcon />}
            variant="outlined"
            size="small"
          >
            Add Dataset
          </Button>
          <Typography sx={{ fontWeight: 500, mb: 2, mt: 2 }}>Models</Typography>
          {item.reasoning.map((model, idx: number) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <TextField
                value={model}
                size="small"
                label={`Model ${idx + 1}`}
                sx={{ width: "50%" }}
                onChange={(e) =>
                  handleContext("reasoning", e.target.value, index, idx)
                }
              />
              <IconButton
                color="error"
                onClick={() => deleteItem(index, "reasoning", idx)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={() => addNewItem(index, "reasoning")}
            startIcon={<AddIcon />}
            variant="outlined"
            size="small"
          >
            Add Model
          </Button>
          <Box sx={{ textAlign: "end", mt: 4, mb: 2 }}>
            <Button
              onClick={() => deleteContext(item._id)}
              variant="contained"
              color="error"
              sx={{ mr: 2, color: secondary.main }}
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
            <Typography sx={{ fontWeight: 500, mb: 2 }}>Datasets</Typography>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {context.options.map((option, idx: number) => (
                <TextField
                  value={option}
                  size="small"
                  key={idx}
                  label={`Dataset ${idx + 1}`}
                  sx={{ width: "50%", mb: 2 }}
                  onChange={(e) =>
                    handleContext("options", e.target.value, idx)
                  }
                />
              ))}
            </Box>
            <Typography sx={{ fontWeight: 500, mb: 2, mt: 2 }}>
              Models
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {context.reasoning.map((reason, idx: number) => (
                <TextField
                  value={reason}
                  size="small"
                  key={idx}
                  label={`Model ${idx + 1}`}
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
