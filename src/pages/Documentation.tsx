
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocsSidebar from '@/components/DocsSidebar';
import DocsContent from '@/components/DocsContent';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const Documentation: React.FC = () => {
  const { section = 'basics' } = useParams<{ section?: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <SidebarProvider>
        <main className="flex-1 flex w-full">
          <DocsSidebar />
          <div className="flex-1 p-4 md:p-8 overflow-auto relative">
            <div className="absolute top-0 left-0 z-10 p-2">
              <SidebarTrigger className="text-mint-primary bg-background/70 backdrop-blur hover:bg-background/90" />
            </div>
            <DocsContent section={section} />
          </div>
        </main>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default Documentation;
