
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Book, Code, FileCode, FileType, Key, Settings, Shield, Type } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
  SidebarFooter,
  SidebarSeparator
} from '@/components/ui/sidebar';

const DocsSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { section = 'basics' } = useParams<{ section?: string }>();
  
  const menuItems = [
    { id: 'basics', label: 'Basics & Syntax', icon: <FileCode className="h-4 w-4" /> },
    { id: 'data-types', label: 'Data Types', icon: <Type className="h-4 w-4" /> },
    { id: 'control-flow', label: 'Control Flow', icon: <FileType className="h-4 w-4" /> },
    { id: 'functions', label: 'Functions', icon: <Code className="h-4 w-4" /> },
    { id: 'error-handling', label: 'Error Handling', icon: <Shield className="h-4 w-4" /> },
    { id: 'advanced', label: 'Advanced Features', icon: <Settings className="h-4 w-4" /> },
    { id: 'annotations', label: 'Annotations', icon: <Key className="h-4 w-4" /> }
  ];
  
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5 text-mint-primary" />
          <span className="font-semibold">Mint Docs</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      
      <SidebarSeparator />
      
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton 
                  isActive={section === item.id}
                  onClick={() => navigate(`/docs/${item.id}`)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-xs text-center">
        <p>Mint Language Documentation v0.1.0</p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DocsSidebar;
