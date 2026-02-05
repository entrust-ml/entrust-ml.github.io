import { visit } from 'unist-util-visit';
import type { Root, Image } from 'mdast';

const sizeClasses: Record<string, string> = {
  xs: 'img-xs',
  sm: 'img-sm',
  md: 'img-md',
  lg: 'img-lg',
  full: 'img-full',
};

export default function remarkImageSize() {
  return (tree: Root) => {
    visit(tree, 'image', (node: Image) => {
      const match = node.alt?.match(/^(.+?)\s*\|\s*(xs|sm|md|lg|full)$/);
      if (match) {
        const [, alt, size] = match;
        node.alt = alt.trim();
        // Add the size class via data attribute (will be passed to HTML)
        (node.data ??= {}).hProperties = {
          ...((node.data as Record<string, unknown>).hProperties as Record<string, unknown> || {}),
          className: sizeClasses[size],
        };
      }
    });
  };
}
