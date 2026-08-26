import ComingSoonSection from '../ComingSoonSection';

export default function ManageHeroBanners() {
  return (
    <ComingSoonSection
      title="Homepage Banners"
      description="Hero banner editing isn't connected yet. Once the backend endpoints for banners are ready, this panel is where you'll swap the homepage poster images, headings, and button links without touching code."
      bullets={[
        'Planned: upload a new background image per banner.',
        'Planned: edit heading, button text, and button link.',
        'Planned: preview changes before saving.',
      ]}
    />
  );
}