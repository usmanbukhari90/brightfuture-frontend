import ComingSoonSection from '../ComingSoonSection';

export default function ManageToppers({ onGoToPublish }) {
  return (
    <ComingSoonSection
      title="Manage Toppers"
      description="Toppers don't have their own management screen yet — they're currently published as regular announcements. Use Publish Announcements to feature a topper until a dedicated panel is built."
      ctaLabel="Go to Publish Announcements"
      onCta={onGoToPublish}
    />
  );
}
