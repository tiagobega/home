import { STEP, StepType } from '@app/constants/step';

export class AssertionUtils {
  static isStepValid(step: string): step is StepType {
    return Object.values(STEP).includes(step as StepType);
  }

  static assertStep(step: string) {
    return this.isStepValid(step) ? step : STEP.ABOUT;
  }
}
