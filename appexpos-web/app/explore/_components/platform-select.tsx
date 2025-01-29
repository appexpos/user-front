import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PrePramsTab = () => (
  <div className="mr-4">
    <Select defaultValue="iOS">
      <SelectTrigger className="w-[52px] px-0 border-none outline-none shadow-none focus:outline-none focus:ring-0 focus:border-none text-md text-black font-bold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="iOS">iOS</SelectItem>
          <SelectItem value="android">安卓</SelectItem>
          <SelectItem value="web">web</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);
