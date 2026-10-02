export const HABIT_TYPES = {
  TODO: 'todo',
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
};

export const HABIT_TYPE_OPTIONS = [
  {
    value: HABIT_TYPES.TODO,
    label: 'Une fois',
    description: 'À réaliser une seule fois',
  },
  {
    value: HABIT_TYPES.DAILY,
    label: 'Quotidienne',
    description: 'Se répète chaque jour',
  },
  {
    value: HABIT_TYPES.WEEKLY,
    label: 'Hebdomadaire',
    description: 'Se répète chaque semaine',
  },
  {
    value: HABIT_TYPES.MONTHLY,
    label: 'Mensuelle',
    description: 'Se répète chaque mois',
  },
];

export function getHabitType(type) {
  return (
    HABIT_TYPE_OPTIONS.find(
      (option) => option.value === type
    ) || HABIT_TYPE_OPTIONS[0]
  );
}

export function getHabitTypeLabel(type) {
  return getHabitType(type).label;
}
