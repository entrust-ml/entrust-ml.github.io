import Link from 'next/link';
import Tag from '@/components/Tag';
import EventCard from '@/components/EventCard';

export const metadata = {
  title: 'Contributions | Entrust',
  description: 'Our publications, open source projects, and conference appearances.',
};

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: Array<{ type: 'methods' | 'vision' | 'ml' | 'systems' | 'fairness'; label: string }>;
  link: string;
}

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
}

interface OpenSourceProject {
  name: string;
  description: string;
  link: string;
}

const publications: Publication[] = [
  {
    title: '3rd Place, Competition of Fairness in AI Face Detection @ NeurIPS 2025',
    authors: ['Entrust Applied Research Team'],
    venue: 'NeurIPS 2025',
    year: 2025,
    tags: [{ type: 'fairness' as const, label: 'Fairness' }],
    link: 'https://sites.google.com/view/aifacedetection/home',
  },
  {
    title: 'FADE: Few-shot/zero-shot Anomaly Detection Engine using Large Vision-Language Model',
    authors: ['Yuanwei Li', 'Elizaveta Ivanova', 'Martins Bruveris'],
    venue: 'BMVC 2024',
    year: 2024,
    tags: [{ type: 'vision' as const, label: 'Computer Vision' }],
    link: 'https://arxiv.org/abs/2409.00556v1',
  },
];

const events: Event[] = [
  {
    title: 'NeurIPS 2025',
    description: '',
    date: 'December 2025',
    location: 'Copenhagen, Denmark',
  },
  {
    title: "ICVSS 2025",
    description: 'International Computer Vision Summer School',
    date: 'July 2025',
    location: 'Sicily, Italy',
  }
];

const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'Clusterfun',
    description: 'Open-source library for interactively visualising image, video and audio data',
    link: 'https://github.com/gietema/clusterfun',
  },
  {
    name: 'Score Analysis',
    description: 'Package to analyse ML model results',
    link: 'https://github.com/martinsbruveris/score-analysis',
  },
  {
    name: 'TensorFlow Image Models',
    description: 'TensorFlow port of PyTorch Image Models (timm) - image models with pretrained weights.',
    link: 'https://github.com/martinsbruveris/tensorflow-image-models',
  },
  {
    name: 'nano-TRM',
    description: 'Tiny Recursive Models (TRM) implementation in pytorch designed for experimentation',
    link: 'https://github.com/olivkoch/nano-trm',
  },
];

export default function ContributionsPage() {
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-apple-gray-700 mb-4">
          Contributions
        </h1>
        <p className="text-lg text-apple-gray-500 max-w-2xl">
          Our publications, open source projects, and conference appearances.
        </p>
      </header>

      {/* Events Section */}
      {events.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
            Events
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event, index) => (
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
      )}

      {/* Open Source Section */}
      {openSourceProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
            Open Source
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {openSourceProjects.map((project, index) => (
              <Link key={index} href={project.link} className="block">
                <article className="bg-white rounded-xl border border-apple-gray-200 p-6 hover:border-apple-gray-300 transition-colors">
                  <h3 className="font-display font-semibold text-lg text-apple-gray-700 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-apple-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Publications Section */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
          Publications
        </h2>
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h3 className="font-display text-xl font-semibold text-apple-gray-600 mb-4">
                {year}
              </h3>
              <div className="space-y-4">
                {publicationsByYear[year].map((pub, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl border border-apple-gray-200 p-6"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pub.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} type={tag.type} label={tag.label} />
                      ))}
                    </div>
                    <Link href={pub.link} className="underline">
                      <h4 className="font-semibold text-lg text-apple-gray-700 mb-2">
                        {pub.title}
                      </h4>
                    </Link>
                    <p className="text-sm text-apple-gray-500 mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-sm text-apple-gray-400">{pub.venue}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
