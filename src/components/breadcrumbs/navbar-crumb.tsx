"use client"
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  
  const breadcrumbItems = useMemo(() => {
    // Split the pathname and filter out empty strings
    const paths = pathname.split('/').filter(path => path);
    
    // If we're on the homepage, just show Home
    if (paths.length === 0) {
      return [{ label: 'Home', path: '/', isCurrentPage: true }];
    }
    
    // Create breadcrumb items with proper paths
    const items = [{ label: 'Home', path: '/', isCurrentPage: false }];
    
    // Build up the paths and add each segment
    let currentPath = '';
    
    paths.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isCurrentPage = index === paths.length - 1;
      
      // Capitalize first letter and replace hyphens with spaces
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
      
      items.push({
        label,
        path: currentPath,
        isCurrentPage
      });
    });
    
    return items;
  }, [pathname]);
  
  // Check if we need to collapse some items
  const shouldCollapse = breadcrumbItems.length > 4;
  const visibleItems = shouldCollapse 
    ? [
        breadcrumbItems[0], // Home
        ...breadcrumbItems.slice(breadcrumbItems.length - 2) // Last two items
      ]
    : breadcrumbItems;
    
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {visibleItems.map((item, index) => {
          // For the collapsed items, show dropdown
          if (shouldCollapse && index === 1) {
            return (
              <>
                <BreadcrumbSeparator key={`sep-${index}`} />
                <BreadcrumbItem key={`item-ellipsis`}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {breadcrumbItems.slice(1, breadcrumbItems.length - 2).map((hiddenItem, hiddenIndex) => (
                        <DropdownMenuItem key={`hidden-${hiddenIndex}`} asChild>
                          <BreadcrumbLink href={hiddenItem.path}>
                            {hiddenItem.label}
                          </BreadcrumbLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator key={`sep-ellipsis`} />
              </>
            );
          }
          
          return (
            <>
              {index > 0 && <BreadcrumbSeparator key={`sep-${index}`} />}
              <BreadcrumbItem key={`item-${index}`}>
                {item.isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}