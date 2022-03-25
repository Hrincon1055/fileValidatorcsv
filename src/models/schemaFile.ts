import { InterfaceFile } from '../interface/file.interface';

export class SchemaFile {
  private modelFile: InterfaceFile[];
  constructor(model: InterfaceFile[]) {
    this.modelFile = model;
  }
  public getFileModelSchema(): InterfaceFile[] {
    return this.modelFile;
  }
}
