export class Airport implements MultiSelectModel {
  id!: number;
  name!: string;
  isChecked!: boolean;
}
export interface MultiSelectModel {
  id: number | null;
  name: string | null;
  isChecked: boolean | null;
}
