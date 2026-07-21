import React, { useEffect, useRef } from "react";
import { ScrollArea } from "radix-ui";
import useAppUiStore from "@/store/useAppUiStore";
import FormBottomGradient from "./FormBottomGradient";

const FormScrollArea = ({ children }: { children: React.ReactNode }) => {
  const updateFormScrollState = useAppUiStore(
    (state) => state.updateFormScrollState,
  );
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const viewport = scrollAreaRef.current;
    if (!viewport) return;

    const onScroll = (e: Event) => {
      const targetElem = e.target as HTMLElement;
      const currentPos = targetElem.scrollTop;
      const isScrollingDown = currentPos > lastScrollPos.current;
      const isAtTop = currentPos <= 0;
      const isBottom =
        Math.abs(
          targetElem.scrollHeight -
            targetElem.clientHeight -
            targetElem.scrollTop,
        ) <= 1;

      lastScrollPos.current = currentPos;
      updateFormScrollState(isScrollingDown, isBottom, isAtTop);
    };

    viewport.addEventListener("scroll", onScroll);
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [updateFormScrollState]);

  return (
    <ScrollArea.Root
      type="always"
      scrollHideDelay={700}
      className="w-full h-full rounded-tr-lg rounded-br-lg">
      <ScrollArea.Viewport
        ref={scrollAreaRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full px-6 pt-8.25 pb-39
                   md:px-14 md:pt-14.75">
        {children}
        <FormBottomGradient />
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        onClick={(e) => e.stopPropagation()}
        className="w-7.5 h-[calc(100%-150px)] p-2.5 bg-transparent"
        orientation="vertical">
        <ScrollArea.Thumb
          className="w-2 rounded-xs relative
                   before:bg-[#dfe3fa]
                     before:rounded-lg
                     before:w-full
                     before:h-[40%]
                     before:absolute
                     before:top-30"
        />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default FormScrollArea;
