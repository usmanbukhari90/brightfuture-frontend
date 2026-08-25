import ComingSoonSection from '../ComingSoonSection';

export default function ManageAttendance() {
  return (
    <ComingSoonSection
      title="Manage Attendance"
      description="Attendance management isn't connected yet. Once the backend endpoints for attendance are ready, this panel is where you'll record daily attendance and review class-level summaries."
      bullets={[
        'Planned: mark daily attendance per class.',
        'Planned: view monthly attendance summaries.',
        'Planned: flag students below an attendance threshold.',
      ]}
    />
  );
}
