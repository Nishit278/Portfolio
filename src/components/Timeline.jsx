import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BriefcaseBusiness } from "lucide-react";
import { experimental_sx } from "@mui/material";
import FM from "../assets/logo (1).png";

const TimeLine = ({ experienceRef }) => {
  return (
    // Timeline for only 1 job should be aligned to the left dot, timeline should not be in the center
    <main className="" ref={experienceRef}>
      <h1 className="text-4xl font-semibold text-white uppercase text-center mt-20 mb-10">
        Experience
      </h1>
      <div className="hidden lg:block">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography style={{ marginTop: "20px" }} color="#fff">
                Sep 2023 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                variant="outlined"
                style={{ padding: "10px" }}
              >
                <BriefcaseBusiness className="text-blue-500" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className="p-4"
                style={{ backgroundColor: "#1C1B23", color: "#b9c4f9" }}
              >
                <h1 className="text-slate-300 text-xl">Software Engineer</h1>
                <p className="text-emerald-500">Flatmate.in</p>
                <ul className=" list-disc text-sm p-4 space-y-2">
                  <li className="p-0">
                    Increased user engagement by 20% through intuitive UI
                    redesign and streamlined navigation.
                  </li>

                  <li className="p-0">
                    Optimized code for faster loading times, resulting in a 60%
                    reduction in page load time. by implementing efficient
                    algorithms and code optimizations like lazy loading and code
                    splitting.
                  </li>
                  <li className="p-0">
                    Modernized legacy codebase, improving maintainability and
                    reducing technical debt by 50%.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="lg:hidden">
        {/* timelime without MUI timeline */}
        <div className="flex flex-col gap-4 text-slate-200 px-10">
          <div className="flex gap-4 items-center">
            <img src={FM} className="w-8 h-8" alt="" />
            <h1 className="text-xl text-green-500">Flatmate.in</h1>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-slate-300 text-xl">Software Engineer</h1>
            {/* <p className="text-emerald-500">Flatmate.in</p> */}
            <p className="text-sm">Sep 2023 - Present</p>
          </div>
          <ul className=" list-disc text-sm p-4 space-y-4">
            <li className="p-0">
              Increased user engagement by 20% through intuitive UI redesign and
              streamlined navigation.
            </li>

            <li className="p-0">
              Optimized code for faster loading times, resulting in a 60%
              reduction in page load time. by implementing efficient algorithms
              and code optimizations like lazy loading and code splitting.
            </li>
            <li className="p-0">
              Modernized legacy codebase, improving maintainability and reducing
              technical debt by 50%.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default TimeLine;
