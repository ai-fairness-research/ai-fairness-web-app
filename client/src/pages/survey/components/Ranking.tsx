import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { error, secondary, text } from "../../../theme/themeColors";
// import { RANKING_OPTIONS } from "../../../constants";
import { UserAnswer } from "./Audit";
import { IRankingOptions } from "../../../services/utilities/types";
import { RANKING_OPTIONS } from "../../../constants";

interface RankingFormProps {
  isError?: boolean;
  selectedOption?: string;
  onOptionChange?: (selectedOption: string) => void;
  index: number;
}

const shuffleArray = (array: IRankingOptions[], index: number) => {
  // return array.sort(() => Math.random() - 0.5);
  return array.sort(() => Math.random() - 0.5 + index * 0.01);
};

const RankingForm: React.FC<RankingFormProps> = ({
  isError,
  selectedOption,
  onOptionChange,
  index,
}) => {
  const handleChange = (id: string) => {
    // console.log("clicked", parseInt(id) - 1);
    if (onOptionChange) onOptionChange(RANKING_OPTIONS[parseInt(id) - 1].title);
  };

  const [shuffledOptions, setShuffledOptions] = useState<IRankingOptions[]>([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray([...RANKING_OPTIONS], index));
  }, [index]);

  return (
    <>
      <FormControl component="fieldset" error={isError} sx={{ mt: 4 }}>
        <FormLabel
          component="legend"
          sx={{
            fontWeight: 500,
            color: isError ? error.main : "#000",
            fontSize: 16,
            mb: 2,
          }}
        >
          6. Below are four different ways you might ensure the hiring process
          is fair.
          <Typography
            component="span"
            sx={{ color: "#94A4C4", fontStyle: "italic" }}
          >
            Select one option.
          </Typography>
        </FormLabel>
        {shuffledOptions.map((choice, index) => (
          <Box
            key={index}
            sx={{
              mb: 3,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor:
                selectedOption === choice.title
                  ? secondary[300]
                  : secondary[100],
              cursor: "pointer",
            }}
            onClick={() => handleChange(choice.id)}
          >
            <UserAnswer
              tipText={choice.description}
              content={choice.title}
              isEric={false}
              classes={{
                fontWeight: 600,
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: text.primary,
              }}
            />
            {/* <Typography variant="h6">{choice.title}</Typography>
            <Typography sx={{ mb: 1 }}>{choice.description}</Typography> */}
          </Box>
        ))}
        {isError && <FormHelperText>Select one option at least</FormHelperText>}
      </FormControl>
    </>
  );
};

export default RankingForm;
