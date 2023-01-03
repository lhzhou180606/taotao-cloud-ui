export type { DeploymentCreate } from '@taotaocloud/bpmn-apis';

export type BpmnAlign = 'left' | 'right' | 'top' | 'bottom' | 'center' | 'middle';

export interface BpmnError {
  warnings: string;
  message: string;
}
