import EventCard from '@/components/EventCard';

export const metadata = {
  title: 'Events | Entrust',
  description: 'Upcoming conferences and events where you can meet our research team.',
};

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
}

const upcomingEvents: Event[] = [
  // {
  //   title: 'EurIPS 2025',
  //   description:
  //     'Join us at the thirty-ninth Conference on Neural Information Processing Systems. We will be presenting 12 papers and hosting a workshop on efficient deep learning.',
  //   date: 'December 9-15, 2025',
  //   location: 'Copenhagen, Denmark',
  // },
];

const pastEvents: Event[] = [
  {
    title: 'EurIPS 2025',
    description: '',
    date: 'December 2025',
    location: 'Copenhagen, Denmark',
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-apple-gray-700 mb-4">
          Events
        </h1>
        <p className="text-lg text-apple-gray-500 max-w-2xl">
          Meet our team at conferences and workshops around the world.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
          Upcoming Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
          Past Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
