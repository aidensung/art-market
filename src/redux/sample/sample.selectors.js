import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSample = (state) => state.sample3;

export const selectStringValue = createDraftSafeSelector(
  selectSample,
  (sample) => sample.stringValue,
);

export const selectNumberValue = createDraftSafeSelector(
  selectSample,
  (sample) => sample.numberValue,
);

export const selectIsValid = createDraftSafeSelector(
  selectSample,
  (sample) => sample.isValid,
);
