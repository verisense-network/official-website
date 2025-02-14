import clsx from "clsx";
import React from "react";
import { Feature } from "../types";

interface StepProps {
  steps: string[];
  feature: Feature;
  features: Feature[];
  setCurrentFeatureByStepTitle: (title: string) => void;
}

const Steps = ({ steps, feature, features, setCurrentFeatureByStepTitle }: StepProps) => {
  return (
    <>
      <div className="flex flex-col lg:hidden w-[370px] lg:h-[380px] justify-center items-center mt-[60px] px-3 lg:px-auto">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => {
            const currStepFeature = features.find((f) => f.title === step)!;
            return (
              <React.Fragment key={index}>
                <span className={clsx("inline-block w-[12px] h-[12px] rounded-full", {
                  'bg-white':  currStepFeature?.id <= feature.id,
                  'bg-[#595959]': currStepFeature?.id > feature.id
                })} />
                {index < steps.length - 1 && (
                  <span className={clsx("inline-block w-[150px] lg:w-[160px] h-[3px]", {
                    'bg-gradient-to-b from-white to-[#595959]': currStepFeature?.id === feature.id,
                    'bg-white': currStepFeature?.id < feature.id,
                    'bg-[#595959]': currStepFeature?.id > feature.id
                  })} />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex text-white/70 text-[12px] lg:text-[16px] font-medium w-full items-center mt-1">
          {steps.map((step, index) => (
            index !== steps.length - 1 && index !== 0 ? (
              <div
                className="flex flex-col items-center justify-center flex-grow cursor-pointer"
                onClick={() => setCurrentFeatureByStepTitle(step)}
              >
                <span className="inline-block">{step}</span>
              </div>
            ) : (
              <span className="inline-block text-white cursor-pointer" onClick={() => setCurrentFeatureByStepTitle(step)}>{step}</span>
            )
          ))}
        </div>
      </div>
      <div className="hidden lg:flex w-[150px] h-[380px] justify-center">
        <div className="flex flex-col items-center">
          {steps.map((step, index) => {
            const currStepFeature = features.find((f) => f.title === step)!;
            return <React.Fragment key={index}>
              <span className={clsx("inline-block w-[12px] h-[12px] rounded-full", {
                'bg-white':  currStepFeature?.id <= feature.id,
                'bg-[#595959]': currStepFeature?.id > feature.id
              })} />
              {index < steps.length - 1 && (
                <span className={clsx("inline-block w-[3px] h-[160px]", {
                  'bg-gradient-to-b from-white to-[#595959]': currStepFeature?.id === feature.id,
                  'bg-gradient-to-b from-[#595959] to-white': currStepFeature?.id < feature.id,
                  'bg-[#595959]': currStepFeature?.id > feature.id
                })} />
              )}
            </React.Fragment>
          })}
        </div>
        <div className="flex flex-col h-full text-white/70 text-[16px] font-medium ml-[30px]">
          {steps.map((step, index) => (
            index !== steps.length - 1 && index !== 0 ? (
              <div
                className={clsx("flex flex-col justify-center flex-grow cursor-pointer", step === feature.title && "text-white")}
                onClick={() => setCurrentFeatureByStepTitle(step)}
              >
                <span className="inline-block">{step}</span>
              </div>
            ) : (
              <span
                className={clsx("inline-block cursor-pointer", step === feature.title && "text-white")}
                onClick={() => setCurrentFeatureByStepTitle(step)}
              >
                {step}
              </span>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Steps;
