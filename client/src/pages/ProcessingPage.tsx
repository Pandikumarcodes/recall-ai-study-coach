import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProcessingCard } from "../components/processing/ProcessingCard";
import { PageContainer } from "../components/layout/PageContainer";

const processingSteps = [
  "Uploading Notes",
  "Extracting Content",
  "Generating Summary",
  "Creating Flashcards",
  "Creating Quiz Questions",
  "Building Knowledge Map",
];
const stepDuration = 1250;

export function ProcessingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const progress = Math.round(
    ((activeStep + 1) / processingSteps.length) * 100,
  );
  useEffect(() => {
    if (activeStep >= processingSteps.length) {
      const redirectTimer = window.setTimeout(
        () => navigate("/app/study"),
        1000,
      );
      return () => window.clearTimeout(redirectTimer);
    }
    const stepTimer = window.setTimeout(
      () => setActiveStep((currentStep) => currentStep + 1),
      stepDuration,
    );
    return () => window.clearTimeout(stepTimer);
  }, [activeStep, navigate]);
  return (
    <PageContainer>
      <div className="mx-auto max-w-2xl py-6 sm:py-12">
        <ProcessingCard
          activeStep={Math.min(activeStep, processingSteps.length - 1)}
          progress={activeStep >= processingSteps.length ? 100 : progress}
          steps={processingSteps}
        />
      </div>
    </PageContainer>
  );
}
