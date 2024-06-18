"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSectionStore from "./store/useSectionStore";


const useInViewSubHeader = () => {
  const setSubHeaderVisible = useSectionStore(
    (state) => state.setSubHeaderVisible
  );

  const { ref, inView } = useInView({
    threshold: 0, // Adjust as needed
  });

  useEffect(() => {
    setSubHeaderVisible(inView);
  }, [inView, setSubHeaderVisible]);

  return ref;
};

export default useInViewSubHeader;