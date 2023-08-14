export interface ViewSettings {
  componentId: number;
  path: string;
  componentType: string;
  clientSettings: componentOptions | null;
  defaultSettings: componentOptions;
}
export class componentOptions {
  isRequired!: boolean | null;
  isVisible!: boolean | null;
  isSelectable!: boolean | null;
}
