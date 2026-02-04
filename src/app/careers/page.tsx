export const metadata = {
  title: 'Careers | Entrust',
  description: 'Join our team and work on cutting-edge machine learning research.',
};

interface Position {
  title: string;
  location: string;
  url: string;
}

const positions: Position[] = [
  {
    title: 'Applied Scientist I',
    location: 'London, UK',
    url: 'https://entrust.wd1.myworkdayjobs.com/en-US/EntrustCareers/job/Applied-Scientist-I_R003921',
  },
  {
    title: 'Applied Science Intern',
    location: 'Paris, France',
    url: 'https://entrust.wd1.myworkdayjobs.com/en-US/EntrustCareers/job/Applied-Science-Intern---Paris--France_R003997'
  }
];

export default function CareersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <header className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-apple-gray-700 mb-6">
          Join Our Team
        </h1>
        <p className="text-lg text-apple-gray-500 max-w-2xl mx-auto">
          We are looking for exceptional researchers and engineers to help advance
          the state of the art in machine learning.
        </p>
      </header>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-8 text-center">
          Why Work With Us
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-apple-gray-700 mb-2">Impactful Research</h3>
            <p className="text-sm text-apple-gray-500">
              Work on problems related to real-world applications, bias mitigation and fairness.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-apple-gray-700 mb-2">World-Class Team</h3>
            <p className="text-sm text-apple-gray-500">
              Collaborate with researchers who are leaders in their fields.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-apple-gray-700 mb-2">Great Environment</h3>
            <p className="text-sm text-apple-gray-500">
              Access to cutting-edge compute and resources to support your research.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-apple-gray-700 mb-8">
          Open Positions
        </h2>
        <div className="space-y-4">
          {positions.map((position, index) => (
            <a
              key={index}
              href={position.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border border-apple-gray-200 p-6 hover:border-apple-gray-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-lg text-apple-gray-700">
                    {position.title}
                  </h3>
                  <span className="flex items-center text-sm text-apple-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {position.location}
                  </span>
                </div>
                <svg className="w-4 h-4 text-apple-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
