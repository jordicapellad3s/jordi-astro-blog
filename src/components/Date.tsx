import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
  formater: string;
};

export default function Date({ dateString, formater }: Props) {
  const date = parseISO(dateString);
  return (
    <time className="text-neutral-50/50 text-sm" dateTime={dateString}>
      {format(date, formater)}
    </time>
  );
}
