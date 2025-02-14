"use client";

import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Steps from "./components/Step";
import { Feature } from "./types";
import Image from "next/image";

const Features = () => {
  const features: Feature[] = [
    {
      id: 0,
      title: "Active Blockchain",
      heading: "Shatter the Boundary of Blockchain.",
      headingIcon: require("./assets/icon-restakers.svg"),
      description: "Break the limitation of smart contract. Break the passiveness of blockchain.",
      image: require("./assets/Sop1.gif"),
    },
    {
      id: 1,
      title: "Atomic Execution",
      heading: "Execute on Any Blockchain, Natively.",
      headingIcon: require("./assets/icon-ecosystem.svg"),
      description:
        "If it requires bridging, it is not chain-native. Bring the crypto liquidity to the real world, no detours.",
      image: require("./assets/Sop2.gif"),
    },
    {
      id: 2,
      title: "Validation-as-a-Service",
      heading: "Remove Vulnerability from Self Validation.",
      headingIcon: require("./assets/icon-validators.svg"),
      description: "Access high-quality shared security massively and effortlessly. Pay only for what you need.",
      image: require("./assets/Sop3.gif"),
    },
  ];
  const steps = features.map((feature) => feature.title);

  const [currentFeature, setCurrentFeature] = useState(features[0]);
  
  const setCurrentFeatureByStepTitle = (title: string) => {
    const feature = features.find((feature) => feature.title === title);
    if (feature) {
      setCurrentFeature(feature);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = (currentFeature.id + 1) % features.length;
      setCurrentFeature(features[nextId]);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentFeature, features]);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[720px] mt-[180px] lg:mt-0">
      <Steps steps={steps} feature={currentFeature} features={features} setCurrentFeatureByStepTitle={setCurrentFeatureByStepTitle} />
      <Content feature={currentFeature} />
      <Image
        src={currentFeature.image}
        className="lg:ml-[96px] lg:w-[520px] lg:h-[520px] w-1/2"
        alt={currentFeature.title}
      />
    </div>
  );
};

export default React.memo(Features);
