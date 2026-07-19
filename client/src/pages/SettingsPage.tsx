import { motion } from "framer-motion";
import { Bell, BrainCircuit, CircleHelp, Globe2, Palette, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Toast } from "../components/ui/Toast";
import {
  SettingOption,
  SettingSwitch,
} from "../components/settings/SettingControl";
import { SettingsSection } from "../components/settings/SettingsSection";
import { PageContainer } from "../components/layout/PageContainer";
type Preferences = {
  accent: string;
  aiLength: string;
  dailyGoal: number;
  dateFormat: string;
  difficulty: string;
  explanation: string;
  flashcards: string;
  font: string;
  language: string;
  learningStyle: string;
  notifications: Record<string, boolean>;
  session: string;
  theme: string;
  timezone: string;
};
const defaultPreferences: Preferences = {
  theme: "System",
  accent: "Indigo",
  font: "Medium",
  dailyGoal: 60,
  difficulty: "Medium",
  flashcards: "Spaced Repetition",
  session: "25",
  aiLength: "Medium",
  learningStyle: "Mixed",
  explanation: "Intermediate",
  language: "English",
  timezone: "Asia/Kolkata",
  dateFormat: "DD/MM/YYYY",
  notifications: {
    "Study reminders": true,
    "AI processing completed": true,
    "Revision reminders": true,
    "Quiz reminders": false,
    "Achievement notifications": true,
    "Weekly summary email": false,
  },
};
const storageKey = "recall-settings";
const settingsNavigation = [{ label: "Appearance", icon: Palette }, { label: "Notifications", icon: Bell }, { label: "Study Preferences", icon: SlidersHorizontal }, { label: "AI Preferences", icon: BrainCircuit }, { label: "Language & Region", icon: Globe2 }, { label: "Privacy & Data", icon: ShieldCheck }, { label: "About Recall", icon: CircleHelp }];
export function SettingsPage() {
  const [settings, setSettings] = useState<Preferences>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? (JSON.parse(saved) as Preferences) : defaultPreferences;
  });
  const [toast, setToast] = useState("");
  const [activeSection, setActiveSection] = useState("Appearance");
  const save = (next: Preferences) => {
    setSettings(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setToast("Settings saved");
    window.setTimeout(() => setToast(""), 1800);
  };
  const choose = (key: keyof Preferences, value: string | number) =>
    save({ ...settings, [key]: value });
  const optionGroup = (key: keyof Preferences, options: string[]) => (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <SettingOption
          key={option}
          label={option}
          onChange={() => choose(key, option)}
          selected={settings[key] === option}
        />
      ))}
    </div>
  );
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <header>
          <p className="text-sm font-bold text-primary">
            Workspace preferences
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Settings
          </h1>
          <p className="mt-3 text-base text-text-secondary">
            Personalize Recall for the way you learn best.
          </p>
        </header>
        <div className="mt-8 grid gap-6 lg:grid-cols-[13rem_1fr]">
          <nav
            aria-label="Settings sections"
            className="flex gap-2 overflow-x-auto lg:flex-col"
          >
            {settingsNavigation.map((item) => {
              const Icon = item.icon;
              const target = item.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "");
              return (
              <a
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition duration-200 hover:bg-surface hover:text-text-primary ${activeSection === item.label ? "bg-primary/10 text-primary" : "text-text-secondary"}`}
                href={`#${target}`}
                key={item.label}
                onClick={() => setActiveSection(item.label)}
              >
                <Icon size={16} /> {item.label}
              </a>
              );
            })}
          </nav>
          <div className="space-y-6">
            <SettingsSection
              description="Control how Recall looks and feels."
              id="appearance"
              title="Appearance"
            >
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Theme
                </p>
                {optionGroup("theme", ["Light", "Dark", "System"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Accent Color
                </p>
                {optionGroup("accent", ["Indigo", "Violet", "Emerald"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Font Size
                </p>
                {optionGroup("font", ["Small", "Medium", "Large"])}
              </div>
            </SettingsSection>
            <SettingsSection
              description="Choose which updates you want to receive."
              id="notifications"
              title="Notifications"
            >
              {Object.entries(settings.notifications).map(([label, value]) => (
                <SettingSwitch
                  key={label}
                  label={label}
                  onChange={() =>
                    save({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        [label]: !value,
                      },
                    })
                  }
                  value={value}
                />
              ))}
            </SettingsSection>
            <SettingsSection
              description="Set goals and defaults for your study sessions."
              id="study-preferences"
              title="Study Preferences"
            >
              <label className="block text-sm font-semibold text-text-primary">
                Daily study goal: {settings.dailyGoal} minutes
                <input
                  className="mt-3 block w-full accent-primary"
                  max="240"
                  min="15"
                  onChange={(event) =>
                    choose("dailyGoal", Number(event.target.value))
                  }
                  step="15"
                  type="range"
                  value={settings.dailyGoal}
                />
              </label>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Preferred quiz difficulty
                </p>
                {optionGroup("difficulty", ["Easy", "Medium", "Hard"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Flashcard review mode
                </p>
                {optionGroup("flashcards", ["Standard", "Spaced Repetition"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Default study session
                </p>
                {optionGroup("session", ["15", "25", "45", "60"])}
              </div>
            </SettingsSection>
            <SettingsSection
              description="Tailor AI help to your learning style."
              id="ai-preferences"
              title="AI Preferences"
            >
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  AI Response Length
                </p>
                {optionGroup("aiLength", ["Short", "Medium", "Detailed"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Learning Style
                </p>
                {optionGroup("learningStyle", ["Visual", "Text", "Mixed"])}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">
                  Explanation Level
                </p>
                {optionGroup("explanation", [
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                ])}
              </div>
            </SettingsSection>
            <SettingsSection
              description="Set language and local time preferences."
              id="language--region"
              title="Language & Region"
            >
              {[
                ["Language", "language", ["English", "Spanish", "French"]],
                [
                  "Timezone",
                  "timezone",
                  ["Asia/Kolkata", "Europe/London", "America/New_York"],
                ],
                [
                  "Date format",
                  "dateFormat",
                  ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"],
                ],
              ].map(([label, key, values]) => (
                <label
                  className="block text-sm font-semibold text-text-primary"
                  key={String(key)}
                >
                  {label}
                  <select
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm"
                    onChange={(event) =>
                      choose(key as keyof Preferences, event.target.value)
                    }
                    value={settings[key as keyof Preferences] as string}
                  >
                    {(values as string[]).map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
              ))}
            </SettingsSection>
            <SettingsSection
              description="Manage your local Recall data."
              id="privacy--data"
              title="Privacy & Data"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [
                    "Export Data",
                    "Download your Recall learning data.",
                    "Export",
                  ],
                  [
                    "Clear Local Data",
                    "Remove all locally stored preferences.",
                    "Clear",
                  ],
                  ["Delete Account", "Coming Soon", "Disabled"],
                ].map(([title, description, action]) => (
                  <article
                    className="rounded-xl border border-border p-4"
                    key={title}
                  >
                    <h3 className="font-bold text-text-primary">{title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {description}
                    </p>
                    <button
                      className="mt-4 rounded-xl border border-border px-3 py-2 text-sm font-semibold text-primary disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={action === "Disabled"}
                      onClick={() => {
                        if (action === "Clear") {
                          localStorage.removeItem(storageKey);
                          save(defaultPreferences);
                        } else setToast("Export prepared");
                      }}
                      type="button"
                    >
                      {action}
                    </button>
                  </article>
                ))}
              </div>
            </SettingsSection>
            <SettingsSection
              description="Recall AI · Version 1.0.0 · Build July 2026"
              id="about-recall"
              title="About Recall"
            >
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-primary">
                {[
                  "Help Center",
                  "Privacy Policy",
                  "Terms of Service",
                  "Send Feedback",
                ].map((item) => (
                  <a href="#about-recall" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </SettingsSection>
          </div>
        </div>
      </motion.div>
      <Toast message={toast} />
    </PageContainer>
  );
}
