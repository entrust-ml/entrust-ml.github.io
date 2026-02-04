import Link from 'next/link';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Publications | Entrust',
  description: 'Browse our published research papers and articles.',
};

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: Array<{ type: 'methods' | 'vision' | 'ml' | 'systems' | 'fairness'; label: string }>;
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

export default function PublicationsPage() {
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
          Publications
        </h1>
        <p className="text-lg text-apple-gray-500 max-w-2xl">
          Our research publications at top venues in machine learning, computer vision,
          and natural language processing.
        </p>
      </header>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-6">
              {year}
            </h2>
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
                    <h3 className="font-semibold text-lg text-apple-gray-700 mb-2">
                      {pub.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-apple-gray-500 mb-2">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="text-sm text-apple-gray-400">{pub.venue}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
