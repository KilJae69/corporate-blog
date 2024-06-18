"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSectionStore from "./store/useSectionStore";

const useInViewHeroSection = () => {
  const setHeroSectionVisible = useSectionStore(
    (state) => state.setHeroSectionVisible
  );

  const { ref, inView } = useInView({
    threshold: 0, // Adjust as needed
  });

  useEffect(() => {
    setHeroSectionVisible(inView);
  }, [inView, setHeroSectionVisible]);

  return ref;
};

export default useInViewHeroSection;
