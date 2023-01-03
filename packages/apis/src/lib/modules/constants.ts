import type { Dictionary, ConstantDictionary } from '/@/declarations';

import { HttpConfig, BaseService } from '../base';

class UaaConstantService extends BaseService<Dictionary<ConstantDictionary[]>> {
  private static instance: UaaConstantService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): UaaConstantService {
    if (this.instance == null) {
      this.instance = new UaaConstantService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getUaa() + '/authorize/constant/enums';
  }
}

class UpmsConstantService extends BaseService<Dictionary<ConstantDictionary[]>> {
  private static instance: UpmsConstantService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): UpmsConstantService {
    if (this.instance == null) {
      this.instance = new UpmsConstantService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getUpms() + '/constants/enums';
  }
}

export { UaaConstantService, UpmsConstantService };
