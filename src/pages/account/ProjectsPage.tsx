
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, ChevronRight, Plus, Folder } from 'lucide-react';

const projects = [
  {
    id: '2001',
    name: 'Видеонаблюдение в офисе',
    date: '10.03.2025',
    status: 'completed',
    statusText: 'Завершен',
    type: 'Монтаж',
  },
  {
    id: '2002',
    name: 'Пожарная сигнализация на складе',
    date: '05.05.2025',
    status: 'in_progress',
    statusText: 'В процессе',
    type: 'Проектирование',
  },
];

const ProjectStatusBadge = ({ status }) => {
  const variants = {
    completed: { variant: "outline", className: "border-green-500 text-green-700" },
    in_progress: { variant: "outline", className: "border-blue-500 text-blue-700" },
    planned: { variant: "outline", className: "border-orange-500 text-orange-700" },
  };

  const { variant, className } = variants[status] || variants.in_progress;

  return <Badge variant={variant} className={className}>{status}</Badge>;
};

const ProjectsPage = () => {
  return (
    <div className="py-8">
      <div className="guard-container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Мои проекты</h1>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Новый проект
          </Button>
        </div>
        
        {projects.length > 0 ? (
          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gray-100 p-2">
                        <FileText className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary" className="font-normal">
                        {project.type}
                      </Badge>
                      <ProjectStatusBadge status={project.status} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        Подробнее
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Folder className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">У вас пока нет проектов</h3>
            <p className="text-gray-500 mb-6">Создайте новый проект для отслеживания работ по установке систем безопасности</p>
            <Button>Создать проект</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
