import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSample = (state) => state.sample;

export const selectStringValue = createDraftSafeSelector(
  selectSample,
  (sample) => sample.stringValue,
);

export const selectNumberValue = createDraftSafeSelector(
  selectSample,
  (sample) => sample.numberValue,
);
