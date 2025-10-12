import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AexperienceAstrology from "@/components/HomePages/AexperienceAstrology";
import BAstrologySolution from "@/components/HomePages/BAstrologySolution";
import CAstrologyServices from "@/components/HomePages/CAstrologyServices";
import DZodiacSign from "@/components/HomePages/DZodiacSign";
import EDuastroMilestones from "@/components/HomePages/EDuastroMilestones"
import FOurUnmatchedExpertise from "@/components/HomePages/FOurUnmatchedExpertise";
import GNewsBlog from "@/components/HomePages/GNewsBlog";
import HAstrologicalConnections from "@/components/HomePages/HAstrologicalConnections";
import IUnderstandYourFuture from "@/components/HomePages/IUnderstandYourFuture";
import JDiscoverYourCosmic from "@/components/HomePages/JDiscoverYourCosmic";
import KFaq from "@/components/HomePages/KFaq";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <AexperienceAstrology />
    <BAstrologySolution />
    <CAstrologyServices />
    <DZodiacSign />
    <EDuastroMilestones />
    <FOurUnmatchedExpertise />
    <GNewsBlog />
    <HAstrologicalConnections />
    <IUnderstandYourFuture />
    <JDiscoverYourCosmic /> 
    <KFaq />  
    <Footer />
    </>
  );
}
