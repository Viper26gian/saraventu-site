import React from 'react';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2 text-sm">
      <ol className="flex items-center space-x-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">›</span>
            )}
            {item.href ? (
              <a 
                href={item.href} 
                className="hover:text-[#38A0ED] transition-colors"
                {...(index === items.length - 1 && { 'aria-current': 'page' })}
              >
                {item.label}
              </a>
            ) : (
              <span className={index === items.length - 1 ? 'text-[#38A0ED] font-medium' : ''}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;