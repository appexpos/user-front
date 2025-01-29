import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ParamsTabCascade = () => {
  return (
    <div className="flex-1 flex items-center justify-start gap-4">
      <Select defaultValue="2025-01">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>资源更新日期</SelectLabel>
            <SelectItem value="2025-01">2025-01</SelectItem>
            <SelectItem value="2024-01">2024-01</SelectItem>
            <SelectItem value="2023-01">2023-01</SelectItem>
            <SelectItem value="2022-01">2022-01</SelectItem>
            <SelectItem value="2021-01">2021-01</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select defaultValue="2025-01">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>资源更新日期</SelectLabel>
            <SelectItem value="2025-01">2025-01</SelectItem>
            <SelectItem value="2024-01">2024-01</SelectItem>
            <SelectItem value="2023-01">2023-01</SelectItem>
            <SelectItem value="2022-01">2022-01</SelectItem>
            <SelectItem value="2021-01">2021-01</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select defaultValue="2025-01">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>资源更新日期</SelectLabel>
            <SelectItem value="2025-01">2025-01</SelectItem>
            <SelectItem value="2024-01">2024-01</SelectItem>
            <SelectItem value="2023-01">2023-01</SelectItem>
            <SelectItem value="2022-01">2022-01</SelectItem>
            <SelectItem value="2021-01">2021-01</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
