import React from "react";
import { ScoreProps } from "./Result";

const Advice: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div>
      {score === 0 && (
        <div className="bg-white border border-gray-300 p-3  rounded-md w-full max-w-[900px]">
            <p className="text-2xl font-semibold">Advice</p>
            <li>
              Higher scores indicate more severe depression and may warrant more
              aggressive treatment.
            </li>
            <li>
              A response to treatment is typically defined by studies as a score
              decrease of 50%.
            </li>
            <li>Remission is commonly defined to be a score ≤7.</li>
            <li>
              Based on changes in HAM-D scores over time, adjust treatments
              (e.g., medications, psychotherapy) to optimize outcomes.
            </li>
            <li>
              If scores do not improve as expected, consider revising the
              treatment plan or conducting additional diagnostic evaluations to
              rule out other underlying conditions.
            </li>
            <li>
              Depression evaluations and management require clinical judgment;
              scores should be interpreted in the context of a comprehensive
              clinical assessment.
            </li>
        </div>
      )}
       {score > 0 && score <= 5 && (
        <div className="bg-white border border-gray-300 p-3  rounded-md w-full max-w-[900px]">
            <p className="text-2xl font-semibold">Advice</p>
            <li>
              Higher scores indicate more severe depression and may warrant more
              aggressive treatment.
            </li>
            <li>
              A response to treatment is typically defined by studies as a score
              decrease of 50%.
            </li>
            <li>Remission is commonly defined to be a score ≤7.</li>
            <li>
              Based on changes in HAM-D scores over time, adjust treatments
              (e.g., medications, psychotherapy) to optimize outcomes.
            </li>
            <li>
              If scores do not improve as expected, consider revising the
              treatment plan or conducting additional diagnostic evaluations to
              rule out other underlying conditions.
            </li>
            <li>
              Depression evaluations and management require clinical judgment;
              scores should be interpreted in the context of a comprehensive
              clinical assessment.
            </li>
        </div>
      )}
      
    </div>
  );
};

export default Advice;
