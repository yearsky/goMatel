import { useCallback, useMemo, useRef, useState } from "react";
const useBottomSheet = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["15%", "50%"], []);

  return {
    bottomSheetModalRef: bottomSheetModalRef,
    snapPoints: snapPoints,
  };
};

export default useBottomSheet;
