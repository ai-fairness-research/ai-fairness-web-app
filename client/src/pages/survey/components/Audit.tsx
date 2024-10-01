import { Grid, List, ListItem, Tooltip, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { FACTORS1, FACTORS2 } from "../../../constants";
import { CommonWrapper } from "../../../common/CommonBox";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EricImg from "../../../assets/illustration/eric.png";

const Audit = () => {
  return (
    <>
      <Typography component={"h4"} variant="h4" sx={{ mb: 4 }}>
        How to Audit an Algorithm
      </Typography>
      <Typography>
        AI audits help ensure a system is fair, secure, and respects privacy.
        They reveal potential biases or issues the developer may have missed,
        such as favoring one group over another or not protecting sensitive
        information.
        <br />
      </Typography>
      <Typography sx={{ fontWeight: 600, my: 2, fontSize: 18 }}>
        Here's how it works:
      </Typography>
      <Typography>
        <b>1. Review the Scenario:</b> Read a brief description of what the
        model is designed to do and the kind of data it uses. This will help you
        see the bigger picture of how the model might work in real life.
        <br />
        <br />
        <b>2. Reflect and Respond:</b> You'll be asked a few simple questions.
        Think about how the model's decisions miaht impact different people.
        Consider whether the model is fair and if any group might be overlooked
        or negatively affected.
      </Typography>
      <Typography sx={{ mt: 2 }}>See an example audit below…</Typography>
      <Typography component={"h6"} variant="h4" sx={{ my: 4 }}>
        Auditing an Algorithm to Select Job Candidates
      </Typography>
      <Typography>
        Here's an example of an audit that Eric, a Social Worker, helped to
        evaluate.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item sm={12} md={4}>
          <img
            src={EricImg}
            alt="eric-img"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          sm={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* <Typography sx={{ fontWeight: 600, fontSize: 18 }} textAlign={"left"}>
            Eric
          </Typography> */}
          <Typography>
            <Typography sx={{ fontWeight: 700 }} component={"span"}>
              Eric
            </Typography>{" "}
            {"   "}is a community advocate with a background in social work. He
            believes in standing up for what’s right and making sure everyone
            gets a fair chance, no matter who they are or where they come from.
            Eric is deeply committed to creating spaces where everyone’s voice
            is heard and respected. He’s passionate about learning from others
            and working together to make positive changes in his community.
          </Typography>
        </Grid>
      </Grid>
      <Typography component={"h6"} variant="h5" sx={{ my: 4 }}>
        1. Review the scenario
      </Typography>
      <CommonWrapper>
        <Typography sx={{ fontWeight: 600, mb: 4 }}>
          ALGORITHMIC HIRING
        </Typography>
        <Typography>
          Imagine a company wants to use a computer model to help them decide
          who to hire for a job. The model is supposed to pick the best
          candidate based on their job applications.
        </Typography>
        <Typography>
          <b> Data: </b>The model will look at data from past job applications.
          This data includes:
        </Typography>
        <List>
          <ListItem>
            <b style={{ marginRight: 4 }}>Experience:</b> How many years the
            applicant has worked.
          </ListItem>
          <ListItem>
            <b style={{ marginRight: 4 }}>Education:</b> What degrees the
            applicant has.
          </ListItem>
          <ListItem>
            <b style={{ marginRight: 4 }}>Skills:</b> What skills the applicant
            has listed.
          </ListItem>
          <ListItem>
            <b style={{ marginRight: 4 }}> Previous Jobs:</b>
            What kind of jobs the applicant has done before.
          </ListItem>
        </List>
        <Typography>
          <b style={{ marginRight: 4 }}> Modeling Approach:</b> The model uses a
          type of computer program that looks at patterns in the data. It tries
          to learn from past hiring decisions by comparing the profiles of
          people who got hired with those who didn’t. Then, it makes predictions
          about who might be the best fit for the job.
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          <b style={{ marginRight: 4 }}> Example Application: </b> The company
          inputs the details of several new job applicants into the model. The
          model reviews the data and suggests that Applicant A is the best fit
          for the job based on their experience and education.
        </Typography>
      </CommonWrapper>
      <Typography component={"h6"} variant="h5" sx={{ my: 4 }}>
        2. Reflect and Respond
      </Typography>
      <Typography sx={{ marginY: 2 }}>
        On hover, you can see how Eric is thinking through some of the questions
        in the audit.
      </Typography>

      <CommonWrapper>
        <>
          <Typography sx={{ fontWeight: 600 }}>
            1. Are there any factors (e.g., data, community or cultural
            practices) that the model might not be considering?
            <UserAnswer
              content="The model might not be considering the cultural importance of community involvement in certain job roles"
              tipText="Some people place a high value on community work, which could be a key indicator of their fit for certain jobs. If the model doesn’t consider this, it could overlook strong candidates."
            />
            <br />
            2. Is there a high risk of negative consequences if the model makes
            an incorrect decision?
          </Typography>
          <Typography>
            Options: Very High / High / Moderate / Low / Very Low
          </Typography>

          <UserAnswer
            content="VERY HIGH"
            tipText="If the model wrongly excludes someone, it could mean that a great candidate doesn’t even get a chance to interview. This is especially concerning for underrepresented groups who might already face barriers.
          "
          />
          <Typography sx={{ fontWeight: 600, my: 4 }}>
            3. What do you believe to be the potential consequences if the model
            makes a mistake in its predictions?
            <UserAnswer
              content="Qualified candidates could miss out on job opportunities, leading to a less diverse workforce."
              tipText="An incorrect prediction could mean that someone who deserves the job never gets a chance. This not only impacts the individual but could also reduce the diversity and inclusiveness of the workplace."
            />
            <br />
            4. Which of the following groups in your community might be
            negatively impacted by the model's decisions?
          </Typography>
          <Grid container>
            <Grid item md={6} sm={12}>
              {FACTORS1.map((itm) => (
                <Typography key={itm}>{itm}</Typography>
              ))}
            </Grid>
            <Grid item md={6} sm={12}>
              {FACTORS2.map((itm) => (
                <Typography key={itm}>{itm}</Typography>
              ))}
            </Grid>
          </Grid>
          <UserAnswer
            content="Race/Ethnicity, Gender"
            tipText="Given the historical bias in hiring practices, it’s likely that racial and ethnic minorities could be disproportionately affected by any errors the model makes. I also women might be negatively impacted by the model's decisions."
          />
          <Typography sx={{ fontWeight: 600, my: 4 }}>
            5. When building the model, which factor do you believe is the most
            important to focus on to limit potential bias?
          </Typography>
          <Grid container>
            <Grid item md={6} sm={12}>
              {FACTORS1.map((itm) => (
                <Typography key={itm}>{itm}</Typography>
              ))}
            </Grid>
            <Grid item md={6} sm={12}>
              {FACTORS2.map((itm) => (
                <Typography key={itm}>{itm}</Typography>
              ))}
            </Grid>
          </Grid>
          <UserAnswer
            content="Race/Ethnicity"
            tipText="Given the complexities around race and the history of discrimination in hiring, it seems most important to make sure the model doesn’t favor one racial group over another."
          />
          <Typography sx={{ fontWeight: 600, my: 4 }}>
            6. Below are four different ways you might ensure the hiring process
            is fair. Please select one option.
          </Typography>
          <Typography>
            A. Make sure the same percentage of applicants from all backgrounds
            (e.g., different races, genders) are recommended for interviews.
            <br /> <br />
            B. Ensure that the model is equally accurate in recommending the
            best candidates, regardless of their background. For example, if the
            model correctly identifies the best candidates from one background,
            it should be just as accurate for candidates from another
            background.
            <br /> <br />
            C. Focus on making sure that applicants with similar qualifications
            (e.g., same experience and skills) have an equal chance of being
            recommended for an interview, regardless of their background.
            <br /> <br />
            D. Check if the model’s recommendations might unintentionally favor
            or disadvantage certain groups of people. If you find that
            applicants from one background are consistently being overlooked or
            recommended less often, adjust the model to fix this.
            <UserAnswer
              content="C. Focus on making sure that applicants with similar qualifications (e.g., same experience and skills) have an equal chance of being recommended for an interview, regardless of their background."
              tipText="This approach ensures that the model is truly fair. If candidates with the same qualifications are treated equally, it removes the risk of bias based on race, gender, or other factors. This is what fairness should look like."
            />
          </Typography>
        </>

        {/* </Box> */}
      </CommonWrapper>
    </>
  );
};

export default Audit;

interface IUserAnswer {
  tipText?: string;
  content?: string;
  classes?: object;
  isEric?: boolean;
}
export const UserAnswer: React.FC<IUserAnswer> = ({
  tipText = "",
  content = "",
  classes = {},
  isEric = true,
}) => {
  return (
    <Tooltip
      arrow
      title={
        <React.Fragment>
          <Typography color="inherit" sx={{ fontSize: "1rem" }}>
            {tipText}
          </Typography>
        </React.Fragment>
      }
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -5],
              },
            },
          ],
        },
      }}
    >
      <Typography sx={{ color: red[600], fontWeight: 600, my: 2, ...classes }}>
        {isEric && "Eric's Answer: "} {content}
        <PsychologyIcon />
      </Typography>
    </Tooltip>
  );
};
