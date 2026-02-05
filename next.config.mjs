import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, { theme: 'github-dark' }],
    ],
  },
});

export default withMDX(nextConfig);
