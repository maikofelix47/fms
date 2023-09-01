import { forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectOption = {
  label: string;
  value: string;
};

type FmsSelectProps = Readonly<{
  options: SelectOption[];
  onValueChange: () => any;
  defaultValue: any;
}>;

export const FmsSelect = ({
  options,
  onValueChange,
  defaultValue,
}: FmsSelectProps) => {
  if (!options) {
    return <>No Options</>;
  }
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {options.map((o, index) => {
          return (
            <SelectItem key={index} value={o.value}>
              {o.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
