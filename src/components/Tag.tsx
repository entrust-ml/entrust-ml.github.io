import Link from 'next/link';

type TagType = 'methods' | 'vision' | 'nlp' | 'ml' | 'systems';

interface TagProps {
  type: TagType;
  label: string;
  href?: string;
}

const tagStyles: Record<TagType, string> = {
  methods: 'bg-purple-100 text-purple-700 border-purple-200',
  vision: 'bg-sky-100 text-sky-700 border-sky-200',
  nlp: 'bg-blue-100 text-blue-800 border-blue-200',
  ml: 'bg-green-100 text-green-700 border-green-200',
  systems: 'bg-orange-100 text-orange-700 border-orange-200',
};

export default function Tag({ type, label, href }: TagProps) {
  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${tagStyles[type]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
