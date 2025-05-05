
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocsSidebar from '@/components/DocsSidebar';
import DocsContent from '@/components/DocsContent';
import { SidebarProvider } from '@/components/ui/sidebar';

const Documentation: React.FC = () => {
  const { section = 'basics' } = useParams<{ section?: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <SidebarProvider>
        <main className="flex-1 flex">
          <DocsSidebar />
          <div className="flex-1 p-4 md:p-8 overflow-auto">
            <DocsContent section={section} />
          </div>
        </main>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default Documentation;
