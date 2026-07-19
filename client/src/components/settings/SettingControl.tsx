interface OptionProps {
  label: string;
  onChange: () => void;
  selected: boolean;
}
export function SettingOption({ label, onChange, selected }: OptionProps) {
  return (
    <button
      aria-pressed={selected}
      className={`rounded-xl border px-3 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-primary ${selected ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:bg-surface-muted"}`}
      onClick={onChange}
      type="button"
    >
      {label}
    </button>
  );
}
interface SwitchProps {
  label: string;
  onChange: () => void;
  value: boolean;
}
export function SettingSwitch({ label, onChange, value }: SwitchProps) {
  return (
    <button
      aria-checked={value}
      className="flex w-full items-center justify-between gap-4 text-left"
      onClick={onChange}
      role="switch"
      type="button"
    >
      <span className="text-sm font-semibold text-text-primary">{label}</span>
      <span
        className={`relative h-6 w-11 rounded-full transition ${value ? "bg-primary" : "bg-border"}`}
      >
        <span
          className={`absolute top-1 size-4 rounded-full bg-surface transition ${value ? "left-6" : "left-1"}`}
        />
      </span>
    </button>
  );
}
