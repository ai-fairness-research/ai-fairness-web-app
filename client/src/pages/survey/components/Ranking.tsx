import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Typography, FormLabel, FormControl } from "@mui/material";
import { ContextAnswer } from "../../../services/utilities/types";

const initialOptions = [
  {
    id: "1",
    title:
      "Make sure the same percentage of applicants from all backgrounds are recommended for interviews.",
    description:
      "This means that if 10% of applicants from one background are recommended, then 10% of applicants from another background should also be recommended, no matter what.",
  },
  {
    id: "2",
    title:
      "Ensure that the model is equally accurate in recommending the best candidates, regardless of their background.",
    description:
      "If the model correctly identifies the best candidates from one background, it should be just as accurate for candidates from another background.",
  },
  {
    id: "3",
    title:
      "Focus on making sure that applicants with similar qualifications have an equal chance of being recommended for an interview.",
    description:
      "Applicants with similar experience and skills should be treated equally regardless of their background.",
  },
  {
    id: "4",
    title:
      "Check if the model’s recommendations unintentionally favor or disadvantage certain groups of people.",
    description:
      "If applicants from one background are consistently being overlooked or recommended less often, adjust the model to fix this.",
  },
];

interface RankingFormProps {
  handleContextChange: (
    selectedOption: string,
    field: string,
    checked?: boolean,
    ranking?: string[]
  ) => void;
  contextAnswer: ContextAnswer;
}

const RankingForm: React.FC<RankingFormProps> = ({
  handleContextChange,
  contextAnswer,
}) => {
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    if (!contextAnswer?.ranking) {
      handleContextChange("", "ranking", false, ["1", "2", "3", "4"]);
    }
  }, []);

  // Handle drag-and-drop reordering
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedOptions = Array.from(options);
    const [movedItem] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, movedItem);

    setOptions(reorderedOptions);

    const ids: string[] = reorderedOptions.map((option) => option.id);

    handleContextChange("", "ranking", false, ids);
  };
  return (
    <FormControl component="fieldset" sx={{ mt: 4 }}>
      <FormLabel
        component="legend"
        sx={{ fontWeight: 500, color: "#000", fontSize: 16 }}
      >
        6. Below are four different ways you might ensure the hiring process is
        fair. Please rank these options from 1 to 4, where 1 is the option you
        believe is the fairest and 4 is the least fair.
      </FormLabel>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="rankingList">
          {(provided) => (
            <Box
              sx={{ mt: 3 }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {options.map(({ id, title, description }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        mb: 3,
                        p: 2,
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <Typography variant="h6">{title}</Typography>
                      <Typography sx={{ mb: 1 }}>{description}</Typography>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </FormControl>
  );
};

export default RankingForm;
