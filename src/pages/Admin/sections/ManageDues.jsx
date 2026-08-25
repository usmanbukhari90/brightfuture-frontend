import ComingSoonSection from '../ComingSoonSection';

export default function ManageDues() {
  return (
    <ComingSoonSection
      title="Manage Dues"
      description="Fee due tracking isn't connected yet. Once the backend endpoints for dues are ready, this panel is where you'll upload fee schedules, mark payments received, and send reminders for a class or student."
      bullets={[
        'Planned: upload a dues sheet per class, term, or year.',
        'Planned: mark individual dues as paid or waived.',
        'Planned: export outstanding dues as CSV.',
      ]}
    />
  );
}
