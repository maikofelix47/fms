export interface Member {
  id: number;
  userId: number;
  isActive: boolean;
  joinDate: Date;
  exitDate: Date;
  exitReason: string;
  voided: boolean;
}
