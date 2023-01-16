import { Axios, HttpConfig } from './base';
import { DeploymentService, ProcessDefinitionService, ProcessInstanceService } from './modules';

class BpmnApiResources {
  private static instance: BpmnApiResources;
  private config = {} as HttpConfig;

  private constructor(config: HttpConfig) {
    this.config = config;
  }

  public static getInstance(config: HttpConfig): BpmnApiResources {
    if (this.instance == null) {
      this.instance = new BpmnApiResources(config);
    }
    return this.instance;
  }

  public getConfig(): HttpConfig {
    return this.config;
  }

  public deployment(): DeploymentService {
    return DeploymentService.getInstance(this.config);
  }

  public processDefinition(): ProcessDefinitionService {
    return ProcessDefinitionService.getInstance(this.config);
  }

  public processInstance(): ProcessInstanceService {
    return ProcessInstanceService.getInstance(this.config);
  }
}

const createBpmnApi = (project: string, clientId: string, clientSecret: string, http: Axios): BpmnApiResources => {
  const config = new HttpConfig(project, clientId, clientSecret, http);
  return BpmnApiResources.getInstance(config);
};

export { createBpmnApi };
