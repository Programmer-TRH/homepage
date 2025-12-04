export function FormatDateTime(dateInput: string | Date): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  // Format date
  let formatted = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Ensure AM/PM is uppercase
  formatted = formatted.replace(/am|pm/i, (match) => match.toUpperCase());

  return formatted;
}
