import { useCallback, useMemo, useRef, useState } from "react";
const useBottomSheet = () => {
  const bottomSheetModalRef = useRef(null);
  const refB = useRef(null);
  const snapPoints = useMemo(() => ["15%", "45%", "75%"], []);

  return {
    bottomSheetModalRef: bottomSheetModalRef,
    refB: refB,
    snapPoints: snapPoints,
  };
};

export default useBottomSheet;
