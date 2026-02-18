import { format } from "date-fns";

// Long localised date, e.g. February 1, 2026
export const formatDate = (date: string) => format(date, 'PPP')
